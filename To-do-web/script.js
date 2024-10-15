const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  taskItem.addEventListener('click', function () {
    taskItem.classList.toggle('completed');
  });
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
  taskInput.value = '';
}
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
