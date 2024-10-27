// todoContext.js
import { createContext, useContext } from "react";
import todoStore from "./TodoStore";

// Create a context for the store
const TodoStoreContext = createContext(todoStore);

// Custom hook to access the store from any component
export const useTodoStore = () => useContext(TodoStoreContext);

// Export the context for provider use
export default TodoStoreContext;