import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'


export default function RecipeCard(props) {
    return (
        <Card className="SignInCard">
            <Card.Header style={{ textAlign: "center" }}><strong>{props.recipeName}</strong></Card.Header>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Text>
                    {props.recipeDescript}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <Card.Title style={{ textAlign: "center" }}>Ingredients</Card.Title>
                      {props.ingredients !== null ?
                            props.ingredients.map(item => (
                                <ListGroup variant="flush" style={{ textAlign: "center" }}>
                                    <ListGroup.Item>
                                        <strong>
                                        {item.ingredientQuant} {item.ingredientUnit}, {item.ingredient}
                                        </strong>
                                    </ListGroup.Item>
                                </ListGroup>
                            ))
                            : null}
            </ListGroup>
            <Card.Title style={{ textAlign: "center" }}>Directions</Card.Title>
            <Card.Body>
                <Card.Text>
                    {props.directions}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Footer>
        </Card>
    )
}
