import { Button, Card, Form, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function RecipeForm(props) {

    return (
        <Card className="SignInCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center", color: "midnightblue" }}><strong>Add New Recipe</strong></Card.Title>
                <Card.Text>
                    <Form onSubmit={props.handleFormSubmit}>
                        <Form.Group>
                            {props.loading ? (
                                <h3 style={{ textAlign: "center", color:"lightgoldenrodyellow" }}><strong>Loading Image...</strong></h3>
                            ) : (
                                    <Image
                                        src={
                                            props.recipeImage ?
                                                (props.recipeImage)
                                                : null
                                        }
                                        style={
                                            props.recipeImage ?
                                                ({
                                                    maxWidth: "100%",
                                                    height: "auto",
                                                    margin: "0 auto"
                                                })
                                                : null
                                        }
                                    />
                                )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Recipe Name"
                                onChange={props.handleRecipeInputChange}
                                value={props.recipeName}
                                name="recipeName"
                                className="recipeFormControl"
                                required
                            />
                            <Form.Control
                                as="select"
                                onChange={props.handleSelectCategory}
                                value={props.recipeCategory}
                                className="recipeFormControl"
                                required
                            >
                                <option selected disabled value="">Category</option>
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                {/* <option>Dessert</option> */}
                                <option>Soup or Stew</option>
                                {/* <option>Snack</option> */}
                                <option>Other</option>
                            </Form.Control>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Recipe Description"
                                onChange={props.handleRecipeInputChange}
                                value={props.recipeDescript}
                                className="recipeFormControl"
                                name="recipeDescript"
                            />
                        </Form.Group>
                        <Button
                            className="recipeFormBtn"
                            type="button"
                            onClick={props.handleUploadImgBtn}
                            style={{ width: "100%", marginBottom: "5px" }}
                        >
                            <FontAwesomeIcon icon={faImage} className="fa-fw" />
                            Upload Image
                         </Button>
                        <Form.File
                            id="uploadImg"
                            onChange={props.handleUploadImg}
                            style={{ display: "none" }}
                            name="recipeImage"
                        />
                        <Button
                            className="recipeFormBtn"
                            type="submit"
                            style={{ width: "100%" }}
                        >
                            <FontAwesomeIcon icon={faPlusSquare} className="fa-fw" />
                            Add Ingredients
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
