let tasks = [];

function addTask() {
  const text = document.getElementById('taskInput').value.trim();
  const category = document.getElementById('categoryInput').value;
  const dueDate = document.getElementById('dueDateInput').value;

  if (!text || !dueDate) {
    alert("Please enter task and due date.");
    return;
  }

  const newTask = {
    id: Date.now(),
    text,
    category,
    dueDate,
    completed: false
  };

  tasks.push(newTask);
  renderTasks();
  clearInputs();
}

function clearInputs() {
  document.getElementById('taskInput').value = '';
  document.getElementById('dueDateInput').value = '';
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const statusFilter = document.getElementById('statusFilter').value;
  const categoryFilter = document.getElementById('categoryFilter').value;

  let filteredTasks = tasks;

  if (statusFilter !== 'all') {
    filteredTasks = filteredTasks.filter(task =>
      statusFilter === 'completed' ? task.completed : !task.completed
    );
  }

  if (categoryFilter !== 'all') {
    filteredTasks = filteredTasks.filter(task => task.category === categoryFilter);
  }

  // Sort by due date (oldest first)
  filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    li.innerHTML = `
      <div>
        <strong>${task.text}</strong> <br>
        <small>${task.category} | Due: ${task.dueDate}</small>
      </div>
      <div>
        <button onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Done'}</button>
        <button onclick="deleteTask(${task.id})" style="background:#dc3545;">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}
