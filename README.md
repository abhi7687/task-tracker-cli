# 📝 Task Tracker CLI (Node.js)

A simple command-line application to manage tasks using Node.js.

---

## 🚀 Features

- Add, update, delete tasks
- Mark tasks as in-progress or done
- List all / filtered tasks
- JSON file storage
- Error handling

---

## 🛠 Tech Stack

- Node.js
- File System (fs)

---

## 📁 Structure

task-tracker/
│── data/
│   └── tasks.json
│── lib/
│   ├── fileHandler.js
│   ├── taskService.js
│── index.js

---

## ⚙️ Usage

```bash
node index.js add "Learn Node"
node index.js list
node index.js mark-done 1

## 🚀 CLI Usage

After installing globally using `npm link`, you can run:

```bash
task-cli add "Learn Node.js"
task-cli list
task-cli update 1 "Master Node.js"
task-cli mark-in-progress 1
task-cli mark-done 1
task-cli delete 1

---

# 🟢 Push Changes

```bash