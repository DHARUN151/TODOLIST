const express = require("express");
const connectDB = require("./db");
connectDB();
const Todo = require("./todoschema");
const app = express();
const PORT = 3000;
app.use(express.json());

const todos = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
    priority: "high",
  },
  {
    id: 2,
    title: "Finish project report",
    completed: true,
  },
  {
    id: 3,
    title: "Book dentist appointment",
    completed: false,
  },
  {
    id: 4,
    title: "Pay electricity bill",
    completed: true,
  },
  {
    id: 5,
    title: "Clean the living room",
    completed: false,
  },
  {
    id: 6,
    title: "Prepare for presentation",
    completed: false,
  },
  {
    id: 7,
    title: "Read a chapter of a book",
    completed: true,
  },
  {
    id: 8,
    title: "Go for evening walk",
    completed: false,
  },
  {
    id: 9,
    title: "Fix broken chair",
    completed: false,
  },
  {
    id: 10,
    title: "Call insurance agent",
    completed: true,
  },
];
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.put("/todo/:taskId", (req, res) => {
  const taskId = parseInt(req.params.taskId);
  let todo = todos.find((t) => t.id === taskId);
  console.log(todo, taskId);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todo.title = req.body.title ?? todo.title;
  todo.completed = req.body.completed ?? todo.completed;

  res.json({ message: "Todo updated successfully", todo });
});

app.get("/todos/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  const todo = todos.find((todo) => todo.id == taskId);
  res.status(200).json(todo);
});

app.post("/todo",async (req, res) => {
  const newTodo = await Todo.create(req.body)
  res.status(201).json({
    message: "Todo created successfully",
    data: newTodo
  });
});

app.listen(PORT, () => {
  console.log(`server is running  at port ${PORT}`);
});
