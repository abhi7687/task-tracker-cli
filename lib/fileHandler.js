const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

function initFile() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
}

function readTasks() {
    initFile();
    try {
        const data = fs.readFileSync(filePath, "utf-8");

        if (!data.trim()){
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        console.log("JSON corrupted. Resetting file...");
        writeTasks([]);
        return [];
    }
}

function writeTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };