import { removeAllRecipes, getRecipes, createRecipe, removeRecipe, addIngredient, removeIngredient, loadRecipes } from './recipes'
import { renderRecipes } from './view'
import { setFilters } from './filters'

renderRecipes()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value  
    })
    renderRecipes()
})

document.querySelector('#add-recipe').addEventListener('click', (e) => {
    const id = createRecipe()
    location.assign(`/edit.html#${id}`)
    renderRecipes()
})

document.querySelector('#remove-all').addEventListener('click', (e) => {
    removeAllRecipes()
    renderRecipes()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'recipes') {
        loadRecipes()
        renderRecipes()
    }
})


























