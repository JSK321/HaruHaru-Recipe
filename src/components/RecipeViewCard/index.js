import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RecipeViewCard(props) {
    return (
        <Card className="SignInCard">
            <Card.Img variant="top" src={props.recipeImage} />
            <Card.Body>
                <Card.Title>{props.recipeName}</Card.Title>
                <Card.Text>
                    {props.recipeDescript}
                </Card.Text>
                <Link
                    to={`/recipe/${props.recipeId}`}
                >
                    View Recipe
                </Link>
            </Card.Body>
        </Card>
    )
}
