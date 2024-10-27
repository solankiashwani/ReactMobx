import React from 'react'
import todoStore from "../TodoStore";

export const AddTaskButton = () => {
    const handleAddTodo = (taskType) => {
        const newTodo = `Task ${todoStore.todos.length + 1} ${taskType}`;
        todoStore.addTodo(newTodo);
      };

  return (
    <div> ComponentOne - Another component to alter the store
        <button onClick={() => handleAddTodo('Externally added')}>Add External TODO</button>
    </div>

  )
}