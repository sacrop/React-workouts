// Home.jsx

import React, { useState } from 'react';
import Task from './Task';


const Home = () => {
  const [todos, setTodos] = useState([]);

  const updateTodos = (todo) => {
    setTodos([...todos, todo]);
  };
 

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className='todohome text-center'>To do list</div>
      <div className='container bg-dark text-light p-3'>
        <Task update={updateTodos} todoArray={todos} />
        <ul className='task-list'>
          {todos.map((todo, index) => (
            <li key={index} className='task-item'>
              <span>{todo}</span>
              <button
                className='cross-button'
                onClick={() => removeTodo(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
