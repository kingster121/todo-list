import { btnAddProject } from "./btnAddProject.js";

export function leftSideBar(){
    const leftSideBarContainer=document.createElement('div');

    const projectText=document.createElement('h1');
    projectText.textContent='Projects';
    leftSideBarContainer.appendChild(projectText);

    const addBtn=btnAddProject();
    leftSideBarContainer.appendChild(addBtn);

    return leftSideBarContainer;
}