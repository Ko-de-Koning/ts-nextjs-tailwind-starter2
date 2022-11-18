import { useEffect, useState } from 'react';

import type { VacancyObject } from './../pages/add-vacancy';
import Task from './Task';

const Tasks = () => {
  const [tasks, setTasks] = useState([] as VacancyObject[]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  if (tasks.length === 0) {
    return <></>;
  }

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
