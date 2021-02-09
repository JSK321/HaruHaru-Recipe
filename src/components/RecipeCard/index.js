import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
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
                    <Card.Title><strong>Description</strong></Card.Title>
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
                <Card.Footer style={{ textAlign: "center" }}>
                    <h5><Badge variant="primary">Likes: {props.numberOflikes}</Badge></h5>
                    {props.userId === props.ownerId ?
                        <Button
                            variant="link"
                            href={`/updaterecipe/${props.recipeId}`}
                        >
                            Update Recipe
                        </Button>
                        :
                        null
                    }

                    {props.userId !== props.ownerId && props.isLoggedIn && props.isSaved === false ?
                        < Button
                            variant="link"
                            onClick={props.handleSaveRecipeBtn}
                        >
                            Save Recipe
                        </Button>
                        :
                        null
                    }

                    {props.isLoggedIn && props.userId === props.ownerId ?
                        <Button
                            variant="link"
                            href={`/profile/${props.accountName}`}
                        >
                            View my Profile
                       </Button>
                        :
                        (props.isLoggedIn ?
                            <Button
                                variant="link"
                                href={`/profile/${props.owner}`}
                            >
                                Recipe Owner
                            </Button>
                            :
                            null
                        )
                    }
                    {props.isLoggedIn ?
                        null
                        :
                        <Button
                            variant="link"
                            href="/signin"
                        >
                            Sign In
                        </Button>}
                </Card.Footer>
            </Card>
        </Accordion >
    )
}