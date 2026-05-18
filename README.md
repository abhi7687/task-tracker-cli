# 📝 Task Tracker CLI (Node.js)

A simple command-line application to manage tasks using Node.js.

---
# 📝 Project URL

🔗 **Repository:** https://roadmap.sh/projects/task-tracker

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
node index.js add "Learn Node.js"
node index.js list
node index.js update 1 "Master Node.js"
node index.js mark-in-progress 1
node index.js mark-done 1
node index.js delete 1

## 🚀 CLI Usage

After installing globally using `npm install -g @abhi7687/task-tracker-cli`, you can run:

```bash
task-tracker add "Learn Node.js"
task-tracker list
task-tracker update 1 "Master Node.js"
task-tracker mark-in-progress 1
task-tracker mark-done 1
task-tracker delete 1

---

# 🟢 Push Changes

```bash

## 📦 npm Package

https://www.npmjs.com/package/@abhi7687/task-tracker-cli

## 👨‍💻 Author

Vaitla Abhiram

GitHub: https://github.com/abhi7687

## 📄 License

ISC