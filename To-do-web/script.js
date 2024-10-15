const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Add a "completed" toggle
  taskItem.addEventListener('click', function () {
    taskItem.classList.toggle('completed');
  });

  // Add delete button to the task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Clear the input after adding the task
  taskInput.value = '';
}

// Event listener for adding task when clicking the button
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing "Enter" to add the task
taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
