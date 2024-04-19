import { projectBoard } from "./project";

// function to store data to local storage
export function backupToLocalStorage() {
    localStorage.setItem('projectBoard', JSON.stringify(projectBoard));
    console.log(localStorage);
}