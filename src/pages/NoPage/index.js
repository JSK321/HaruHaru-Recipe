import React from 'react'
import { Card } from 'react-bootstrap'
import "./styles.css"

export default function NoPage() {
    return (
        <Card className="NoPage">
            <Card.Body>
                <Card.Text style={{ textAlign: "center" }}>
                    The page you're trying to find doesn't exist.
                </Card.Text>
            </Card.Body>
        </Card >
    )
}
