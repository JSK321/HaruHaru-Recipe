import React from 'react'
import './styles.css'
import { Card, Form, Row, Col, Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faImage, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

export default function UpdateRecipeForm(props) {
    return (
        <Card className="updateRecipeCard">
            <Card.Header className="updateRecipeTitle"><strong>Update Recipe</strong></Card.Header>
            <Card.Body>
                <Form onSubmit={props.handleFormSubmit}>
                    <Form.Group>
                        {props.loading ? (
                            <h3 style={{ textAlign: "center", color: "midnightblue" }}><strong>Loading Image...</strong></h3>
                        )
                            :
                            (
                                <Image
                                    src={
                                        props.recipeImage ?
                                            (props.recipeImage)
                                            : null
                                    }
                                    className="recipeImageUpdate"
                                />
                            )}
                    </Form.Group>
                    <Form.Text className="addIngreTextHelp">
                        <strong> Update recipe name, category, or description.</strong>
                    </Form.Text>
                    <Row noGutters>
                        <Col xs={8}>
                            <Form.Control
                                placeholder={props.recipeName !== "" ? props.recipeName : "Recipe Name"}
                                onChange={props.handleRecipeInputChange}
                                name="recipeName"
                                // value={props.recipeName}
                                className="updateRecipeFormControl"
                            />
                        </Col>
                        <Col xs={4}>
                            <Form.Control
                                as="select"
                                onChange={props.handleSelectCategory}
                                name="recipeCategory"
                                className="updateRecipeFormControl"
                            >
                                <option selected disabled value="">Category</option>
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                {/* <option>Dessert</option> */}
                                <option>Soup/Stew</option>
                                {/* <option>Snack</option> */}
                                <option>Other</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Form.Group className="updateRecipeDescript">
                        <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder={props.recipeDescript !== "" ? props.recipeDescript : "Recipe Description"}
                            onChange={props.handleRecipeInputChange}
                            name="recipeDescript"
                            className="updateRecipeFormControl"
                        />
                    </Form.Group>
                    <Form.Text className="addIngreTextHelp">
                        <strong> Update ingredients, amount, and measurement.</strong>
                    </Form.Text>
                    <Form.Group>
                        {props.ingredients !== undefined ?
                            props.ingredients.map(item => (
                                <Row noGutters>
                                    <Col xs={6}>
                                        <Form.Control
                                            placeholder={item.ingredient !== "" ? item.ingredient : "Ingredient"}
                                            type="text"
                                            name={item.ingredient}
                                            className="updateRecipeFormControl"
                                            onChange={props.handleIngreInputChange}
                                            id={item.id}
                                            recipeId={item.RecipeId}
                                        >
                                        </Form.Control>
                                    </Col>
                                    <Col xs={2}>
                                        <Form.Control
                                            placeholder={item.ingredientQuant !== "" ? item.ingredientQuant : "Quanity"}
                                            type="number"
                                            min="0"
                                            step=".01"
                                            name={item.ingredientQuant}
                                            className="updateRecipeFormControl"
                                            onChange={props.handleIngreInputChange}
                                            id={item.id}
                                            recipeId={item.RecipeId}
                                        />
                                    </Col>
                                    <Col xs={3}>
                                        <Form.Control
                                            placeholder={item.ingredientUnit !== "" ? item.ingredientUnit : "Unit"}
                                            type="text"
                                            name={item.ingredientUnit}
                                            className="updateRecipeFormControl"
                                            onChange={props.handleIngreInputChange}
                                            id={item.id}
                                            recipeId={item.RecipeId}
                                        />
                                    </Col>
                                    <Col xs={1}>
                                        <Button
                                            className="ingreDeleteBtn"
                                            onClick={props.handleIngreDeleteButton}
                                            id={item.id}
                                            name={item.ingredient}
                                        >
                                            <strong id={item.id}>X</strong>
                                        </Button>
                                    </Col>
                                </Row>
                            ))
                            :
                            null
                        }
                    </Form.Group>
                    <Form.Text className="addIngreTextHelp">
                        <strong> Update the recipe directions.</strong>
                    </Form.Text>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder={props.directions !== "" ? props.directions : "Recipe Directions"}
                            onChange={props.handleDirectInputChange}
                            value={props.directions}
                            name="directions"
                            className="updateRecipeFormControl"
                        />
                    </Form.Group>
                    <Form.Text className="addIngreTextHelp">
                        <strong> Press update to save changes.</strong>
                    </Form.Text>
                    <Button
                        variant="primary"
                        className="updateFormButton"
                        type="submit"
                    >
                        <FontAwesomeIcon icon={faSave} className="fa-fw" />
                        Update
                    </Button>
                    <Button
                        // type="button"
                        className="updateFormButton"
                        onClick={props.handleUploadImgBtn}
                    >
                        <FontAwesomeIcon icon={faImage} className="fa-fw" />
                        Update Image
                         </Button>
                    {/* Hidden upload button for css */}
                    <Form.File
                        id="uploadImg"
                        onChange={props.handleUploadImg}
                        style={{ display: "none" }}
                        name="recipeImage"
                    />
                    <Button
                        // type="button"
                        className="addIngreButton"
                        href={`/addingredientform/${props.recipeId}`}
                    >
                        <FontAwesomeIcon icon={faPlusSquare} className="fa-fw" />
                        Add More Ingredients
                    </Button>

                </Form>
            </Card.Body>
        </Card>
    )
}
