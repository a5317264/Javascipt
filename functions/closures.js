// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()

// Tipper

const createTipper = (persentage) => {
    return (amount) => {
        return amount * persentage
    }
}

const tenPercent = createTipper(.9)
console.log(tenPercent(10000))