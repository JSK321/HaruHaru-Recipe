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
        ownerId: ""
    });
    const [ingredientState, setIngredientState] = useState({
        item: []
    });
    const [directionState, setDirectionState] = useState({
        directions: "",
    });
    const [savedRecipeState, setSavedRecipeState] = useState({
        isSaved: false
    })
    const [ownerProfileState, setOwnerProfileState] = useState({
        owner: ""
    })
 
    const { recipeName } = useParams();
    const { id } = useParams();

    useEffect(() => {
        fetchData()
        fetchIngreData()
        fetchSavedRecipes()
    }, [])

    function fetchData() {
        API.getOneRecipe(id).then(data => {
            if (data !== null || data !== undefined) {
                setRecipeState({
                    recipeName: data.recipeName,
                    recipeDescript: data.recipeDescript,
                    recipeImage: data.recipeImage,
                    recipeId: recipeName,
                    ownerId: data.UserId
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

    function fetchSavedRecipes() {
        API.getOneSavedRecipe(id).then(data => {
            if (data !== null) {
                if (data.UserId === data.ownerId) {
                    setSavedRecipeState({
                        isSaved: false
                    })
                } else {
                    setSavedRecipeState({
                        ownerId: data.ownerId,
                        isSaved: true
                    })
                }
            } else {
                setSavedRecipeState({
                    isSaved: false
                })
            }
        })
    }

    const handleSaveRecipeBtn = event => {
        event.preventDefault()
        if (props.profile.isLoggedIn !== false) {
            API.saveRecipe(props.profile.token, {
                recipeName: recipeState.recipeName,
                ownerId: recipeState.ownerId,
                savedByUser: props.profile.accountName,
                recipeId: id,
                isSaved: true
            }).then(afterSave => {
                window.location.href =`/profile/${props.profile.accountName}`
                // alert("Recipe saved!")
            })
        } else {
            alert("Please sign in to save recipe!")
        }
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
                // Ingredients
                ingredients={ingredientState.item}
                // Directions
                directions={directionState.directions}
                userId={props.profile.id}
                isLoggedIn={props.profile.isLoggedIn}
                accountName={props.profile.accountName}
                isSaved={savedRecipeState.isSaved}
                savedOwnerId={savedRecipeState.ownerId}
                owner={ownerProfileState.owner}
            />
        </div>
    )
}
