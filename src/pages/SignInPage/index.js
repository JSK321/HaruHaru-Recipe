import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import SignInForm from '../../components/SignInForm'

export default function SignInPage() {
    const [loginFormState, setLoginFormState] = useState({
        email: "",
        password: ""
    })

    const [profileState, setProfileState] = useState({
        name: "",
        accountName:"",
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
            API.login(loginFormState).then(newToken => {
                if (newToken === null) {
                    alert("잘못된 비밀번호 / 이메일을 다시 시도하십시오.")
                } else {
                    localStorage.setItem("token", newToken.token)
                    API.getProfile(newToken.token).then(profileData => {
                        setProfileState({
                            name: profileData.name,
                            accountName: profileData.accountName,
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
        <div>
            <SignInForm 
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                name={loginFormState.name}
                email={loginFormState.email}
            />
        </div>
    )
}
