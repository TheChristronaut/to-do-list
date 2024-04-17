// Create an empty array to store projects
export const projectBoard = [];

export function createProject(projectNameInput) {

    const project = {
        name: projectNameInput,
        tasks: [],
    };

    projectBoard.push(project);

    console.log(project.name, "added successfully!");
}