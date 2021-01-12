let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

let makeGuess = function (num) {
    return num == Math.floor(Math.random() * 5) + 1
}

console.log(makeGuess(1))