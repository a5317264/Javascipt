import { addIngredient, loadRecipes, removeRecipe, updateRecipe } from './recipes'
import { renderEditPage } from './view'

const recipeId = location.hash.substring(1)

renderEditPage(recipeId)

document.querySelector('#recipe-title').addEventListener('input', (e) => {
    updateRecipe(recipeId, {
        title: e.target.value
    })
})

document.querySelector('#recipe-body').addEventListener('input', (e) => {
    updateRecipe(recipeId, {
        description: e.target.value
    })
})

document.querySelector('#new-ingredient').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        addIngredient(recipeId, text)
        renderEditPage(recipeId)
        e.target.elements.text.value = ''
        
    }
})

document.querySelector('#remove-btn').addEventListener('click', (e) => {
    removeRecipe(recipeId)
    renderEditPage(recipeId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    console.log('storage')
    if (e.key === 'recipes') {
        loadRecipes()
        renderEditPage(recipeId)
    }
})