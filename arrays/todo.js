const todos = [{
    text: "brush my teeth",
    completed: true
}, {
    text: "clean the table",
    completed: false
}, {
    text: "read a book",
    completed: false
}, {
    text: "write my diary",
    completed: true
}, {
    text: "watch a movie",
    completed: false
}]


let deleteTodo = function (targetObj, text) {
    const index = targetObj.findIndex(function (todo) {
        return todo.text === text
    })
    if (index > -1) {
        targetObj.splice(index, 1)
    }
}

let getThingTodo = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed === false
    })
}


let sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (a.completed > b.completed) {
            return 1
        } else {
            return 0
        }
    })
}



sortTodos(todos)
console.log(todos)


// console.log(getThingTodo(todos))



// deleteTodo(todos, "write my diary")
// console.log(todos)
