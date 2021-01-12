const account = {
    name: "Alex Chuang",
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncomes = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        this.incomes.forEach(function (income) {
            totalIncomes += income.amount
        })
        accountBalance = totalIncomes - totalExpenses
        return `${this.name} has a balance of $${balance}. \
$${totalIncomes} in income. $${totalExpenses} in expenses.`
    }
    
}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())