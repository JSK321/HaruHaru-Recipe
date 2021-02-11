import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function SignUpForm(props) {
    return (
        <Card className="SignUpCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center", color:"midnightblue" }}><strong>HaruHaru Recipe</strong></Card.Title>
                <Card.Text>
                    <Form onSubmit={props.handleFormSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                onChange={props.handleInputChange}
                                name="name"
                                className="signUpFormControl"
                                required
                            />
                            <Form.Control
                                type="text"
                                placeholder="Account Name"
                                onChange={props.handleInputChange}
                                name="accountName"
                                className="signUpFormControl"
                                required
                            />
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={props.handleInputChange}
                                name="email"
                                className="signUpFormControl"
                                required
                            />
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={props.handleInputChange}
                                name="password"
                                className="signUpFormControl"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="signUpBtn">
                            <FontAwesomeIcon icon={faUserPlus} className="fa-fw"/>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Form.Text className="Registered text-muted">
                Already registered?
                </Form.Text>
            <Link
                to="/signin"
                className="signInLink"
            >
                Sign in!
            </Link>
        </Card>
    )
}
