// App.jsx
import React from "react";
import todoStore from "./TodoStore";           // Import the store
import TodoList from "./components/TodoList";
import TodoStoreContext from "./TodoContext";
import { AddTaskButton } from "./components/AddTaskButton";

const App = () => {
  return (
    <TodoStoreContext.Provider value={todoStore}>
      <div>
        <h1>MobX Todo App</h1>
        <AddTaskButton/>
        <h2> Core component starts below</h2>
        <TodoList />
      </div>
    </TodoStoreContext.Provider>
  );
};

export default App;
