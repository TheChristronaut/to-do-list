import { projectBoard } from "./project";

export function addTask(nameInput, descriptionInput, dueDateInput, priorityInput, projectNameTaskInput) {
    let project = projectBoard.find(p => p.name === projectNameTaskInput);

    if (project) {
        let task = {
            name: nameInput,
            description: descriptionInput,
            dueDate: dueDateInput,
            priority: priorityInput,
        };

        console.log(task);

        project.tasks.push(task);     
        
    };
};