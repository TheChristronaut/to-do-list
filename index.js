
function $b72d30f90a494d76$export$38a248e5348a1dc(nameInput, descriptionInput, dueDateInput, priorityInput, projectNameTaskInput) {
    let project = (0, $75790fd4dff5bc3b$export$de8bbbc31d772774).find((p)=>p.name === projectNameTaskInput);
    if (project) {
        let task = {
            name: nameInput,
            description: descriptionInput,
            dueDate: dueDateInput,
            priority: priorityInput
        };
        console.log(task);
        project.tasks.push(task);
    }
}


const $75790fd4dff5bc3b$export$de8bbbc31d772774 = [];
function $75790fd4dff5bc3b$export$fbb34fdd2a7bb43f(projectNameInput) {
    const project = {
        name: projectNameInput,
        tasks: []
    };
    $75790fd4dff5bc3b$export$de8bbbc31d772774.push(project);
    $75790fd4dff5bc3b$var$generateProjectBoard();
    console.log(project.name, "added successfully!");
}
// Function to put Projects into the UI
function $75790fd4dff5bc3b$var$generateProjectBoard() {
    const sidePanel = document.querySelector("#project-board");
    sidePanel.textContent = "";
    const dropDown = document.querySelector("#project-name");
    dropDown.textContent = "";
    $75790fd4dff5bc3b$export$de8bbbc31d772774.forEach((project, index)=>{
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-div");
        const projectTab = document.createElement("div");
        projectTab.classList.add("project-tab");
        projectTab.textContent = project.name;
        projectTab.addEventListener("click", ()=>{
            $75790fd4dff5bc3b$export$21dff946e9eca40d(index);
        });
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("project-delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", ()=>{
            $75790fd4dff5bc3b$var$deleteProject(index);
        });
        projectDiv.appendChild(deleteButton);
        projectDiv.appendChild(projectTab);
        $75790fd4dff5bc3b$var$addProjectToForm(project, dropDown);
        sidePanel.appendChild(projectDiv);
    });
}
function $75790fd4dff5bc3b$var$deleteProject(index) {
    $75790fd4dff5bc3b$export$de8bbbc31d772774.splice(index, 1);
    $75790fd4dff5bc3b$var$generateProjectBoard();
}
// Add projects to task form dropdown
function $75790fd4dff5bc3b$var$addProjectToForm(project, dropDown) {
    const option = document.createElement("option");
    option.text = project.name;
    dropDown.add(option);
}
function $75790fd4dff5bc3b$export$21dff946e9eca40d(projectIndex) {
    const mainPanel = document.querySelector("#main-content");
    mainPanel.textContent = "";
    const projectTitle = document.createElement("h1");
    projectTitle.textContent = $75790fd4dff5bc3b$export$de8bbbc31d772774[projectIndex].name;
    mainPanel.appendChild(projectTitle);
    const tasks = $75790fd4dff5bc3b$export$de8bbbc31d772774[projectIndex].tasks;
    tasks.forEach((task, index)=>{
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        const taskTitle = document.createElement("h2");
        taskTitle.textContent = `${task.name}`;
        taskTitle.classList.add("task-card-title");
        const taskDescription = document.createElement("p");
        taskDescription.textContent = "Description: " + `${task.description}`;
        taskDescription.classList.add("task-card-description");
        const taskDueDate = document.createElement("h3");
        taskDueDate.textContent = "Due by: " + `${task.dueDate}`;
        taskDueDate.classList.add("task-card-due-date");
        const taskPriority = document.createElement("h3");
        taskPriority.textContent = "Priority level: " + `${task.priority}`;
        taskPriority.classList.add("task-card-priority");
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("task-complete-btn");
        completeButton.addEventListener("click", ()=>{
            taskCard.classList.add("completed");
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("task-delete-btn");
        deleteButton.addEventListener("click", ()=>{
            $75790fd4dff5bc3b$export$de8bbbc31d772774[projectIndex].tasks.splice(index, 1);
            $75790fd4dff5bc3b$export$21dff946e9eca40d(projectIndex);
        });
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(deleteButton);
        taskCard.appendChild(completeButton);
        taskCard.dataset.bookIndex = $75790fd4dff5bc3b$export$de8bbbc31d772774[projectIndex].tasks.length - 1;
        mainPanel.appendChild(taskCard);
    });
}



const $4fa36e821943b400$var$addTaskForm = document.querySelector("#create-task-dialog");
const $4fa36e821943b400$var$createProjectBtn = document.querySelector("#create-project-btn");
const $4fa36e821943b400$var$newTaskBtn = document.querySelector("#new-task-btn");
const $4fa36e821943b400$var$closeFormBtn = document.querySelector("#close-form");
const $4fa36e821943b400$var$submitFormBtn = document.querySelector("#submit-form");
// Add listener to the create project button
$4fa36e821943b400$var$createProjectBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const projectNameInput = document.querySelector("#project-name-input").value;
    (0, $75790fd4dff5bc3b$export$fbb34fdd2a7bb43f)(projectNameInput);
    document.querySelector("#project-name-input").value = "";
    console.log((0, $75790fd4dff5bc3b$export$de8bbbc31d772774));
});
// Add listener to the new task button
$4fa36e821943b400$var$newTaskBtn.addEventListener("click", ()=>{
    $4fa36e821943b400$var$addTaskForm.showModal();
});
// Add listener to the close button
$4fa36e821943b400$var$closeFormBtn.addEventListener("click", ()=>{
    $4fa36e821943b400$var$addTaskForm.close();
});
// Add listener to the submit button 
$4fa36e821943b400$var$submitFormBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const nameInput = document.querySelector("#task-name").value;
    const descriptionInput = document.querySelector("#task-description").value;
    const dueDateInput = document.querySelector("#due-date").value;
    const priorityInput = document.querySelector("#task-priority").value;
    const projectNameTaskInput = document.querySelector("#project-name").value;
    (0, $b72d30f90a494d76$export$38a248e5348a1dc)(nameInput, descriptionInput, dueDateInput, priorityInput, projectNameTaskInput);
    const projectIndex = (0, $75790fd4dff5bc3b$export$de8bbbc31d772774).findIndex((project)=>project.name === projectNameTaskInput);
    if (projectIndex !== -1) (0, $75790fd4dff5bc3b$export$21dff946e9eca40d)(projectIndex);
    else console.error("Project not found!");
    document.querySelector("#task-name").value = "";
    document.querySelector("#task-description").value = "";
    document.querySelector("#due-date").value = "";
    document.querySelector("#task-priority").value = "";
    document.querySelector("#project-name").value = "";
    $4fa36e821943b400$var$addTaskForm.close();
});


//# sourceMappingURL=index.js.map
