import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import "./styles.css"

export default function NoPage() {
    return (
        <Card className="NoPage">
            <Card.Body>
                <Card.Text style={{ textAlign: "center", fontSize:"24px" }}>
                    The page you're trying to find doesn't exist.
                    <FontAwesomeIcon 
                    icon={faGhost} 
                    size="7x" 
                    className="fa-fw" 
                    style={{marginTop:"10px"}}
                    />
                </Card.Text>
            </Card.Body>
        </Card >
    )
}
