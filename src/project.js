import { deleteTask } from "./task";

// Create an empty array to store projects
export const projectBoard = [];

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
function generateProjectBoard() {
    const sidePanel = document.querySelector('#project-board');
    sidePanel.textContent = '';

    const dropDown = document.querySelector('#project-name');
    dropDown.textContent = '';
    
    projectBoard.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        const projectTab = document.createElement('div');
        projectTab.textContent = project.name;
        projectTab.addEventListener("click", () => {
            displayTasks(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener("click", () => {
            deleteProject(index);
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
        
        const taskTitle = document.createElement('h2');
        taskTitle.textContent = `${task.name}`;

        const taskDescription = document.createElement('p');
        taskDescription.textContent = `${task.description}`;

        const taskDueDate = document.createElement('h3');
        taskDueDate.textContent = `${task.dueDate}`;

        const taskPriority = document.createElement('h3');
        taskPriority.textContent = `${task.priority}`;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            taskCard.classList.add('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            projectBoard[projectIndex].tasks.splice(index, 1);
            displayTasks(projectIndex);
        });

        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(deleteButton);

        taskCard.dataset.bookIndex = projectBoard[projectIndex].tasks.length -1;

        mainPanel.appendChild(taskCard);
    });
};