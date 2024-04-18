import { createProject, displayTasks } from "./project";
import { projectBoard } from "./project";
import { addTask } from "./task";

const addTaskForm = document.querySelector('#create-task-dialog');
const createProjectBtn = document.querySelector('#create-project-btn');
const newTaskBtn = document.querySelector('#new-task-btn');
const closeFormBtn = document.querySelector('#close-form');
const submitFormBtn = document.querySelector('#submit-form');

// Add listener to the create project button
createProjectBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const projectNameInput = document.querySelector('#project-name-input').value;

    createProject(projectNameInput);

    document.querySelector('#project-name-input').value = '';

    console.log(projectBoard);
});

// Add listener to the new task button
newTaskBtn.addEventListener("click", () => {
    addTaskForm.showModal();
});

// Add listener to the close button
closeFormBtn.addEventListener("click", () => {
    addTaskForm.close();
});

// Add listener to the submit button 
submitFormBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#task-name').value;
    const descriptionInput = document.querySelector('#task-description').value;
    const dueDateInput = document.querySelector('#due-date').value;
    const priorityInput = document.querySelector('#task-priority').value;
    const projectNameTaskInput = document.querySelector('#project-name').value;

    addTask(nameInput, descriptionInput, dueDateInput, priorityInput, projectNameTaskInput);

    const projectIndex = projectBoard.findIndex(project => project.name === projectNameTaskInput);
    
    if (projectIndex !== -1) {
        displayTasks(projectIndex);
    } else {
        console.error('Project not found!');
    }

    document.querySelector('#task-name').value = '';
    document.querySelector('#task-description').value = '';
    document.querySelector('#due-date').value = '';
    document.querySelector('#task-priority').value = '';
    document.querySelector('#project-name').value = '';

    addTaskForm.close();
});