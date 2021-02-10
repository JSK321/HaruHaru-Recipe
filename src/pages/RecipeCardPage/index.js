import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../utils/API'
import RecipeCard from '../../components/RecipeCard'

export default function RecipeCardPage(props) {
    const [recipeState, setRecipeState] = useState({
        recipeName: "",
        recipeDescript: "",
        recipeImage: "",
        recipeId: "",
        ownerId: "",
        numberOfLikes: 0
    });
    const [ingredientState, setIngredientState] = useState({
        item: []
    });
    const [directionState, setDirectionState] = useState({
        directions: "",
    });
    const [savedRecipeState, setSavedRecipeState] = useState({
        accountName: "",
        id: "",
        isSaved: false
    })
    const [ownerProfileState, setOwnerProfileState] = useState({
        owner: ""
    })
    // const [profileState, setProfileState] = useState({
    //     name: "",
    //     accountName: "",
    //     email: "",
    //     savedRecipes: "",
    //     token: "",
    //     id: "",
    //     isLoggedIn: false
    // })

    const { recipeName } = useParams();
    const { id } = useParams();

    useEffect(() => {
        // fetchUserData()
        fetchData()
        fetchIngreData()
        fetchSavedRecipes()
    }, [])

    // function fetchUserData() {
    //     const token = localStorage.getItem('token')
    //     if (localStorage.getItem('token') !== null) {
    //         API.getProfile(token).then(profileData => {
    //             if (profileData) {
    //                 setProfileState({
    //                     name: profileData.name,
    //                     accountName: profileData.accountName,
    //                     savedRecipes: profileData.SavedRecipes,
    //                     token: token,
    //                     id: profileData.id,
    //                     isLoggedIn: true
    //                 })
    //             } else {
    //                 localStorage.removeItem("token")
    //                 setProfileState({
    //                     name: "",
    //                     accountName: "",
    //                     email: "",
    //                     profileImage: "",
    //                     recipes: [],
    //                     savedRecips: [],
    //                     token: "",
    //                     id: "",
    //                     isLoggedIn: false
    //                 })
    //             }
    //         })
    //     }
    // }

    function fetchData() {
        API.getOneRecipe(id).then(data => {
            if (data !== null || data !== undefined) {
                setRecipeState({
                    recipeName: data.recipeName,
                    recipeDescript: data.recipeDescript,
                    recipeImage: data.recipeImage,
                    recipeId: recipeName,
                    ownerId: data.UserId,
                    numberOfLikes: data.numberOfLikes
                })
                setDirectionState({
                    directions: data.Steps[0].directions
                })
                API.getOneUser(data.UserId).then(data => {
                    setOwnerProfileState({
                        owner: data.accountName
                    })
                })
            }
        })
    }

    function fetchIngreData() {
        API.getAllIngreForRecipe(id).then(data => {
            if (data !== null && data !== undefined) {
                setIngredientState({
                    item: data
                })
            }
        })
    }

    async function fetchSavedRecipes() {
        const token = localStorage.getItem('token')
        if (token !== null && token !== undefined && token !== "") {
            const profile = await API.getProfile(token)
            let account = profile.accountName
            let savedData = await API.getAllSavedRecipeByRecipeId(id)
            // console.log(savedData)
            let user = await savedData.find(obj => obj.savedByUser === account)
            // console.log(user)
            if (user != undefined && user.savedByUser === account) {
                setSavedRecipeState({
                    accountName: user.savedByUser,
                    id: user.UserId,
                    isSaved: true
                })
            } else {
                console.log("else")
                setSavedRecipeState({
                    accountName: "",
                    id: "",
                    isSaved: false
                })
            }
        }


    }

    // function fetchSavedRecipes() {
    //     API.getOneSavedRecipe(id).then(data => {
    //         console.log(data)
    //         console.log(props.profile.accountName)
    //         if (data !== null) {
    //             if (data.UserId === data.ownerId) {
    //                 setSavedRecipeState({
    //                     accountName: data.accountName,
    //                     id: data.ownerId,
    //                     isSaved: false
    //                 })
    //             } else if (data.UserId === data.ownerId) {
    //                 console.log("else if")
    //                 // setSavedRecipeState({
    //                 //     ownerId: data.ownerId,
    //                 //     savedByUser: data.savedByUser,
    //                 //     isSaved: true
    //                 // })
    //             } else {
    //                 console.log("else")
    //                 // setSavedRecipeState({
    //                 //     isSaved: false
    //                 // })
    //                 // setSavedRecipeState({
    //                 //     ownerId: data.ownerId,
    //                 //     savedByUser: data.savedByUser,
    //                 //     isSaved: true
    //                 // })
    //             }
    //         } else {
    //             setSavedRecipeState({
    //                 isSaved: false
    //             })
    //         }
    //     })
    // }

    function numOfLikes() {
        const newLikes = recipeState.numberOfLikes + 1
        API.updateNumOfLikes(id, newLikes)
    }

    const handleSaveRecipeBtn = event => {
        event.preventDefault()
        numOfLikes()
        API.saveRecipe(props.profile.token, {
            recipeName: recipeState.recipeName,
            ownerId: recipeState.ownerId,
            savedByUser: props.profile.accountName,
            recipeId: id,
            isSaved: true
        }).then(afterSave => {
            window.location.reload()
        })
    }

    return (
        <div>
            <RecipeCard
                handleSaveRecipeBtn={handleSaveRecipeBtn}
                //Recipe
                recipeName={recipeState.recipeName}
                recipeDescript={recipeState.recipeDescript}
                recipeImage={recipeState.recipeImage}
                ownerId={recipeState.ownerId}
                recipeId={id}
                numberOflikes={recipeState.numberOfLikes}
                // Ingredients
                ingredients={ingredientState.item}
                // Directions
                directions={directionState.directions}
                // User Info
                userId={props.profile.id}
                isLoggedIn={props.profile.isLoggedIn}
                accountName={props.profile.accountName}
                isSaved={savedRecipeState.isSaved}
                // savedOwnerId={savedRecipeState.ownerId}
                owner={ownerProfileState.owner}
                savedByUser={savedRecipeState.accountName}
            />
        </div>
    )
}
