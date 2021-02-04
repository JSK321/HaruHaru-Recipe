import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import UserProfile from '../../components/UserProfile'

export default function ProfilePage(props) {
    const [userProfile, setUserProfile] = useState({
        name: "",
        accountName: "",
        email: "",
        recipes: [],
        savedRecipes: [],
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
                    accountName: data.accountName,
                    email: data.email,
                    recipes: data.Recipes,
                    savedRecipes: data.SavedRecipes,
                    token: token,
                    id: data.id,
                    // profileImage: data.profileImage,
                    isLoggedIn: true
                })
            } else {
                localStorage.removeItem("token");
                setUserProfile({
                    name: "",
                    accountName: "",
                    email: "",
                    recipes: [],
                    savedRecipes: [],
                    token: "",
                    id: "",
                    // profileImage: "",
                    isLoggedIn: false,
                })
            }
        })
    }

    const handleCloseButton = event => {
        event.preventDefault()
        console.log("clicked")
    }

    return (
        <div>
            <UserProfile
                name={userProfile.name}
                email={userProfile.email}
                id={userProfile.id}
                // profileImage={userProfile.profileImage}

                handleCloseButton={handleCloseButton}
            />
        </div>
    )
}
