import { createRecord, getCurrentUserId } from 'thin-backend';

export default function AddTaskButton() {
  function handleClick() {
    createRecord('tasks', {
      title: window.prompt('Title:') || '',
      userId: getCurrentUserId(),
    });
  }
  return (
    <button className='btn btn-primary' onClick={handleClick}>
      Add Task
    </button>
  );
}
