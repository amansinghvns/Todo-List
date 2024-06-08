import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(newTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="title">To-Do List</h1>
        <div className="input-container">
          <input 
            type="text" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            placeholder="Add a new task..." 
            className="task-input" 
          />
          <button onClick={addTask} className="add-button">Add</button>
          <button onClick={clearAllTasks} className="clear-button">Clear</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
              <button onClick={() => deleteTask(index)} className="delete-button">✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;