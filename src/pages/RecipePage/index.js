import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import recipeAPI from '../../utils/recipeAPI'
import RecipeForm from '../../components/RecipeForm'

export default function RecipePage() {
    // -----------------States-----------------
    // ----------------------------------------
    const [recipeState, setRecipeState] = useState({
        recipeName: "",
        // recipeImage: ""
    });
    const [ingredientState, setIngredientState] = useState({
        ingredients: "",
        RecipeId: ""
    });
    const [directionState, setDirectionState] = useState({
        directions: "",
        RecipeId: "",
        UserId: ""
    })
    const { id } = useParams();

    useEffect(()=> {

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
    const handleIngreInputChange = event => {
        const { name, value } = event.target
        setIngredientState({
            ...ingredientState,
            [name]: value
        })
    };
    const handleDirectInputChange = event => {
        const { name, value } = event.target
        setDirectionState({
            ...directionState,
            [name]: value
        })
    };
    // const handleIngreClickButton = event => {
    //     try {
    //         event.preventDefault()
    //         let newIngre = ingreAddedState.ingredients.push(ingredientState.ingredientName)
    //         setIngreAddedState({
    //             ...ingreAddedState,
    //             newIngre
    //         })
    //         setIngredientState({
    //             ingredientName: ""
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };


    return (
        <div>
            <RecipeForm
                // handleInputs
                handleRecipeInputChange={handleRecipeInputChange}
                handleIngreInputChange={handleIngreInputChange}
                handleDirectInputChange={handleDirectInputChange}
                // handleIngreClickButton={handleIngreClickButton}

                // // Values
                recipeName={recipeState.recipeName}
                ingredients={ingredientState.ingredients}
                directions={directionState.directions}
            />
        </div>
    );
};
