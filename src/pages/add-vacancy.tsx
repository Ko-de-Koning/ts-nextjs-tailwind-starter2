import React, { useEffect, useState } from 'react';

import AddTask from './../components/AddTask';
import type { VacancyObject } from './../components/Task';

const AddVacancy = () => {
  const [tasks, setTasks] = useState([] as VacancyObject[]);

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Add Task
  const addTask = async (task: VacancyObject) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    /*       const id = Math.floor(Math.random() * 10000) + 1
          const newTask = { id, ...task}
          setTasks([...tasks, newTask])
    */
  };

  return (
    <div className='container'>
      <AddTask onAdd={addTask} />
    </div>
  );
};

export default AddVacancy;
