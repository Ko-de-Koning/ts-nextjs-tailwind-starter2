import type { VacancyObject } from './../pages/add-vacancy';

type TaskObject = {
  task: VacancyObject;
  key: number;
};

const Task = ({ task }: TaskObject) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
