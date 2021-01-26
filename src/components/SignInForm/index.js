import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './styles.css'

export default function SignInForm(props) {
    return (
        <Card className="SignInCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>양식에 로그인</Card.Title>
                <Card.Text>
                    <Form onSubmit={props.handleFormSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="email"
                                placeholder="이메일"
                                onChange={props.handleInputChange}
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                placeholder="암호"
                                onChange={props.handleInputChange}    
                                name="password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            로그인
                         </Button>
                    </Form>
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}
