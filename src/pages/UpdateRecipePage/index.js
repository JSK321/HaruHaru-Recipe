import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../utils/API'
import UpdateRecipeForm from '../../components/UpdateRecipeForm'

export default function UpdateRecipePage(props) {
    const [recipeState, setRecipeState] = useState({
        recipeName: "",
        recipeCategory: "",
        recipeDescript: "",
        recipeImage: ""
    })
    const [ingredientState, setIngredientState] = useState({
        ingredient: "",
        ingredientQuant: "",
        ingredientUnit: ""
    })
    const [directionState, setDirectionState] = useState({
        directions: ""
    })
    const [recipeIngreState, setRecipeIngreState] = useState({
        item: []
    })
    const [imgLoadingState, setImgLoadingState] = useState(false)

    const { id } = useParams();


    useEffect(() => {
        console.log(id)
        fetchRecipeData()
    }, [])

    function fetchRecipeData() {
        API.getAllIngreForRecipe(id).then(data => {
            setRecipeIngreState({
                item: data
            })
        })
        API.getOneRecipe(id).then(data => {
            if (data !== null && data !== undefined) {
                setRecipeState({
                    recipeName: data.recipeName,
                    recipeCategory: data.recipeCategory,
                    recipeDescript: data.recipeDescript,
                    recipeImage: data.recipeImage,
                    recipeId: id,
                    ownerId: data.UserId
                })
                setDirectionState({
                    directions: data.Steps[0].directions,
                    RecipeId: data.Steps[0].RecipeId,
                    UserId: data.Steps[0].UserId,
                })
            }
        })
    }

    const handleRecipeInputChange = event => {
        const { name, value } = event.target
        setRecipeState({
            ...recipeState,
            [name]: value
        })
    }

    const handleSelectCategory = event => {
        let category = event.target.value
        setRecipeState({
            ...recipeState,
            recipeCategory: category
        })
    };

    const handleIngreInputChange = event => {
        let id = event.target.id
        const { name, value } = event.target
        if (recipeIngreState.item !== null || recipeIngreState.item < 1) {
            for (let i = 0; i < recipeIngreState.item.length; i++) {
                if (recipeIngreState.item[i].id == id) {
                    setIngredientState({
                        ...ingredientState,
                        [name]: value,
                        RecipeId: id
                    })
                }
            }
        }
    };

    const handleDirectInputChange = event => {
        const { name, value } = event.target
        setDirectionState({
            ...directionState,
            [name]: value
        })
    };

    const handleIngreSetButton = event => {
        event.preventDefault()
        API.updateOneIngre(
            props.profile.token,
            ingredientState.RecipeId,
            ingredientState.ingredient,
            ingredientState.ingredientQuant,
            ingredientState.ingredientUnit,
        )
    }

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

    const handleFormSubmit = event => {
        event.preventDefault()
        API.updateRecipe(
            props.profile.token,
            id,
            recipeState.recipeName,
            recipeState.recipeDescript,
            recipeState.recipeCategory,
            recipeState.recipeImage,
        )

        API.updateDirection(
            props.profile.token,
            id,
            directionState.directions,
        )

        API.updateSavedRecipe(
            props.profile.token,
            id,
            recipeState.recipeName
        )
    }

    return (
        <div>
            <UpdateRecipeForm
                //Recipe
                recipeId={id}
                recipeName={recipeState.recipeName}
                recipeCategory={recipeState.recipeCategory}
                recipeDescript={recipeState.recipeDescript}
                recipeImage={recipeState.recipeImage}
                loading={imgLoadingState}
                // Ingredients
                ingredients={recipeIngreState.item}
                // Directions
                directions={directionState.directions}
                // Input Changes
                handleRecipeInputChange={handleRecipeInputChange}
                handleSelectCategory={handleSelectCategory}
                handleIngreInputChange={handleIngreInputChange}
                handleDirectInputChange={handleDirectInputChange}
                // Button clicks
                handleUploadImgBtn={handleUploadImgBtn}
                handleUploadImg={handleUploadImg}
                handleIngreSetButton={handleIngreSetButton}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    )
}
