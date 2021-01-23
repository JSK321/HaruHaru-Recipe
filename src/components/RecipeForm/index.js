import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'

export default function RecipeForm() {

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
                                // onChange={handleInputChange}
                                // value={loginFormState.email}
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Ingredient Name"
                            // onChange={handleInputChange}
                            // value={loginFormState.password}
                            // name="password"
                            />
                            <Button variant="primary" type="button">
                                Add Ingredient
                            </Button>
                            <ListGroup variant="flush">
                                {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                            </ListGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Measurement Amount"
                                // onChange={handleInputChange}
                                // value={loginFormState.password}
                                name="password"
                            />
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Measurement Unit"
                                // onChange={handleInputChange}
                                // value={loginFormState.password}
                                name="password"
                            />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                            Submit
                         </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
