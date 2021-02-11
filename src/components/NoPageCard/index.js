import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./styles.css"

export default function NoPageCard(props) {
    return (
        <Card className="NoPageCard">
            <Card.Body>
                <Card.Text style={{ textAlign: "center", color:"midnightblue" }}>
                    <strong>The recipe you're trying to find doesn't exist.</strong>
                </Card.Text>
                <Card.Text style={{ textAlign: "center", color:"midnightblue" }}>
                    <strong>Please try again.</strong>
                    <br></br>
                    <strong>or...</strong>
                    <br></br>
                <Link
                        className="addRecipeBtn btn btn-primary"
                        to="/recipeform"
                    >
                        <strong>Add A Recipe!</strong>
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
