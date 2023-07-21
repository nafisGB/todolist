// TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  // Step 3: Set up the state to store the tasks
  const [tasks, setTasks] = useState([]);
  // Step 4: Set up the state to handle the input field
  const [taskInput, setTaskInput] = useState('');

  // Step 6: Handle task submission
  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim() === '') return;
    setTasks([...tasks, taskInput.trim()]);
    setTaskInput(''); // Clear the input field after adding a task
  };

  // Step 7: Handle task removal
  const handleTaskRemove = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleTaskRemove(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
