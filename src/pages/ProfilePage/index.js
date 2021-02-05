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
                    profileImage: data.profileImage,
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
                    profileImage: "",
                    isLoggedIn: false,
                })
            }
        })
    }

    const handleRecipeDeleteButton = event => {
        event.preventDefault()
        const token = localStorage.getItem("token")
        let confirmAlert = window.confirm("Are you certain to delete recipe?")
        let closeBtnId = event.currentTarget.id
        if (confirmAlert === true) {
            API.deleteRecipe(token, closeBtnId)
        }
    }
    const handleSavedRecipeDeleteButton = event => {
        event.preventDefault()
        const token = localStorage.getItem("token")
        let confirmAlert = window.confirm("Are you certain to delete recipe?")
        let closeBtnId = event.currentTarget.id
        if (confirmAlert === true) {
            API.deleteSavedRecipe(token, closeBtnId)
        }
    }

    return (
        <div>
            <UserProfile
                name={userProfile.name}
                email={userProfile.email}
                id={userProfile.id}
                accountName={userProfile.accountName}
                profileImage={userProfile.profileImage}

                handleRecipeDeleteButton={handleRecipeDeleteButton}
                handleSavedRecipeDeleteButton={handleSavedRecipeDeleteButton}
            />
        </div>
    )
}
