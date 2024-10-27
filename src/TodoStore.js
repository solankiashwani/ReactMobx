import { makeAutoObservable } from "mobx";

// Store Function
const createTodoStore = () => {
  return makeAutoObservable({
    todos: [],
    
    addTodo(todo) {
      this.todos.push(todo);
    }
  });
};

// Exporting the instance of the store
const todoStore = createTodoStore();
export default todoStore;
