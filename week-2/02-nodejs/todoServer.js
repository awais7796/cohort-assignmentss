/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
  const express = require('express');
  const bodyParser = require('body-parser');
  
  const app = express();
  const port=3000;
  app.use(bodyParser.json());
  
  let todos=[];
  let id=0;
  
  //add todo
  app.post('/todos',(req,res)=>{
    const{title,discription}=req.body;
    const newTodo={
      "id":id++,
      title,
      discription
    }
    todos.push(newTodo);
    return res.status(200).json(todos);
  })
  
  //get all todo 
  app.get('/todos',(req,res)=>{
    if(!todos.length){
      res.status(404).send("no todos, chill !!!")
    }
    res.status(200).json(todos)
  })
  
  //get todo with id 
  app.get('/todos/:id',(req,res)=>{
    const todo=todos.find(t=>t.id=== parseInt(req.params.id));
    if(!todo){
      return res.status(404).send("todo not found")
    }
    return res.status(200).json(todo);
  })
  
  
  //update todo
  app.put('/todos/:id',(req,res)=>{
    const todo=todos.find(t=>t.id=== parseInt(req.params.id));
    if(!todo){
      return res.status(404).send("todo not found")
    }
    const {title,discription}=req.body;
    if (title) todo.title = title;
    if (description) todo.description = description;
    // if (completed !== undefined) todo.completed = completed;
    return res.status(200).json(todo);
    
  })
  app.delete('/todos/:id',(req,res)=>{
    const index=todos.findIndex(t=>t.id===parseInt(req.params.id));
    if(!index){
      return res.status(404).send("todo not found")
    }
    todos.splice(index,1);
    return res.status(200).send("deleted")
  })
  */
// // //  app.listen(port,(req,res)=>{
// // //   res.send(`server is running at ${port}...`)
// // //  })

const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory storage
let todos = [];

// GET all todos
app.get("/todos", (req, res) => {
    res.status(200).json(todos);
});

// GET a specific todo by ID
app.get("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.status(200).json(todo);
});

// pOST a new todo
app.post("/todos", (req, res) => {
    const { title, description, completed = false } = req.body;
    if (!title || !description) return res.status(400).json({ error: "Title and description are required" });
    
    const newTodo = { id: uuidv4(), title, description, completed };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT (update) an existing todo
app.put("/todos/:id", (req, res) => {
    const { title, description, completed } = req.body;
    const todo = todos.find(t => t.id === req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    
    if (title) todo.title = title;
    if (description) todo.description = description;
    if (completed !== undefined) todo.completed = completed;
    
    res.status(200).json(todo);
});

// DELETE a todo
app.delete("/todos/:id", (req, res) => {
    const index = todos.findIndex(t => t.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: "Todo not found" });
    
    todos.splice(index, 1);
    res.status(200).json({ message: "Todo deleted successfully" });
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});




  
  module.exports = app;