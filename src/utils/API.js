const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://mykeebs-api.herokuapp.com"

const userAPI = {
    // Login Function
    login: function (userData) {
        return fetch(`${URL_PREFIX}/api/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve Profile Function
    getProfile: function (token) {
        return fetch(`${URL_PREFIX}/api/users/secretProfile`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve All Recipe Function
    getRecipes: function () {
        return fetch(`${URL_PREFIX}/api/recipes`, {
        }).then(res => res.json()).catch(err => console.log(err))
    },
    // Retrieve One Recipe Function
    getOneRecipe: function (recipeId) {
        return fetch(`${URL_PREFIX}/api/recipes/${recipeId}`, {
        }).then(res => res.json()).catch(err => console.log(err))
    },
    // Create New User Function
    createUser: function (userData) {
        return fetch(`${URL_PREFIX}/api/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => {
            if (res.ok) {
                alert("You are ready to share your keebs!")
                window.location.href = "/"
                return res.json()
            } else {
                alert("Email already exists!")
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Create New Recipe Function
    createRecipe: function(token, recipeData){
        return fetch(`${URL_PREFIX}/api/recipes`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(recipeData)
        }).then(res => {
            if(res.ok){
                return res.json()
            } else {
                alert("Sign in to add recipe!")
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Create New Ingredients Function
    createIngredients: function(token, ingreData){
        return fetch(`${URL_PREFIX}/api/ingredients`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(ingreData)
        }).then(res => {
            if(res.ok){
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        })
    },
    // Create New Steps Function
    createSteps: function(token, stepsData){
        return fetch(`${URL_PREFIX}/api/steps`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(stepsData)
        }).then(res => {
            if(res.ok){
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        })
    }
}

module.exports = userAPI;