import React, { useState, useEffect } from 'react'
// import recipeAPI from '../../utils/recipeAPI'
import RecipeForm from '../../components/RecipeForm'

export default function RecipePage() {
    const [recipeState, setRecipeState] = useState({
        recipeName: "",
        // recipeImage: ""
    })

    const [recipeIngreState, setRecipeIngreState] = useState({
        ingredientId: "",
        // measurementUnitId: "",
        measurementQuantId: "",
        RecipeId: "",
    })

    const [measurementQuantState, setMeasurementQuantState] = useState({
        quantAmount: "",
        RecipeIngredientId: ""
    })

    const [ingredientState, setIngredientState] = useState({
        ingredientName: "",
        RecipeIngredientId: ""
    })
    
    return (
        <div>
            <RecipeForm />
        </div>
    )
}
