import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import RecipeViewCard from '../../components/RecipeViewCard'
import NoPageCard from '../../components/NoPageCard'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import './styles.css'

export default function CategoryPage() {
    const [recipeInfoState, setRecipeInfoState] = useState({
        recipes: []
    })

    const [searchState, setSearchState] = useState({
        search: ""
    })

    const { category } = useParams();

    useEffect(() => {
        fetchDinnerRecipeInfo()
    }, [])

    function fetchDinnerRecipeInfo() {
        API.getAllCategoryRecipe(category).then(data => {
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
            fetchDinnerRecipeInfo()
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
            <h1 className="categoryName">Browse {category} Recipes</h1>
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
                    className="homeSearchBar form-control"
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
                    <NoPageCard />
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
            <Footer />
        </Container >
    )
}
