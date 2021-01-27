import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../utils/API'
import RecipeCard from '../../components/RecipeCard'

export default function RecipeCardPage() {
    const [recipeState, setRecipeState] = useState({
        recipeName: "",
        recipeDescript: "",
        recipeImage: ""
    });
    const [ingredientState, setIngredientState] = useState({
        item: []
    });
    const [directionState, setDirectionState] = useState({
        directions: "",
    });
    const { id } = useParams();

    useEffect(() => {
        fetchData()
        fetchIngreData()
    }, [])

    function fetchData() {
        API.getOneRecipe(id).then(data => {
            if (data !== null && data !== undefined) {
                setRecipeState({
                    recipeName: data.recipeName,
                    recipeDescript: data.recipeDescript,
                    recipeImage: data.recipeImage
                })
                setDirectionState({
                    directions: data.Steps[0].directions
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

    return (
        <div>
            <RecipeCard
                recipeName={recipeState.recipeName}
                recipeDescript={recipeState.recipeDescript}
                recipeImage={recipeState.recipeImage}
                ingredient={ingredientState.ingredient}
                ingredientQuant={ingredientState.ingredientQuant}
                ingredientUnit={ingredientState.ingredientUnit}
                directions={directionState.directions}
                ingredients={ingredientState.item}
            />
        </div>
    )
}
