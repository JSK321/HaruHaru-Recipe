import { Card, ListGroup, Accordion, Button, Row, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function RecipeCard(props) {
    return (
        <Accordion defaultActiveKey="0">
            <Card className="RecipeCard" style={{ marginTop: "25px" }}>
                <Card.Header className="ingreCardHeader"><strong>{props.recipeName}</strong></Card.Header>
                <Card.Img
                    variant="top"
                    src={props.recipeImage}
                    className="RecipeCardImage"
                />
                <Accordion.Toggle as={Card.Header} eventKey="0" className="ingreAccordion">
                    <strong>Description</strong>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="ingreGroupBody">
                        <strong>{props.recipeDescript}</strong>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="ingreAccordion">
                    <strong>Ingredients</strong>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="ingreGroupBody">
                        <ListGroup className="list-group-flush">
                            <Row lg={3} md={2} sm={2} xs={1} className="no-gutters">
                                {props.ingredients !== null ?
                                    props.ingredients.map(item => (
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className="ingreGroupList">
                                                <strong>{item.ingredientQuant} {item.ingredientUnit} {item.ingredient}</strong>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    ))
                                    : null}
                            </Row>
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="ingreAccordion">
                    <strong>Directions</strong>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="ingreGroupBody">
                        <strong>{props.directions}</strong>
                    </Card.Body>
                </Accordion.Collapse>
                <Card.Footer className="ingreCardFooter">
                    <h5>
                        <FontAwesomeIcon className="heartIcon" icon={faHeart} />
                        <Badge className="likeBadge">Likes: {props.numberOflikes}</Badge>
                    </h5>
                    {props.userId === props.ownerId ?
                        <Button
                            variant="link"
                            className="recipeCardViewBtn"
                            href={`/updaterecipe/${props.recipeId}`}
                        >
                            Update Recipe
                        </Button>
                        :
                        null
                    }

                    {props.userId !== props.ownerId && props.isLoggedIn !== false && props.savedByUser != props.accountName ?
                        < Button
                            variant="link"
                            className="recipeCardViewBtn"
                            onClick={props.handleSaveRecipeBtn}
                        >
                            Save Recipe
                        </Button>
                        :
                        (props.userId !== props.ownerId && props.isLoggedIn !== false && props.savedByUser == props.accountName ?
                            <Button
                                variant="link"
                                className="recipeCardViewBtn"
                                onClick={props.handleUnSaveRecipeBtn}
                                id={props.savedRecipeId}
                            >
                                Unsave Recipe
                            </Button>
                            : null
                        )
                    }

                    {props.isLoggedIn && props.userId === props.ownerId ?
                        <Button
                            variant="link"
                            className="recipeCardViewBtn"
                            href={`/profile/${props.accountName}`}
                        >
                            View My Profile
                       </Button>
                        :
                        (props.isLoggedIn ?
                            <Button
                                variant="link"
                                className="recipeCardViewBtn"
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
                            className="recipeCardViewBtn"
                            href="/signin"
                        >
                            Sign In
                        </Button>}
                </Card.Footer>
            </Card>
        </Accordion >
    )
}