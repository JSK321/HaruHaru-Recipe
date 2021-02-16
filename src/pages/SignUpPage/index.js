import React, { useState } from 'react'
import API from '../../utils/API'
import SignUpForm from '../../components/SignUpForm'

export default function SignUpPage() {
    const [userState, setUserState] = useState({
        name: "",
        accountName: "",
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
        userCreateAndLogIn()
    }

    function userLogIn() {
        API.login(userState).then(newToken => {
            localStorage.setItem("token", newToken.token)
            API.getProfile(newToken.token).then(profileData => { }).then(res => {
                window.location.href = "/"
            })
        })

    }

    async function userCreateAndLogIn() {
        const createUser = await API.createUser(userState)
        await userLogIn(createUser)
    }

    return (
        <div>
            <SignUpForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                email={userState.email}
                password={userState.password}
                name={userState.name}
                accountName={userState.accountName}
            />
        </div>
    )
}
