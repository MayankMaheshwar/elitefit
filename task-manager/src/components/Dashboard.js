import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Dashboard;
