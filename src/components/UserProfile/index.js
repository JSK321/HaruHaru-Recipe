import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { CloseButton } from 'react-bootstrap'
import './styles.css'

export default function UserProfile(props) {
    const [key, setKey] = useState('recipe');

    const [userRecipesState, setUserRecipesState] = useState({
        recipe: [],
    })
    const [savedRecipesState, setSavedRecipesState] = useState({
        savedRecipe: [],
    })

    const [searchState, setSearchState] = useState({
        search: ""
    })

    const [savedSearchState, setSavedSearchState] = useState({
        search: ""
    })

    useEffect(() => {
        fetchRecipeInfo()
    }, [])

    function fetchRecipeInfo() {
        const token = localStorage.getItem("token")
        if (token) {
            API.getProfile(token).then(data => {
                setUserRecipesState({
                    recipe: data.Recipes
                })
                setSavedRecipesState({
                    savedRecipe: data.SavedRecipes
                })
            })
        }
    }

    const handleSearchInput = event => {
        event.preventDefault()
        let keyword = event.target.value
        let filtered = userRecipesState.recipe.filter(recipeObj => {
            return (
                recipeObj.recipeName.toLowerCase().indexOf(keyword) > -1
            )
        })
        if (keyword === "") {
            fetchRecipeInfo()
        }
        setUserRecipesState({
            recipe: filtered
        })
        setSearchState({
            ...searchState,
            search: keyword
        })
    }

    const handleSavedSearchInput = event => {
        event.preventDefault()
        let keyword = event.target.value
        let savedFiltered = savedRecipesState.savedRecipe.filter(recipeObj => {
            return (
                recipeObj.recipeName.toLowerCase().indexOf(keyword) > -1
            )
        })
        if (keyword === "") {
            fetchRecipeInfo()
        }
        setSavedRecipesState({
            savedRecipe: savedFiltered
        })
        setSavedSearchState({
            ...savedSearchState,
            search: keyword
        })
    }

    return (
        <Container>
            <Row className="justify-content-md-center no-gutters">
                <Col md={3}>
                    <Card>
                        <Card.Img
                            className="ProfileImage"
                            variant="top"
                        // src="https://res.cloudinary.com/jsk321/image/upload/v1611706500/ummas_cb/2014cody_ku5msz.jpg"
                        />
                        <Card.Body>
                            <Card.Text>
                                <strong>Name:</strong> {props.name}
                            </Card.Text>
                            <Card.Text>
                                <strong>Email:</strong> {props.email}
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={9}>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="recipe" title="Recipes">
                            <Card>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type="search"
                                            placeholder="Search"
                                            onChange={handleSearchInput}
                                        />
                                    </InputGroup>
                                    <ListGroup variant="flush">
                                        <Row lg={3} md={2} sm={2} xs={1} className="no-gutters">
                                            {userRecipesState.recipe !== "" ?
                                                userRecipesState.recipe.map(item => (
                                                    <Link
                                                        className="RecipeListGroup"
                                                        to={`/recipe/${item.id}`}
                                                        id={item.id}
                                                    >
                                                        <CloseButton
                                                            onClick={props.handleRecipeDeleteButton}
                                                            id={item.id}
                                                        >
                                                        </CloseButton>
                                                        {item.recipeName}

                                                    </Link>

                                                ))
                                                : null}
                                        </Row>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="savedRecipes" title="Saved Recipes">
                            <Card>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type="search"
                                            placeholder="Search"
                                            onChange={handleSavedSearchInput}
                                        />
                                    </InputGroup>
                                    <ListGroup variant="flush">
                                        <Row lg={3} md={2} sm={2} xs={1} className="no-gutters">
                                            {savedRecipesState.savedRecipe !== "" ?
                                                savedRecipesState.savedRecipe.map(item => (
                                                    <Link
                                                        className="RecipeListGroup"
                                                        to={`/recipe/${item.recipeId}`}
                                                    >
                                                        <CloseButton
                                                            onClick={props.handleCloseButton}
                                                            id={item.id}
                                                        >
                                                        </CloseButton>
                                                        {item.recipeName}
                                                    </Link>
                                                ))
                                                : null}
                                        </Row>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container >
    )
}