import { Task, deleteRecord } from 'thin-backend';

interface TaskProps {
  task: Task;
}

function DeleteTaskButton({ task }: TaskProps) {
  function handleClick() {
    deleteRecord('tasks', task.id);
  }

  return (
    <button onClick={handleClick} className='btn btn-link text-danger ml-5 p-0'>
      ×
    </button>
  );
}

export default DeleteTaskButton;
