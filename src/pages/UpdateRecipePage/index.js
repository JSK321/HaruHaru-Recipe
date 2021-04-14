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
    const [previIngredientState, setPrevIngredientState] = useState({
        data: []
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
        fetchRecipeData()
    }, [])

    function fetchRecipeData() {
        API.getAllIngreForRecipe(id).then(data => {
            setRecipeIngreState({
                item: data
            })
            setPrevIngredientState({
                data: data
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
        let data = recipeIngreState.item

        // Map through recipe ingredients and update recipe ingredient, quantity, and unit
        let updateRecipeIngre = data.map(recipes => {
            if (recipes.ingredient == name && recipes.id == id) {
                return { ...recipes, ingredient: value }
            }
            if (recipes.ingredientQuant == name && recipes.id == id) {
                return { ...recipes, ingredientQuant: value }
            }
            if (recipes.ingredientUnit == name && recipes.id == id) {
                return { ...recipes, ingredientUnit: value }
            }
            return recipes
        })
        setRecipeIngreState({ item: updateRecipeIngre })
    };


    const handleDirectInputChange = event => {
        const { name, value } = event.target
        setDirectionState({
            ...directionState,
            [name]: value
        })
    };

    const handleIngreDeleteButton = event => {
        event.preventDefault()
        let id = event.target.id
        let index = recipeIngreState.item.findIndex(obj => obj.id == id)
        let ingre = recipeIngreState.item[index]
        const token = localStorage.getItem("token")
        let confirmAlert = window.confirm(`Are you sure to remove ${ingre.ingredient}?`)
        let closeBtnId = event.currentTarget.id
        if (confirmAlert === true) {
            API.deleteIngredient(token, closeBtnId)
        }
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
        let ingreList = recipeIngreState.item
        let prevList = previIngredientState.data

        API.updateRecipe(
            props.profile.token,
            id,
            recipeState.recipeName,
            recipeState.recipeDescript,
            recipeState.recipeCategory,
            recipeState.recipeImage,
        )

        for (let i = 0; i < ingreList.length; i++) {
            if (ingreList[i] != prevList[i]) {
                ingreList.forEach(ingre => 
                    API.updateOneIngre(
                        props.profile.token,
                        ingreList[i].id,
                        ingreList[i].ingredient,
                        ingreList[i].ingredientQuant,
                        ingreList[i].ingredientUnit
                    )
                )
            }
        }

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

        window.location.href = `/recipe/${id}/${recipeState.recipeName}`
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
                // handleIngreSetButton={handleIngreSetButton}
                handleIngreDeleteButton={handleIngreDeleteButton}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    )
}
