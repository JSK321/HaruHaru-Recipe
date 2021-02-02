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
import RecipePage from './pages/RecipePage'
import IngrePage from './pages/IngrePage'
import RecipeCardPage from './pages/RecipeCardPage'
import HomePage from './pages/HomePage'

function App() {
  const [profileState, setProfileState] = useState({
    name: "",
    accountName: "",
    email: "",
    recipes: [],
    savedRecipes: [],
    token: "",
    id: "",
    isLoggedIn: false
  })

  const [usersState, setUsersState] = useState({
    users: []
  })

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
            recipes: profileData.Recipes,
            savedRecipes: profileData.SavedRecipes,
            token: token,
            id: profileData.id,
            isLoggedIn: true
          })
        } else {
          localStorage.removeItem("token")
          setProfileState({
            name: "",
            accountName: "",
            email: "",
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

  const handleLogOut = event => {
    let confirmAlert = window.confirm("Are you sure to log out?")
    if (confirmAlert === true) {
      localStorage.removeItem("token");
      setProfileState({
        name: "",
        email: "",
        recipes: [],
        token: "",
        isLoggedIn: false
      })
      window.location.reload(false)
    }
  }

  return (
    <Router >
      <NavBar
        id={profileState.id}
        accountName={profileState.accountName}
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
        {/* <Route exact path="/profile/:id"> */}
        <Route exact path={`/profile/${profileState.accountName}`}>
          <ProfilePage
          // profile={profileState}
          users={usersState}
          />
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
        <Route exact path="/recipe/:id">
          <RecipeCardPage
            profile={profileState}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
