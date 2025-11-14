const express = require('express');
const port = 8000;

const app = express();
app.use(express.json());

const tasks = [
    {"id": 1, "nama": "loui", "devisi": "IT"},
    {"id": 2, "nama": "ado", "devisi": "Riset dan Pengembangan (R&D)"},
    {"id": 3, "nama": "andre", "devisi": "Humas"},
    {"id": 4, "nama": "Randy", "devisi": "IT"},
];

app.get('/', (req, res) => {
    res.status(200).json({
        "total": tasks.length,
        "data": tasks,
        "note": "All Tasks List"
    });
});

app.get('/tasks/:id', (req, res) => {
    let id_tasks = parseInt(req.params.id);
    let result = tasks.filter(t => t.id === id_tasks);

    if (result.length == 0) {
        res.status(400).json({
            status: "Data Not Found"
        });
    }
    res.status(200).json({
        message: "Task Found",
        data: result
    });
});

app.post('/tasks', (req, res) => {
    const { nama, devisi} = req.body;
    if (!nama || !devisi) {
        return res.status(400).json({
            message: "Nama and Devisi are Required"
        });
    }
    let findTitle = tasks.find(t => t.title === title);
    if (findTitle) {  // Perbaikan: Jika title sudah ada, error
        return res.status(400).json({
            message: "Nama is already exists"
        });
    }
    const newTask = {
        "id": tasks.length + 1,
        "nama": nama,
        "devisi": devisi,
    };
    tasks.push(newTask);
    res.status(200).json({
        message: "Add Task is Successful"
    });
});

app.put('/tasks/:id', (req, res) => {
    let id_tasks = parseInt(req.params.id);
    if (isNaN(id_tasks)) {
        return res.status(400).json({
            message: "Invalid ID"
        });
    }
    let taskIndex = tasks.findIndex(t => t.id === id_tasks);
    if (taskIndex == -1) {
        return res.status(400).json({
            message: "Data Not Found"
        });
    }
    const { title, description, completed } = req.body;
    if (title !== undefined) {
        let findOtherTitle = tasks.find(t => t.title === title && t.id !== id_tasks);
        if (findOtherTitle) {
            return res.status(400).json({
                message: "Title is already exists in another task"
            });
        }
        tasks[taskIndex].title = title;
    }
    if (description !== undefined) tasks[taskIndex].description = description;
    if (completed !== undefined) tasks[taskIndex].completed = completed;
    res.status(200).json({
        message: "Update Task is Successful",
        data: tasks[taskIndex]
    });
});

app.delete('/tasks/:id', (req, res) => {
    let id_tasks = parseInt(req.params.id);
    let taskIndex = tasks.findIndex(t => t.id === id_tasks);
    if (taskIndex == -1) {
        return res.status(400).json({
            message: "Data Not Found"
        });
    }
    tasks.splice(taskIndex, 1);
    res.status(200).json({
        message: "Delete is Successful",
        data: tasks
    });
});

app.listen(port, () => {
    console.log(`Server Run at http://localhost:${port}`);
});
