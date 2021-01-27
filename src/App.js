import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import API from './utils/API'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import NavBar from './components/NavBar'
// Pages
import SignInPage from './pages/SignInPage'
import RecipePage from './pages/RecipePage'
import IngrePage from './pages/IngrePage'
import RecipeCardPage from './pages/RecipeCardPage'

function App() {
  const [profileState, setProfileState] = useState({
    name: "",
    email: "",
    recipes: [],
    token: "",
    id: "",
    isLoggedIn: false
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
            email: profileData.email,
            recipes: profileData.Recipes,
            token: token,
            id: profileData.id,
            isLoggedIn: true
          })
        } else {
          localStorage.removeItem("token")
          setProfileState({
            name: "",
            email: "",
            recipes: [],
            token: "",
            id: "",
            isLoggedIn: false
          })
        }
      })
    }
  }

  const handleLogOut = event => {
    localStorage.removeItem("token");
    setProfileState({
      name: "",
      email: "",
      keebs: [],
      parts: [],
      token: "",
      isLoggedIn: false
    })
    window.location.reload(false)
  }

  return (
    <Router >
      <NavBar
        isLoggedIn={profileState.isLoggedIn}
        handleLogOut={handleLogOut}
      />
      <Switch>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
        <Route exact path="/recipeform">
          <RecipePage
            profile={profileState}
          />
        </Route>
        <Route exact path="/ingreform/:id">
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
