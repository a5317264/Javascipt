let myAccount = {
    name: "Alex Chuang",
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount = 100) {
    account.expenses = account.expenses + amount
}

// addIncome
let addIncome  = function (account, amount = 300) {
    account.income += amount
}
// resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function (account) {
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`)
}

// addincome
addIncome(myAccount)
// addExpense
addExpense(myAccount)
// addExpense
addExpense(myAccount, 50)
// getAccountSummary
getAccountSummary(myAccount)
// resetAccount
resetAccount(myAccount)
// getAccountSummary
getAccountSummary(myAccount)