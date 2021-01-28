import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import UserProfile from '../../components/UserProfile'

export default function ProfilePage(props) {
    const [userProfile, setUserProfile] = useState({
        name: "",
        email: "",
        recipes: [],
        token: "",
        id: "",
        // profileImage: "",
        isLoggedIn: false,
    })

    useEffect(() => {
        fetchUserData()
    }, [])

    function fetchUserData() {
        const token = localStorage.getItem("token")
        API.getProfile(token).then(data => {
            if (data) {
                setUserProfile({
                    name: data.name,
                    email: data.email,
                    recipes: data.Recipes,
                    token: token,
                    id: data.id,
                    // profileImage: data.profileImage,
                    isLoggedIn: true
                })
            } else {
                localStorage.removeItem("token");
                setUserProfile({
                    name: "",
                    email: "",
                    recipes: [],
                    token: "",
                    id: "",
                    // profileImage: "",
                    isLoggedIn: false,
                })
            }
        })
    }

    return (
        <div>
            <UserProfile
                name={userProfile.name}
                email={userProfile.email}
                id={userProfile.id}
            // profileImage={userProfile.profileImage}

            />
        </div>
    )
}
