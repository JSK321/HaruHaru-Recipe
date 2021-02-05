import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './styles.css'

export default function SignUpForm(props) {
    return (
        <Card className="SignUpCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Register</Card.Title>
                <Card.Text>
                    <Form onSubmit={props.handleFormSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                onChange={props.handleInputChange}
                                name="name"
                                className="signUpFormControl"
                            />
                            <Form.Control
                                type="text"
                                placeholder="Accout Name"
                                onChange={props.handleInputChange}
                                name="accountName"
                                className="signUpFormControl"
                            />
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={props.handleInputChange}
                                name="email"
                                className="signUpFormControl"
                            />
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={props.handleInputChange}
                                name="password"
                                className="signUpFormControl"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="signUpBtn">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Form.Text className="text-muted">
                Already registered?
                </Form.Text>
            <Link
                to="/signin"
                className="signInLink"
            >
                Sign In
            </Link>
        </Card>
    )
}
