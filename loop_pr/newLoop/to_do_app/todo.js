let todo = [];
let request;

while (true) {
    request = prompt("What do you want to do? (add / list / quit)");

    if (request === "quit") {
        console.log("Quitting the app...");
        break;
    } 
    else if (request === "list") {
        console.log("**********");
        for (let task of todo) {
            console.log(task);
        }
        console.log("**********");
    } 
    else if (request === "add") {
        let task = prompt("Enter the task:");
        todo.push(task);
        console.log("Task added");
    }
}
