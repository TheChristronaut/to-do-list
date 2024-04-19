import { backupToLocalStorage } from "./storage";

// Create an empty array to store projects
export let projectBoard = [];

// Function to create a new project
export function createProject(projectNameInput) {
    const project = {
        name: projectNameInput,
        tasks: [],
    };

    projectBoard.push(project);

    generateProjectBoard();

    console.log(project.name, "added successfully!");
}

// Function to put Projects into the UI
export function generateProjectBoard() {
    const sidePanel = document.querySelector('#project-board');
    sidePanel.textContent = '';

    const dropDown = document.querySelector('#project-name');
    dropDown.textContent = '';
    
    projectBoard.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-div');
        const projectTab = document.createElement('div');
        projectTab.classList.add('project-tab');
        projectTab.textContent = project.name;
        projectTab.addEventListener("click", () => {
            displayTasks(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('project-delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener("click", () => {
            deleteProject(index);
            backupToLocalStorage();
            generateProjectBoard();
        });

        projectDiv.appendChild(deleteButton);
        projectDiv.appendChild(projectTab);

        addProjectToForm(project, dropDown);
        sidePanel.appendChild(projectDiv);
    });
};

function deleteProject(index) {
    projectBoard.splice(index, 1);
    generateProjectBoard();
}

// Add projects to task form dropdown
function addProjectToForm (project, dropDown) {
    const option = document.createElement('option');
    option.text = project.name;

    dropDown.add(option);
};

// Display project tasks
export function displayTasks(projectIndex) {
    const mainPanel = document.querySelector('#main-content');
    mainPanel.textContent = '';

    const projectTitle = document.createElement('h1');
    projectTitle.textContent = projectBoard[projectIndex].name;
    mainPanel.appendChild(projectTitle);

    const tasks = projectBoard[projectIndex].tasks;

    tasks.forEach((task, index) => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        
        const taskTitle = document.createElement('h2');
        taskTitle.textContent = `${task.name}`;
        taskTitle.classList.add('task-card-title');

        const taskDescription = document.createElement('p');
        taskDescription.textContent = 'Description: ' + `${task.description}`;
        taskDescription.classList.add('task-card-description');

        const taskDueDate = document.createElement('h3');
        taskDueDate.textContent = 'Due by: ' + `${task.dueDate}`;
        taskDueDate.classList.add('task-card-due-date');

        const taskPriority = document.createElement('h3');
        taskPriority.textContent = 'Priority level: ' + `${task.priority}`;
        taskPriority.classList.add('task-card-priority');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('task-complete-btn');
        completeButton.addEventListener('click', () => {
            taskCard.classList.add('completed');
            backupToLocalStorage();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('task-delete-btn');
        deleteButton.addEventListener('click', () => {
            projectBoard[projectIndex].tasks.splice(index, 1);
            backupToLocalStorage();
            displayTasks(projectIndex);
        });

        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(deleteButton);
        taskCard.appendChild(completeButton);

        taskCard.dataset.bookIndex = projectBoard[projectIndex].tasks.length -1;

        mainPanel.appendChild(taskCard);
    });
};

// Load data on start
export function loadStorage() {
    const storedData = localStorage.getItem('projectBoard');
    if (storedData) {
        projectBoard = JSON.parse(storedData);
        generateProjectBoard();
    }
}