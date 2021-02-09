import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../utils/API'
import AddIngreForm from '../../components/AddIngreForm'

export default function AddMoreIngrePage(props) {
    // -----------------States-----------------
    const [ingredientState, setIngredientState] = useState({
        ingredient: "",
        ingredientQuant: "",
        ingredientUnit: "",
        RecipeId: ""
    });

    const [ingreAddedState, setIngreAddedState] = useState({
        item: []
    });
    const { id } = useParams();

    useEffect(() => {
    }, [])

    function fetchIngreData() {
        API.getAllIngreForRecipe(id).then(data => {
            setIngreAddedState({
                item: data
            })
        })
    }
    // -----------------Input changes-----------------
    const handleIngreInputChange = event => {
        const { name, value } = event.target
        setIngredientState({
            ...ingredientState,
            [name]: value
        })
    };

    const handleAddIngreBtn = event => {
        event.preventDefault();
        if (
            props.profile.isLoggedIn === true &&
            ingredientState.ingredient !== "" &&
            ingredientState.ingredient !== null &&
            ingredientState.ingredientQuant !== "" &&
            ingredientState.ingredientQuant !== null
        ) {
            API.createIngredients(props.profile.token, {
                ...ingredientState,
                RecipeId: id
            }).then(afterAdd => {
                setIngredientState({
                    ingredient: "",
                    ingredientQuant: "",
                    ingredientUnit: "",
                    RecipeId: ""
                })
                fetchIngreData()
            })
        } else {
            // alert("Please fill out all fields for ingredients")
            fetchIngreData()
        }
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        API.createIngredients(props.profile.token, {
            ...ingredientState,
            RecipeId: id
        })
        window.location.href=`/updaterecipe/${id}`
    }

    return (
        <div>
            <AddIngreForm
                handleIngreInputChange={handleIngreInputChange}
                handleFormSubmit={handleFormSubmit}
                handleAddIngreBtn={handleAddIngreBtn}
                ingredient={ingredientState.ingredient}
                ingredientQuant={ingredientState.ingredientQuant}
                ingredientUnit={ingredientState.ingredientUnit}
                ingredients={ingreAddedState.item}
            />
        </div>
    )
}
