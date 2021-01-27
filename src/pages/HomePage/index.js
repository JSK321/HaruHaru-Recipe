import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import RecipeViewCard from '../../components/RecipeViewCard'


export default function HomePage() {
    const [recipeInfoState, setRecipeInfoState] = useState({
        recipes: []
    })

    const [searchState, setSearchState] = useState({
        search: ""
    })

    useEffect(() => {
        fetchRecipeInfo()
    }, [])

    function fetchRecipeInfo() {
        API.getRecipes().then(data => {
            setRecipeInfoState({
                recipes: data
            })
        })
    }

    const handleSearchInput = event => {
        event.preventDefault()
        let keyword = event.target.value
        let filtered = recipeInfoState.recipes.filter(recipeObj => {
            return (
                recipeObj.recipeName.toLowerCase().indexOf(keyword) > -1
            )
        })
        if (keyword === "") {
            fetchRecipeInfo()
        }
        setRecipeInfoState({
            recipes: filtered
        })
        setSearchState({
            search: keyword
        })
    }

    return (
        <div className="container" style={{ marginBottom: "75px", }}>
            <input
                className="form-control"
                type="search"
                placeholder="Search"
                onChange={handleSearchInput}
                style={{
                    width: "250px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    position:"sticky",
                    top:"0",
                    zIndex:"1",
                    // border: "2px solid slateblue",
                    // color: "midnightblue"
                }}
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
