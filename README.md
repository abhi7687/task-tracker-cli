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