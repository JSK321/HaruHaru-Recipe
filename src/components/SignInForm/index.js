import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function SignInForm(props) {
    return (
        <Card className="SignInCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center", color:"midnightblue" }}><strong>HaruHaru Recipe</strong></Card.Title>
                <Card.Text>
                    <Form onSubmit={props.handleFormSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={props.handleInputChange}
                                name="email"
                                className="signInFormControl"
                                required
                            />
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={props.handleInputChange}
                                name="password"
                                className="signInFormControl"
                                required
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                            className="signInBtn"
                        >
                            <FontAwesomeIcon icon={faSignInAlt} className="fa-fw" />
                            Sign In
                         </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
            <Form.Text className="Registered text-muted">
                Not registered?
            </Form.Text>
            <Link
                to="/signup"
                className="signInLink"
            >
                Sign up here!
            </Link>
        </Card>
    )
}
