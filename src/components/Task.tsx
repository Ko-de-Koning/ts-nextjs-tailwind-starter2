import React from 'react';

export type VacancyObject = {
  text: string;
  day: string;
  id: number;
};

type TaskObject = {
  task: VacancyObject;
  key: number;
};

const Task = ({ task }: TaskObject) => {
  return (
    <div className='task'>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
