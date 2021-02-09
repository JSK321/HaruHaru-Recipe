import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'

export default function RecipeViewCard(props) {
    return (
        <Card className="RecipeViewCard">
            <Card.Img
                variant="top"
                src={props.recipeImage}
                className="recipeViewCardImage"
            />
            <Card.Body>
                <Card.Title>{props.recipeName}</Card.Title>
                <Card.Text>
                    {props.recipeDescript}
                </Card.Text>
                <Link
                    to={`/recipe/${props.recipeId}/${props.recipeName}`}
                    className="viewRecipeLink"
                >
                    View Recipe
                </Link>
            </Card.Body>
        </Card>
    )
}
