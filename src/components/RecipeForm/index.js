import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
// import { ListGroup } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default function RecipeForm(props) {

    return (
        <Card className="SignInCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Add Recipe</Card.Title>
                <Card.Text>
                    <Form >
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Recipe Name"
                                onChange={props.handleRecipeInputChange}
                                value={props.recipeName}
                                name="recipeName"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                row={5}
                                placeholder="Ingredients"
                                onChange={props.handleIngreInputChange}
                                value={props.ingredients}
                                name="ingredients"
                            />
                            <Form.Text
                                className="text-muted"
                                style={{ textAlign: "center" }}
                            >
                                List all ingredients separated with a comma,
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                row={5}
                                placeholder="Directions"
                                onChange={props.handleDirectInputChange}
                                value={props.directions}
                                name="directions"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                         </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
