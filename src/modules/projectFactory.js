// projectFactory(projName) -- creates project object, todos are stored in an array
//     -arrTodo
//     -addNewTodo(todoObject) -- add todo to arrTodo
//     -deleteTodo(taskTitle) -- search for todo and delete it from arrTodo
//     -getTodos() -- return arrTodo

function projectFactory(projName) {
    let _arrTodo = []; //get only

    function addNewTodo(todoObject) {
        _arrTodo.push(todoObject);
    }

    function deleteTodo(todoTitle) {
        for (let i = 0; i < _arrTodo.length; i++) {
            if (_arrTodo[i].title === todoTitle) {
                _arrTodo.splice(i, 1);
            }
        }
    }

    // return object with addNewTodo, deleteTodo and get _arrTodo
    return{
        addNewTodo,
        deleteTodo,
        get arrTodo(){
            return _arrTodo;
        }
    }
}

export { projectFactory };