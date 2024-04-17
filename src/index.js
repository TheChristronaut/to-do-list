import { createProject } from "./project";
import { projectBoard } from "./project";

const createProjectBtn = document.querySelector('#create-project-btn')

createProjectBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const projectNameInput = document.querySelector('#project-name-input').value;

    createProject(projectNameInput);

    document.querySelector('#project-name-input').value = '';

    console.log(projectBoard);
});

