import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import API from './utils/API'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import NavBar from './components/NavBar'
// Pages
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import ProfilePage from './pages/ProfilePage'
import UserProfilePage from './pages/UserProfilePage'
import EditProfilePage from './pages/EditProfilePage'
import RecipePage from './pages/RecipePage'
import IngrePage from './pages/IngrePage'
import RecipeCardPage from './pages/RecipeCardPage'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategorPage'
// import BreakfastPage from './pages/BreakfastPage'
// import LunchPage from './pages/LunchPage'
// import DinnerPage from './pages/DinnerPage'
// import SoupsNStewsPage from './pages/SoupsNStewsPage'
// import OtherPage from './pages/OtherPage'
import UpdateRecipePage from './pages/UpdateRecipePage'

function App() {
  const [profileState, setProfileState] = useState({
    name: "",
    accountName: "",
    email: "",
    profileImage: "",
    recipes: [],
    savedRecipes: [],
    token: "",
    id: "",
    isLoggedIn: false
  })

  // const [usersState, setUsersState] = useState({
  //   users: [
  //     {
  //       id: "",
  //       name: "",
  //       accountName: "",
  //       email: "",
  //     }
  //   ]
  // })

  useEffect(() => {
    fetchUserData()
  }, [])

  function fetchUserData() {
    const token = localStorage.getItem('token')
    if (localStorage.getItem('token') !== null) {
      API.getProfile(token).then(profileData => {
        if (profileData) {
          setProfileState({
            name: profileData.name,
            accountName: profileData.accountName,
            email: profileData.email,
            profileImage: profileData.profileImage,
            recipes: profileData.Recipes,
            savedRecipes: profileData.SavedRecipes,
            token: token,
            id: profileData.id,
            isLoggedIn: true
          })
          // fetchUserProfiles()
        } else {
          localStorage.removeItem("token")
          setProfileState({
            name: "",
            accountName: "",
            email: "",
            profileImage: "",
            recipes: [],
            savedRecips: [],
            token: "",
            id: "",
            isLoggedIn: false
          })
        }
      })
    }
  }

  // function fetchUserProfiles() {
  //   usersState.users.shift()
  //   API.getAllProfile().then(data => {
  //     // console.log(data)
  //     data.map(element => {
  //       usersState.users.push(
  //         {
  //           id: element.id,
  //           name: element.name,
  //           accountName: element.accountName,
  //           email: element.email,
  //         }
  //       )
  //     })
  //   })
  // }

  const handleLogOut = event => {
    // let confirmAlert = window.confirm("Are you sure to log out?")
    // if (confirmAlert === true) {
    localStorage.removeItem("token");
    setProfileState({
      name: "",
      email: "",
      recipes: [],
      token: "",
      isLoggedIn: false
    })
    window.location.reload(false)
    // }
  }

  return (
    <Router >
      <NavBar
        id={profileState.id}
        name={profileState.name}
        email={profileState.email}
        accountName={profileState.accountName}
        profileImage={profileState.profileImage}
        isLoggedIn={profileState.isLoggedIn}
        handleLogOut={handleLogOut}
      />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
        <Route exact path={`/profile/${profileState.accountName}`}>
          <ProfilePage />
        </Route>
        <Route exact path={`/editprofile/${profileState.accountName}`}>
          <EditProfilePage />
        </Route>
        <Route
          path="/profile/:accountName"
          component={UserProfilePage}
        >
        </Route>
        <Route
          path="/category/:category"
          component={CategoryPage}>
        </Route>
        <Route exact path="/recipeform">
          <RecipePage
            profile={profileState}
          />
        </Route>
        <Route exact path="/ingredientform/:id">
          <IngrePage
            profile={profileState}
          />
        </Route>
        <Route exact path="/recipe/:id/:recipeName">
          <RecipeCardPage
            profile={profileState}
          />
        </Route>
        <Route exact path="/updaterecipe/:id">
          <UpdateRecipePage
            profile={profileState}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
