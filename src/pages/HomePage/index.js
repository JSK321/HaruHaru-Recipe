import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import RecipeViewCard from '../../components/RecipeViewCard'
import NoPageCard from '../../components/NoPageCard'
import Footer from '../../components/Footer'
import { Container, Row, FormControl } from 'react-bootstrap'
import './styles.css'


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
                recipeObj.recipeName.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            )
        })
        if (keyword === "") {
            fetchRecipeInfo()
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
            <h1>HaruHaru Recipe</h1>

            <FormControl
                type="search"
                placeholder="Search"
                className="homeSearchBar form-control"
                onChange={handleSearchInput}
            />

            <Row noGutters>
                {!recipeInfoState.recipes || recipeInfoState.recipes < 1 ?
                    <NoPageCard />
                    :
                    recipeInfoState.recipes.map(data => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
            <Footer />
        </Container>
    )
}
