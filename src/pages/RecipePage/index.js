import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import API from '../../utils/API'
import RecipeForm from '../../components/RecipeForm'

export default function RecipePage(props) {
    // -----------------States-----------------
    // ----------------------------------------
    const [recipeState, setRecipeState] = useState({
        recipeName: "",
        recipeImage: ""
    });
    const [imgLoadingState, setImgLoadingState] = useState(false);
    // const [ingredientState, setIngredientState] = useState({
    //     ingredients: "",
    //     RecipeId: ""
    // });
    // const [directionState, setDirectionState] = useState({
    //     directions: "",
    //     RecipeId: "",
    //     UserId: ""
    // });

    // const { id } = useParams();

    useEffect(() => {

    }, [])

    // -----------------Input changes-----------------
    // -----------------------------------------------
    const handleRecipeInputChange = event => {
        const { name, value } = event.target
        setRecipeState({
            ...recipeState,
            [name]: value
        })
    };
    const handleUploadImgBtn = event => {
        event.preventDefault()
        document.getElementById('uploadImg').click()
    };
    const handleUploadImg = async event => {
        event.preventDefault()
        const files = event.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'ummas_cb')
        setImgLoadingState(true)
        const res = await API.uploadImage(data)
        const file = await res.json()
        setRecipeState({
            ...recipeState,
            recipeImage: file.secure_url
        })
        setImgLoadingState(false)
    };
    // const handleIngreInputChange = event => {
    //     const { name, value } = event.target
    //     setIngredientState({
    //         ...ingredientState,
    //         [name]: value
    //     })
    // };
    // const handleDirectInputChange = event => {
    //     const { name, value } = event.target
    //     setDirectionState({
    //         ...directionState,
    //         [name]: value
    //     })
    // };

    const handleFormSubmit = event => {
        event.preventDefault()
        if (props.profile.isLoggedIn === true) {
            API.createRecipe(props.profile.token, {
                ...recipeState,
            }).then(afterCreate => {
                API.getRecipes().then(res => {
                    let recipeId = res.slice(-1)[0].id
                    window.location.href = `/ingreform/${recipeId}`
                }
                )
            })
        } else {
            alert("Sign in to add new recipe")
        }
        // API.createIngredients(props.profile.token, {
        //     ...ingredientState,

        // })
    }

    return (
        <div>
            <RecipeForm
                // handleInputs
                handleRecipeInputChange={handleRecipeInputChange}
                // handleIngreInputChange={handleIngreInputChange}
                // handleDirectInputChange={handleDirectInputChange}
                handleFormSubmit={handleFormSubmit}
                handleUploadImgBtn={handleUploadImgBtn}
                handleUploadImg={handleUploadImg}

                // // Values
                recipeName={recipeState.recipeName}
                recipeImage={recipeState.recipeImage}
                loading={imgLoadingState}
            // ingredients={ingredientState.ingredients}
            // directions={directionState.directions}
            />
        </div>
    );
};
