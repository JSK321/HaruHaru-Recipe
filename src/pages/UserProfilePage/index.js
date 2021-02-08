import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../utils/API'
import OtherUsersProfile from '../../components/OtherUsersProfile'

export default function UserProfilePage() {
    const [userState, setUserState] = useState({
        name: "",
        accountName: "",
        email: "",
        profileImage: "",
    })

    const { accountName } = useParams();

    useEffect(() => {
        fetchUserData()
    }, [])

    function fetchUserData() {
        API.getOneProfile(accountName).then(data => {
            setUserState({
                name: data.name,
                accountName: data.accountName,
                email: data.email,
                profileImage: data.profileImage,
            })
        })
    }

    return (
        <OtherUsersProfile
            name={userState.name}
            accountName={userState.accountName}
            email={userState.email}
            profileImage={userState.profileImage}
        />
    )
}
