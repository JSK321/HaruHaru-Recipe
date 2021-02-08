import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./styles.css"

export default function NoPageCard(props) {
    return (
        <Card className="NoPageCard">
            <Card.Body>
                <Card.Text style={{ textAlign: "center" }}>
                    The recipe you're trying to find doesn't exist.
                </Card.Text>
                <Card.Text style={{ textAlign: "center" }}>
                    Please try again.
                    <br></br>
                    or...
                    <br></br>
                <Link
                        className="addRecipeBtn btn btn-primary"
                        to="/recipeform"
                    >
                        Add Recipe!
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
