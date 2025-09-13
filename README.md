# Todo Management System (Node.js + Express + MongoDB)

A simple RESTful API for managing daily tasks (todos).
This backend system allows you to create, read, update, and manage todos using Express.js and MongoDB.

---

## Features

* Get all todos – Retrieve all tasks from the database
* Get a todo – Fetch a single task by taskId
* Add a todo – Create a new task and save it in the database
* Update a todo – Modify task details such as title and completion status
* REST API – JSON-based endpoints, easily testable with Postman

---

## Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB with Mongoose
* Tools: Git, Postman for API testing

---

## Project Structure

* db.js → Handles MongoDB connection
* todoschema.js → Mongoose schema/model for todos
* server.js → Express app with API routes
* package.json → Dependencies and scripts
* README.md → Project documentation

---

## Installation & Setup

1. Clone the repository
2. Install dependencies using npm install
3. Set up MongoDB connection inside db.js with your MongoDB URI
4. Start the server using node server.js
5. Server will run at [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

* GET /todos → Fetch all todos
* GET /todos/\:taskId → Fetch a single todo by ID
* POST /todo → Add a new todo
* PUT /todo/\:taskId → Update a todo by ID

---

## Contributing

1. Fork the repository
2. Create a new branch for your feature or fix
3. Commit and push your changes
4. Submit a Pull Request

---

## License

This project is licensed under the MIT License.

---
