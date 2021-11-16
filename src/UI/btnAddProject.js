export function btnAddProject(){
    const addProjectBtn=document.createElement('button');
    addProjectBtn.addEventListener('click',nameProject);
    addProjectBtn.textContent="Add Project";
    return addProjectBtn;
}

function nameProject(){
    this.hidden=false;
    const sideBarContainer=this.parentNode;
    const projectContainer=document.createElement('input');
    sideBarContainer.appendChild(projectContainer);
    // projectContainer.;
}