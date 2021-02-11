import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function OtherUsersProfile(props) {
    const [userRecipesState, setUserRecipesState] = useState({
        recipe: [],
    })
    const [searchState, setSearchState] = useState({
        search: ""
    })

    const { accountName } = useParams();

    useEffect(() => {
        fetchRecipeInfo()
    }, [])

    const handleSearchInput = event => {
        event.preventDefault()
        let keyword = event.target.value
        let filtered = userRecipesState.recipe.filter(recipeObj => {
            return (
                recipeObj.recipeName.toLowerCase().indexOf(keyword.toLowerCase()) > -1
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

    function fetchRecipeInfo() {
        API.getOneProfile(accountName).then(data => {
            setUserRecipesState({
                recipe: data.Recipes
            })
        })
    }
    return (
        <Container>
            <Row className="justify-content-md-center no-gutters">
                <Col md={4}>
                    <Card className="profileCard">
                        <Card.Img
                            className="ProfileImage"
                            variant="top"
                            src={props.profileImage}
                        />
                        <Card.Body>
                            <Card.Text>
                                <FontAwesomeIcon icon={faIdBadge} className="fa-fw" />
                                {/* <strong>Name:</strong>  */}
                                : {props.name}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
                                {/* <strong>Email:</strong>  */}
                                : {props.email}
                            </Card.Text>
                            <Card.Text>
                                <FontAwesomeIcon icon={faUser} className="fa-fw" />
                                {/* <strong>Account:</strong>  */}
                                : {props.accountName}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className="profileCard">
                        <Card.Body>
                            <Card.Title>Recipes by {props.accountName} </Card.Title>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="search"
                                    placeholder="Search recipes..."
                                    onChange={handleSearchInput}
                                    className="profileSearchBar"
                                />
                            </InputGroup>
                            <ListGroup variant="flush">
                                <Row lg={3} md={2} sm={2} xs={1} className="no-gutters">
                                    {userRecipesState.recipe !== "" ?
                                        userRecipesState.recipe.map(item => (
                                            <Link
                                                className="RecipeListGroup"
                                                to={`/recipe/${item.id}/${item.recipeName}`}
                                                id={item.id}
                                            >
                                                <strong>{item.recipeName}</strong>
                                            </Link>

                                        ))
                                        : null}
                                </Row>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        </Container >
    )
}
