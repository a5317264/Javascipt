import { getFilters } from './filters'
import { getRecipes, removeIngredient, toggleIngredient } from './recipes'

// Generate the DOM structure for a recipe
const generateRecipeDOM = (recipe) => {
    const recipeEl = document.createElement('a')
    const textEl = document.createElement('h3')
    const statusEl = document.createElement('p')

    // Setup the recipe title text
    if (recipe.title.length > 0) {
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'Unnamed recipe'
    }
    recipeEl.appendChild(textEl)

    // Setup the link
    recipeEl.setAttribute('href', `/edit.html#${recipe.id}`)

    // Setup the status message

    const isHave = (ingredient) => ingredient.have === true
    const isntHave = (ingredient) => ingredient.have === false
    if ( recipe.ingredients.every(isHave)) {
        statusEl.textContent = 'You have all the ingredients'
    } else if (recipe.ingredients.every(isntHave)) {
        statusEl.textContent = 'You have none of the ingredients'
    } else {
        statusEl.textContent = 'You have some of the ingredients'
    }
    recipeEl.appendChild(statusEl)

    return recipeEl
}


// Render application recipes
const renderRecipes = () => {
    const recipesEl = document.querySelector('#recipes')
    const { searchText } = getFilters()
    const filteredRecipes = getRecipes().filter((recipe) => recipe.title.toLowerCase().includes(searchText.toLowerCase()))

    recipesEl.innerHTML = ''

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach((recipe) => {
            const recipeEl = generateRecipeDOM(recipe)
            recipesEl.appendChild(recipeEl)
        })
    }
}

const renderEditPage = (recipeId) => {
    const titleEl = document.querySelector('#recipe-title')
    const bodyEl = document.querySelector('#recipe-body')
    const ingredientsEl = document.querySelector('#ingreditents')
    const recipes = getRecipes()
    const recipe = recipes.find((recipe) => recipe.id === recipeId)

    if (!recipe) {
        location.assign('/index.html')
    }
    titleEl.value = recipe.title
    bodyEl.value = recipe.description

    ingredientsEl.innerHTML = ''
    recipe.ingredients.forEach((ingredient) => {
        ingredientsEl.appendChild(generateIngredientDOM(recipe, recipeId, ingredient))
    })
}

const generateIngredientDOM = (recipe, recipeId, { item, have }) => {
    const ingredientEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const ingredientText = document.createElement('span')
    const removeBtn = document.createElement('button')

    // setup ingredient checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = have
    ingredientEl.appendChild(checkbox)
    checkbox.addEventListener('change', (e) => {
        toggleIngredient(recipe, item)
        renderEditPage(recipeId)
    })


    // Setup the ingredient text
    ingredientText.textContent = item
    ingredientEl.appendChild(ingredientText)

    // Setup the remove button
    removeBtn.textContent = 'remove'
    ingredientEl.appendChild(removeBtn)
    removeBtn.addEventListener('click', () => {
        removeIngredient(recipe, item)
        renderEditPage(recipeId)
    })

    return ingredientEl
}


export { renderRecipes, renderEditPage }