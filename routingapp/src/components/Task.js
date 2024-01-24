// Task.jsx
import React, { useState } from 'react';
const Task = (props) => {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");

  const handleAddTask = () => {
    const arr = props.todoArray;
    try {
      if (arr.includes(todo)) {
        throw ("already added");
      }
      else {
        if (todo.trim() !== "") {
          props.update(todo);
          setTodo("");
          setTodoError("");
        }
      }
    }
    catch (e) {
      setTodoError(e);
    }
  };


  return (
    <>
    <div className='text-center text-danger'>
           {todoError}
    </div>
      <div className='task-container'>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className='task-input'
          type='text'
          placeholder='Enter task to be completed'
        />

        <button className='btn btn-primary' onClick={handleAddTask}>
          Add Task
        </button>

      </div>
    </>
  );
};

export default Task;
