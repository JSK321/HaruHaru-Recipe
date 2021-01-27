import React, { useState } from 'react'
import API from '../../utils/API'
import SignUpForm from '../../components/SignUpForm'

export default function SignUpPage() {
    const [userState, setUserState] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setUserState({
            ...userState,
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        try {
            API.createUser(userState)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <SignUpForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                email={userState.email}
                password={userState.password}
                name={userState.name}
            />
        </div>
    )
}
