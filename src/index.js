/*
todoFactory(title, description, dueDate, notes, checkList) -- create todo object
    -editTitle(), editDescription()...

updatePage() -- refreshes DOM

projectFactory(projName) -- creates project object, todos are stored in an array
    -arrTodo
    -addNewTodo(todoObject) -- add todo to arrTodo
    -deleteTodo(taskTitle) -- search for todo and delete it from arrTodo
    -getTodos() -- return arrTodo
*/
import './css/style.css'
import { leftSideBar } from "./UI/leftSideBar.js"; // not used yet
const mainContainer=document.getElementById('body');

mainContainer.appendChild(leftSideBar());


// const leftSideBar=document.createElement('div');
// console.log(leftSideBar);
// mainContainer.appendChild();
