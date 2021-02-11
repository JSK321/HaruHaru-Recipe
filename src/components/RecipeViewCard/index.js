import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'

export default function RecipeViewCard(props) {
    return (
        <Card className="RecipeViewCard">
            <Card.Img
                variant="top"
                src={props.recipeImage ? props.recipeImage : null}
                className="recipeViewCardImage"
            />
            <Card.Body>
                <Card.Title style={{ color: "midnightblue" }}><strong>{props.recipeName}</strong></Card.Title>
                <Card.Text style={{ color: "midnightblue" }}>
                    {props.recipeDescript}
                </Card.Text>
            </Card.Body>
            <Link
                to={`/recipe/${props.recipeId}/${props.recipeName}`}
                className="viewRecipeLink"
            >
                <strong>View Recipe</strong>
            </Link>
        </Card>
    )
}
