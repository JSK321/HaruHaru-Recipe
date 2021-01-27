import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'
import './styles.css'

export default function RecipeCard(props) {
    return (
        <Accordion defaultActiveKey="0">
            <Card className="RecipeCard" style={{ marginTop: "25px" }}>
                <Card.Header style={{ textAlign: "center" }}><strong>{props.recipeName}</strong></Card.Header>
                <Card>
                    <Card.Img
                        variant="top"
                        src={props.recipeImage}
                        className="RecipeCardImage"
                    />
                </Card>
                <Card.Body>
                    <Card.Text>
                        {props.recipeDescript}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="RecipeCard">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <strong>Ingredients</strong>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            {props.ingredients !== null ?
                                props.ingredients.map(item => (
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            {item.ingredientQuant} {item.ingredientUnit} {item.ingredient}
                                        </ListGroup.Item>
                                    </ListGroup>
                                ))
                                : null}
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="RecipeCard">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <strong>Directions</strong>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        {props.directions}
                    </Card.Body>
                </Accordion.Collapse>
                <Card.Footer>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Footer>
            </Card>
        </Accordion >
    )
}