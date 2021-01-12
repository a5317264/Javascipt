// const myAge = 27
// let message = myAge >= 10 ? 'You can vote!' : 'You cannot vote!'
// console.log(message)

// const myAge = 18
// const showPage = () => {
//     console.log('Showing the page')
// }
// const showErrorPage = () => 'Showing the error page'

// const message = myAge >= 21 ? showPage() : showErrorPage()

// console.log(message)

const team = ['Tyler', 'Porter']
// 1. Print "team size:3" if less than or equal to 4
// 2. Print :Too many people on your team" otherwise

const message = team.length <= 3 ? `team size: ${team.length}` : "Too many people on your team"
console.log(message)