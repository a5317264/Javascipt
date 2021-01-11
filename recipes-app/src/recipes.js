import uuidv4 from 'uuid/v4'

let recipes = []

// Read existing recipes from localStorage
const loadRecipes = () => {
    const recipesJSON = localStorage.getItem('recipes')

    try {
        recipes = recipesJSON ? JSON.parse(recipesJSON) : []
    } catch (e) {
        recipes = []
    }
}

// Save the recipes to localStorage
const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

// Expose recipes from moudle
const getRecipes = () => recipes

const createRecipe = () => {
    const id = uuidv4()

    recipes.push({
        id: id,
        title: '',
        description: '',
        ingredients: []
    })
    saveRecipes()

    return id
}

// Remove a recipe from the list
const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)

    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
        saveRecipes()
    }
}

const removeAllRecipes = () => {
    recipes = []
    saveRecipes()
}

const updateRecipe = (id, { title, description }) => {
    const recipe = recipes.find((recipe => recipe.id === id))

    if (!recipe) {
        return
    }

    if (typeof title === 'string') {
        recipe.title = title
    }

    if (typeof description === 'string') {
        recipe.description = description
    }

    saveRecipes()

    return recipe
}


// Add ingredient in the recipe
const addIngredient = (id, item) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)
    // Find if the recipe exist
    if (recipeIndex > -1) {
        let targetBasket = recipes[recipeIndex].ingredients
        const ingredientIndex = targetBasket.findIndex((ingredient) => ingredient.item === item)
        // Add only when ingredient not exist
        if (ingredientIndex === -1) {
            targetBasket = targetBasket.push({
                item: item,
                have: false
            })
            saveRecipes()
        }
    }
}

// Delete ingredient from the recipe
const removeIngredient = ({ ingredients }, item) => {
    const ingredientIndex = ingredients.findIndex((ingredient) => ingredient.item === item)

    if (ingredientIndex > -1) {
        ingredients.splice(ingredientIndex, 1)
        saveRecipes()
    }
}


const toggleIngredient = ({ ingredients }, item) => {
    const ingredient = ingredients.find((ingredient) => ingredient.item === item)

    if (ingredient) {
        ingredient.have = !ingredient.have
        console.log(ingredient)
        saveRecipes()
    }

}

loadRecipes()

export { toggleIngredient, removeAllRecipes, loadRecipes, updateRecipe, getRecipes, createRecipe, removeRecipe, addIngredient, removeIngredient }