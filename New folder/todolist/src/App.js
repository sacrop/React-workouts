import React, { useState } from 'react';
import './App.css';

function App() {

  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const addTask=()=>{
    const id=Math.random().toString();
    const newTask={id_:id,task:toDo};
    setToDos([...toDos,newTask])
  }
  const remove=(id)=>{
    setToDos(toDos.filter((task)=>task.id_!==id));
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(event) => { setToDo(event.target.value) }} placeholder="🖊️ Add item..." />
        <i onClick={() => {addTask()}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
        toDos.map((value) => {
          return (
            <div className="todo" key={value.id_}>
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p >{value.task}</p>
              </div>
              <div className="right">
                <i onClick={()=>remove(value.id_)} className="fas fa-times"></i>
              </div>
            </div>
          )

        })}
      </div>
    </div>
  );
}

export default App;