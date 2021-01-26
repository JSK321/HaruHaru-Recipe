import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default function RecipeForm(props) {

    return (
        <Card className="SignInCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Add Recipe</Card.Title>
                <Card.Text>
                    <Form onSubmit={props.handleFormSubmit}>
                        <Form.Group>
                            {props.loading ? (
                                <h3 style={{ textAlign: "center" }}><strong>Loading Image...</strong></h3>
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
                                                    maxWidth: "300px",
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
                            />
                        </Form.Group>
                        <Button
                            type="button"
                            onClick={props.handleUploadImgBtn}
                            style={{ width: "100%", marginBottom: "10px" }}
                        >
                            Upload Image
                         </Button>
                        <Form.Group>
                            <Form.File
                                id="uploadImg"
                                onChange={props.handleUploadImg}
                                style={{ display: "none" }}
                                name="recipeImage"
                            />
                            <Button
                                variant="primary"
                                type="submit"
                                style={{width:"100%"}}
                            >
                                Add Ingredients
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
