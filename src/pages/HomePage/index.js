import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../utils/API'
import RecipeViewCard from '../../components/RecipeViewCard'
import CarouselComponent from '../../components/Carousel'

export default function HomePage() {
    const [recipeInfoState, setRecipeInfoState] = useState({
        recipes: []
    })
    const { id } = useParams();

    useEffect(() => {
        fetchRecipeInfo()
        console.log(recipeInfoState)
    }, [])

    function fetchRecipeInfo() {
        API.getRecipes().then(data => {
            setRecipeInfoState({
                recipes: data
            })
        })
    }

    return (
        <div className="container" style={{ marginBottom: "75px", }}>
            <CarouselComponent

            />
            <div className="row">
                {recipeInfoState.recipes !== null ?
                    recipeInfoState.recipes.map(data => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <RecipeViewCard
                                recipeId={data.id}
                                recipeName={data.recipeName}
                                recipeImage={data.recipeImage}
                                recipeDescript={data.recipeDescript}
                            />
                        </div>
                    ))
                    : null}
            </div>
        </div>
    )
}
