

type TodoList = {
    id:string
    name:string
    status:boolean
}

type NewOmitTodo = Omit<TodoList,"id">
// type NewTodo = Pick<TodoList,"name"| "status">

function saveTodo(todo:NewOmitTodo) {
    return {...todo, id:crypto.randomUUID()}
}


function renderTodoList(todoList:TodoList ){
    const div = document.createElement("div");

    div.id = todoList.id;
}  



