import { projectFactory } from "./projectFactory.js";
import { todoFactory } from "./todoFactory.js";

const todo1=todoFactory('title1', 'description', 'dueDate', 'notes', 'false');
const todo2=todoFactory('title2', 'description', 'dueDate', 'notes', false);

const proj=projectFactory("testProject");

proj.addNewTodo(todo1);
proj.addNewTodo(todo2);

console.log(proj.arrTodo);