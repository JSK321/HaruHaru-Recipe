const URL_PREFIX = "http://localhost:8080"
// const URL_PREFIX = "https://haruharurecipes.herokuapp.com"

const API = {
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
    // Upload Image Function
    uploadImage: function (imgData) {
        return fetch(`https://api.cloudinary.com/v1_1/jsk321/image/upload`, {
            method: 'POST',
            body: imgData
        })
    },
    // Retrieve Profile Function
    getProfile: function (token) {
        return fetch(`${URL_PREFIX}/api/users/secretProfile`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json()).catch(err => null)
    },
    // Retrieve All Profile Function
    getAllProfile: function () {
        return fetch(`${URL_PREFIX}/api/users`, {
        }).then(res => res.json()).catch(err => console.log(err))
    },
    // Retrieve One User Function
    getOneUser: function (id) {
        return fetch(`${URL_PREFIX}/api/users/${id}`, {
        }).then(res => res.json()).catch(err => console.log(err))
    },
    // Retrieve One Profile Function
    getOneProfile: function (accountName) {
        return fetch(`${URL_PREFIX}/api/users/profile/${accountName}`, {
        }).then(res => res.json()).catch(err => console.log(err))
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
    // Retrieve All Breakfast Recipe
    getAllCategoryRecipe: function (category) {
        return fetch(`${URL_PREFIX}/api/recipes/category/${category}`, {
        }).then(res => res.json()).catch(err => console.log(err))
    },
    // Retrieve One Saved Recipe
    getOneSavedRecipe: function (recipeId) {
        return fetch(`${URL_PREFIX}/api/savedrecipes/${recipeId}`, {
        }).then(res => res.json()).catch(err => console.log(err))
    },
    // Retrieve All Saved Recipe
    getAllSavedRecipe: function () {
        return fetch(`${URL_PREFIX}/api/savedrecipes`, {
        }).then(res => res.json()).catch(err => console.log(err))
    },
    // Retrieve All Saved Recipe by Recipe Id
    getAllSavedRecipeByRecipeId: function (recipeId) {
        return fetch(`${URL_PREFIX}/api/savedrecipes/all/${recipeId}`, {
        }).then(res => res.json()).catch(err => console.log(err))
    },
    // Retrieve All Ingredients for Recipe with RecipeId
    getAllIngreForRecipe: function (recipeId) {
        return fetch(`${URL_PREFIX}/api/ingredients/all/${recipeId}`, {
        }).then(res => res.json()).catch(err => console.log(err))
    },
    // Retrieve One Ingredient for Recipe with RecipeId
    getOneIngreForRecipe: function (recipeId) {
        return fetch(`${URL_PREFIX}/api/ingredients/${recipeId}`, {
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
                // window.location.href = `/profile/${userData.accoutName}`
                // window.location.href= '/'
                return res.json()
            } else {
                alert("Email already exists!")
                throw new Error("Something went wrong")
            }
        }).catch(err => null)
    },
    // Create New Recipe Function
    createRecipe: function (token, recipeData) {
        return fetch(`${URL_PREFIX}/api/recipes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(recipeData)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert("Sign in to add recipe!")
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Save Recipe Function
    saveRecipe: function (token, recipeData) {
        return fetch(`${URL_PREFIX}/api/savedrecipes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(recipeData)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Create New Ingredients Function
    createIngredients: function (token, ingreData) {
        return fetch(`${URL_PREFIX}/api/ingredients`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(ingreData)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Create New Steps Function
    createSteps: function (token, stepsData) {
        return fetch(`${URL_PREFIX}/api/steps`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(stepsData)
        }).then(res => {
            if (res.ok) {
                window.location.href = "/"
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Update User Profile
    updateUserProfile: function (token, id, name, email, accountName, password, newPassword, confirmNewPassword, profileImage) {
        return fetch(`${URL_PREFIX}/api/users/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                email: email,
                accountName: accountName,
                password: password,
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword,
                profileImage: profileImage
            })
        }).then(res => {
            if (res.ok) {
                window.location.href = `/profile/${accountName}`
                return res.json()
            }
            else if (res.status === 409) {
                alert("Account name/Email is already in use.")
                window.location.reload()
            } else if (res.status === 401) {
                alert("Incorrect password/New password does not match, please try again.")
                window.location.reload()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // // Update Ingredients At RecipeId Function
    // updateIngre: function (token, id, ingredient, ingredientQuant, ingredientUnit) {
    //     return fetch(`${URL_PREFIX}/api/ingredients/all/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify({
    //             ingredient: ingredient,
    //             ingredientQuant: ingredientQuant,
    //             ingredientUnit: ingredientUnit,
    //         })
    //     }).then(res => {
    //         if (res.ok) {
    //             return res.json()
    //         } else {
    //             console.log(res)
    //             throw new Error("Something went wrong")
    //         }
    //     }).catch(err => console.log(err))
    // },
    // Update One Ingredient Fucntion
    updateOneIngre: function (token, id, ingredient, ingredientQuant, ingredientUnit) {
        return fetch(`${URL_PREFIX}/api/ingredients/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                ingredient: ingredient,
                ingredientQuant: ingredientQuant,
                ingredientUnit: ingredientUnit,
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Update Recipe Function
    updateRecipe: function (token, id, recipeName, recipeDescript, recipeCategory, recipeImage) {
        return fetch(`${URL_PREFIX}/api/recipes/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                recipeName: recipeName,
                recipeDescript: recipeDescript,
                recipeCategory: recipeCategory,
                recipeImage: recipeImage
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Update Number Of Likes Recipe Function
    updateNumOfLikes: function (id, numberOfLikes) {
        return fetch(`${URL_PREFIX}/api/recipes/likes/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                numberOfLikes: numberOfLikes,
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Update Saved Recipe Function
    updateSavedRecipe: function (token, id, recipeName) {
        return fetch(`${URL_PREFIX}/api/savedrecipes/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                recipeName: recipeName,
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Update Directions for Recipe Function
    updateDirection: function (token, id, directions) {
        return fetch(`${URL_PREFIX}/api/steps/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                directions: directions
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Delete User Profile Function
    deleteUserProfile: function (token, id) {
        return fetch(`${URL_PREFIX}/api/users/${id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => {
            if (res.ok) {
                alert("Profile has been deleted.")
                window.location.href = "/"
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Delete Recipe Function
    deleteRecipe: function (token, id) {
        return fetch(`${URL_PREFIX}/api/recipes/${id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => {
            if (res.ok) {
                window.location.reload()
            } else {
                alert("Log in to delete recipe!")
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Delete Saved Recipe Function
    deleteSavedRecipe: function (token, id) {
        return fetch(`${URL_PREFIX}/api/savedrecipes/${id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => {
            if (res.ok) {
                window.location.reload()
            } else {
                alert("Log in to delete recipe!")
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    },
    // Delete One Ingredient Function
    deleteIngredient: function (token, id) {
        return fetch(`${URL_PREFIX}/api/ingredients/${id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            },
        }).then(res => {
            if (res.ok) {
                window.location.reload()
            } else {
                alert("Log in to delete ingredient!")
                throw new Error("Something went wrong")
            }
        }).catch(err => console.log(err))
    }
}

module.exports = API;