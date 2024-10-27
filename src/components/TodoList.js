import React from "react";
import { observer } from "mobx-react-lite";
import todoStore from "../TodoStore";

const TodoList = observer(() => {
  const handleAddTodo = (taskType) => {
    const newTodo = `Task ${todoStore.todos.length + 1} ${taskType}`;
    todoStore.addTodo(newTodo);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoStore.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => handleAddTodo('Internally added')}>Add Todo</button>
    </div>
  );
});

export default TodoList;
