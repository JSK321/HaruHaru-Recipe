import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import EditProfileForm from '../../components/EditProfileForm'

export default function EditProfilePage() {
    const [userProfile, setUserProfile] = useState({
        name: "",
        accountName: "",
        email: "",
        password: "",
        newPassword: "",
        confirmNewPassword: "",
        token: "",
        id: "",
        profileImage: "",
        isLoggedIn: false,
    })

    const [imgLoadingState, setImgLoadingState] = useState(false);

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
                    password: data.password,
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
                    password: "",
                    newPassword: "",
                    token: "",
                    id: "",
                    profileImage: "",
                    isLoggedIn: false,
                })
            }
        })
    }

    const handleUploadImgBtn = event => {
        event.preventDefault()
        document.getElementById('uploadImg').click()
    };
    const handleUploadImg = async event => {
        event.preventDefault()
        const files = event.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'ummas_cb')
        setImgLoadingState(true)
        const res = await API.uploadImage(data)
        const file = await res.json()
        setUserProfile({
            ...userProfile,
            profileImage: file.secure_url
        })
        setImgLoadingState(false)
    };

    const handleInputChange = event => {
        const { name, value } = event.target
        setUserProfile({
            ...userProfile,
            [name]: value
        })
    };

    const handleDeleteProfileBtn = event => {
        event.preventDefault()
        console.log("delete")
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        API.updateUserProfile(
            userProfile.token,
            userProfile.id,
            userProfile.name,
            userProfile.email,
            userProfile.accountName,
            userProfile.password,
            userProfile.newPassword,
            userProfile.confirmNewPassword,
            userProfile.profileImage
        ).then(afterUpdate => {
            setUserProfile({
                accountName: userProfile.accountName
            })
        })
    }

    return (
        <div>
            <EditProfileForm
                name={userProfile.name}
                email={userProfile.email}
                accountName={userProfile.accountName}
                password={userProfile.password}
                newPassword={userProfile.newPassword}
                confirmNewPassword={userProfile.confirmNewPassword}
                profileImage={userProfile.profileImage}
                loading={imgLoadingState}

                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                handleDeleteProfileBtn={handleDeleteProfileBtn}
                handleUploadImgBtn={handleUploadImgBtn}
                handleUploadImg={handleUploadImg}
            />
        </div>
    )
}
