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

    // No tasks available
    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }

    // Valid filter options
    const validFilters = ["all", "todo", "in-progress", "done"];

    // Validate the filter
    if (!validFilters.includes(filter)) {
        console.log(
            'Invalid filter. Use "all", "todo", "in-progress", or "done".'
        );
        return;
    }

    // Filter tasks if needed
    let filtered = tasks;

    if (filter !== "all") {
        filtered = tasks.filter(task => task.status === filter);
    }

    // No matching tasks
    if (filtered.length === 0) {
        console.log(`No tasks found with status "${filter}".`);
        return;
    }

    // Display tasks
    console.table(filtered);
}

function showHelp() {
    console.log(`
        📄 Task Tracker CLI
        Usage:
            task-tracker <command> [arguments]
        
        Commands:
            add "<description>"          Add a new task
            update <id> "<description>"  Update an existing task
            delete <id>                  Delete a task
            mark-done <id>               Mark a task as done
            mark-in-progress <id>        Mark a task as in progress
            list [filter]                List all tasks (filter: all, done, todo, in-progress)
        
        Options:
            -h, --help                   Show this help message

        Examples:
            task-tracker add "Buy groceries"
            task-tracker update 1 "Buy groceries and cook dinner"
            task-tracker mark-done 1
            task-tracker list done
        `)
}

function showVersion() {
    const { version } = require("../package.json");
    console.log(`Task Tracker CLI v${version}`);
}

module.exports = {
    addTask,
    updateTask,
    deleteTask,
    markStatus,
    listTasks,
    showHelp,
    showVersion
};