import { updateRecord } from 'thin-backend';
import { Task } from 'thin-backend';

interface TaskProps {
  // You might might need to an manually add an import
  // if not using VSCode: `import { Task } from 'thin-backend';`

  task: Task;
}

export default function Task({ task }: TaskProps) {
  function edit() {
    updateRecord('tasks', task.id, {
      title: window.prompt('New title', task.title) || task.title,
    });
  }
  return <div onDoubleClick={edit}>{task.title}</div>;
}
