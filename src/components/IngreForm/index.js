import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareUp, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function IngreForm(props) {
    return (
        <Card className="SignInCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center", color: "midnightblue" }}><strong>Add Ingredients</strong></Card.Title>
                <Form onSubmit={props.handleFormSubmit}>
                    <Form.Group>
                        <Row noGutters>
                            <Col sm="12">
                                <Form.Control
                                    type="text"
                                    className="ingreFormControl"
                                    placeholder="Ingredient"
                                    onChange={props.handleIngreInputChange}
                                    value={props.ingredient}
                                    name="ingredient"
                                />
                            </Col>
                            <Col xs="6">
                                <Form.Control
                                    type="number"
                                    className="ingreFormControl"
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
                                    className="ingreFormControl"
                                    placeholder="Unit"
                                    onChange={props.handleIngreInputChange}
                                    value={props.ingredientUnit}
                                    name="ingredientUnit"
                                />
                            </Col>
                        </Row>
                        <Form.Text className="addIngreTextHelp">
                            Press add ingredient to add multiple ingredients.
                        </Form.Text>
                        <Button
                            onClick={props.handleAddIngreBtn}
                            className="ingreFormAddBtn"
                            type="button"
                        >
                            <FontAwesomeIcon icon={faPlusSquare} className="fa-fw" />
                            Add Ingredient
                        </Button>
                        {/* <Row lg={2} md={2} sm={2} xs={1} className="no-gutters"> */}
                        {props.ingredients !== null ?
                            props.ingredients.map(item => (
                                <ListGroup variant="flush" style={{ textAlign: "center" }}>
                                    <ListGroup.Item className="ingreFormListGroup">
                                        <strong>
                                            <strong>{item.ingredientQuant} {item.ingredientUnit} {item.ingredient}</strong>
                                        </strong>
                                    </ListGroup.Item>
                                </ListGroup>
                            ))
                            : null}
                        {/* </Row> */}
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Directions"
                            onChange={props.handleDirectInputChange}
                            value={props.directions}
                            name="directions"
                            className="ingreFormControl"
                            style={{ marginTop: "10px" }}
                            required
                        />
                    </Form.Group>
                    <Button
                        className="ingreFormAddBtn"
                        type="submit"
                    >
                        <FontAwesomeIcon icon={faCaretSquareUp} className="fa-fw" />
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
