/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

// class Todo {
//   constructor(){
//     return this.todo=[];
//   }
// add(todo){
//   if(this.todo.includes(todo)){
//     throw new Error("already existed");
//   }
//   return this.todo.push(todo);
// }
// remove(index){
//   if(index<0 || index >= this.todo.length) throw new Error("invalid index");
//   return this.todo.pop(index);
//   }
//   update(index,updatedTodo){
//     if(index<0 || index >= this.todo.length) throw new Error("invalid index");
//     todo[index]=updatedTodo;
//   }
//   getall(){
//     this.todo;
//   }
//   get(index){
//     if(index<0 || index >= this.todo.length) throw new Error("invalid index");
//     this.todo[index];
//   }
//   clear(){
//      this.todo=[];
//   }
// }
class Todo {
  constructor() {
      this.todos = [];
  }

  // Adds a new todo (prevents duplicates)
  add(todo) {
      if (this.todos.includes(todo)) {
          throw new Error("Duplicate task not allowed");
      }
      return this.todos.push(todo);
  }

  // Removes a todo by index (checks for valid index)
  remove(index) {
      if (!this.isValidIndex(index)) {
          throw new Error("Invalid index");
      }
      return this.todos.splice(index, 1);
  }

  // Updates a todo at a given index (checks for valid index)
  update(index, updatedTodo) {
      if (!this.isValidIndex(index)) {
          throw new Error("Invalid index");
      }
      return this.todos[index] = updatedTodo;
  }

  // Returns all todos
  getAll() {
      return this.todos;
  }

  // Gets a specific todo by index (checks for valid index)
  get(index) {
      if (!this.isValidIndex(index)) {
          throw new Error("Invalid index");
      }
      return this.todos[index];
  }

  // Clears all todos
  clear() {
    return this.todos = [];
  }

  // Helper function to validate index
  isValidIndex(index) {
      return Number.isInteger(index) && index >= 0 && index < this.todos.length;
  }
}



module.exports = Todo;
