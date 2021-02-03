import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import RecipeViewCard from '../../components/RecipeViewCard'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'

export default function BreakfastPage() {
    const [recipeInfoState, setRecipeInfoState] = useState({
        recipes: []
    })

    const [searchState, setSearchState] = useState({
        search: ""
    })

    useEffect(() => {
        fetchBreakfastRecipeInfo()
    }, [])

    function fetchBreakfastRecipeInfo() {
        const breakfast = "breakfast"
        API.getAllCategoryRecipe(breakfast).then(data => {
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
            fetchBreakfastRecipeInfo()
        }
        setRecipeInfoState({
            recipes: filtered
        })
        setSearchState({
            ...searchState,
            search: keyword
        })
    }

    return (
        <Container>
            <h1>Browse Breakfast Recipes!</h1>
            <InputGroup
                style={{
                    width: "250px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                }}
            >
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="form-control"
                    onChange={handleSearchInput}
                    style={{
                        marginTop: "10px",
                        borderRadius: "10px",
                        // border: "2px solid slateblue",
                        // color: "midnightblue"
                    }}
                />
            </InputGroup>
            <Row>
                {!recipeInfoState.recipes || recipeInfoState.recipes < 1 ?
                    <div>Sorry, no recipes found.</div>
                    :
                    recipeInfoState.recipes.map(data => (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <RecipeViewCard
                                key={data.id}
                                recipeId={data.id}
                                recipeName={data.recipeName}
                                recipeImage={data.recipeImage}
                                recipeDescript={data.recipeDescript}
                            />
                        </div>
                    ))
                }
            </Row>
        </Container >
    )
}
