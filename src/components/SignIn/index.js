import React, { useState, useEffect } from 'react'
import userAPI from '../../utils/userAPI'
import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './styles.css'


export default function SignIn() {
    const [loginFormState, setLoginFormState] = useState({
        email: "",
        password: ""
    })

    const [profileState, setProfileState] = useState({
        name: "",
        email: "",
        recipes: [],
        token: "",
        id: "",
        isLoggedIn: false
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setLoginFormState({
            ...loginFormState,
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        if (!loginFormState.email || !loginFormState.password) {
            alert("잘못된 비밀번호 / 이메일을 다시 시도하십시오.")
        } else {
            userAPI.login(loginFormState).then(newToken => {
                if (newToken === null) {
                    alert("잘못된 비밀번호 / 이메일을 다시 시도하십시오.")
                } else {
                    localStorage.setItem("token", newToken.token)
                    userAPI.getProfile(newToken.token).then(profileData => {
                        setProfileState({
                            name: profileData.name,
                            email: profileData.email,
                            id: profileData.id,
                            isLoggedIn: true
                        })
                    }).then(res => {
                        window.location.href = "/"
                    })
                }
            })
        }
    }

    return (
        <Card className="SignInCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>양식에 로그인</Card.Title>
                <Card.Text>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="이메일"
                                onChange={handleInputChange}
                                value={loginFormState.email}
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="암호"
                                onChange={handleInputChange}
                                value={loginFormState.password}
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
