import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programação',
      completed: false,
    },

    {
      id: '2',
      title: 'Ler livro',
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };
  
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }
    ];

    setTasks(newTasks);
  }

  return(
      <>
          <div className='container'>
            <AddTask handleTaskAddition={handleTaskAddition} handleTaskClick={handleTaskClick} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
          </div>
      </>
  )
}

export default App;     