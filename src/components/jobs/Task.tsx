import { updateRecord } from 'thin-backend';
import type { Task } from 'thin-backend';

interface TaskProps {
  // You might might need to an manually add an import
  // if not using VSCode: `import { Task } from 'thin-backend';`

  task: Task;
  key: string;
}

export default function Task({ task, key }: TaskProps) {
  function edit() {
    updateRecord('tasks', task.id, {
      title: window.prompt('New title', task.title) || task.title,
    });
  }
  return (
    <div className='editing' key={key} onDoubleClick={edit}>
      {task.title}
    </div>
  );
}
