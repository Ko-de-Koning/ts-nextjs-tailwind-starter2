import Task from './Task';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';

export default function TodoList() {
  const tasks = useQuery(query('tasks').orderByDesc('createdAt'));

  if (tasks === null) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
