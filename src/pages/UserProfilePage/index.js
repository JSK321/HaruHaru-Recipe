import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../utils/API'
import OtherUsersProfile from '../../components/OtherUsersProfile'

export default function UserProfilePage() {
    const [userState, setUserState] = useState({
        name: "",
        accountName: "",
        email: "",
        recipes: [],
        token: "",
        id: "",
        profileImage: "",
    })

    const { accountName } = useParams();

    useEffect(() => {
        fetchUserData()
    }, [])

    function fetchUserData() {
        console.log(accountName)
        API.getOneProfile(accountName).then(data => {
            console.log(data)
        })
    }

    return (


        <OtherUsersProfile

        />
    )
}
