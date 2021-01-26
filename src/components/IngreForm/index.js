import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default function IngreForm(props) {
    return (
        <Card className="SignInCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Add Ingredients</Card.Title>
                <Form onSubmit={props.handleFormSubmit}>
                    <Form.Group>
                        <Form.Row>
                            <Col sm="12">
                                <Form.Control
                                    type="text"
                                    placeholder="Ingredient"
                                    onChange={props.handleIngreInputChange}
                                    value={props.ingredient}
                                    name="ingredient"
                                />
                            </Col>
                            <Col xs="6">
                                <Form.Control
                                    type="number"
                                    min="0"
                                    placeholder="Quantity"
                                    onChange={props.handleIngreInputChange}
                                    value={props.ingredientQuant}
                                    name="ingredientQuant"
                                />
                            </Col>
                            <Col xs="6">
                                <Form.Control
                                    type="text"
                                    placeholder="Unit"
                                    onChange={props.handleIngreInputChange}
                                    value={props.ingredientUnit}
                                    name="ingredientUnit"
                                />
                            </Col>
                        </Form.Row>
                        <Button
                            onClick={props.handleAddIngreBtn}
                            variant="primary"
                            type="button"
                            style={{ width: "100%" }}
                        >
                            Add Ingredient
                        </Button>


                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Directions"
                            onChange={props.handleDirectInputChange}
                            value={props.directions}
                            name="directions"
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                    >
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
