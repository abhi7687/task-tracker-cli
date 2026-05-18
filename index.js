#!/usr/bin/env node
const {
    addTask,
    updateTask,
    deleteTask,
    markStatus,
    listTasks
} = require("./lib/taskService");

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case "add":
        addTask(args.slice(1).join(" "));
        break;
    
    case "update":
        updateTask(args[1], args.slice(2).join(" "));
        break;

    case "delete":
        deleteTask(args[1]);
        break;

    case "mark-in-progress":
        markStatus(args[1], "in-progress");
        break;

    case "mark-done":
        markStatus(args[1], "done");
        break;
    
    case "list":
        listTasks(args[1]);
        break;

    default:
        console.log("Invalid command");
}