const { readTasks, writeTasks } = require("./fileHandler");

function generateId(tasks) {
    return tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
}

function addTask(description) {
    const tasks = readTasks();

    const newTask = {
        id: generateId(tasks),
        description,
        status: "todo",
        cretedAt: new Date(),
        updatedAt: new Date()
    };

    tasks.push(newTask)
    writeTasks(tasks);

    console.log("Task added");
}

function updateTask(id, description) {
    const tasks = readTasks();
    const task = tasks.find(t => t.id == id);

    if (!task) return console.log("Task not found");

    task.description = description;
    task.updatedAt = new Date();

    writeTasks(tasks);
    console.log("Updated");
}

function deleteTask(id) {
    const tasks = readTasks();
    const filtered = tasks.filter(t => t.id != id);

    if(tasks.length === filtered.length)
        return console.log("Task not found");

    writeTasks(filtered);
    console.log("Deleted");
}

function markStatus(id, status) {
    const tasks = readTasks();
    const task = tasks.find(t => t.id == id);

    if (!task) return console.log("Task not found");

    task.status = status;
    task.updatedAt = new Date();

    writeTasks(tasks);
    console.log(`Marked as ${status}`);
}

function listTasks(filter = "all") {
    const tasks = readTasks();

    let filtered = tasks;

    if (filtered === "done") {
        filtered = tasks.filter(t => t.status === "done");
    } else if (filter === "todo") {
        filtered = tasks.filter(t => t.status === "todo");
    } else if (filter === "in-progress") {
        filtered = tasks.filter(t => t.status === "in-progress")
    }

    console.table(filtered);
}

module.exports = {
    addTask,
    updateTask,
    deleteTask,
    markStatus,
    listTasks
};