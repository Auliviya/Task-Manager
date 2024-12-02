const quotes = [
    "The secret of getting ahead is getting started.",
    "Success is the sum of small efforts repeated daily.",
    "Your only limit is your mind.",
    "Dream big, work hard, stay focused, and surround yourself with good people."
  ];
  
  const quoteElement = document.getElementById('quote');
  setInterval(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${randomQuote}"`;
  }, 5000);
  
  // Add new tasks
  // const taskForm = document.getElementById('task-form');
  // const taskInput = document.getElementById('task-input');
  // const taskList = document.getElementById('task-list');
  
  // taskForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const newTask = taskInput.value.trim();
  //   if (newTask) {
  //     const taskItem = document.createElement('li');
  //     taskItem.innerHTML = `<span>${newTask}</span><button class="complete-btn">✔</button>`;
  //     taskList.appendChild(taskItem);
  //     taskInput.value = '';
  //     attachCompleteListener(taskItem.querySelector('.complete-btn'));
  //   }
  // });
  
  // // Mark tasks as completed
  // function attachCompleteListener(button) {
  //   button.addEventListener('click', () => {
  //     button.parentElement.style.textDecoration = "line-through";
  //     button.disabled = true;
  //   });
  // }
  
  // document.querySelectorAll('.complete-btn').forEach(attachCompleteListener);


   function addTask(event, listId) {
     if (event.key === "Enter") {
      const taskInput = event.target;
      const taskText = taskInput.value.trim();
  
      if (taskText) {
        const taskList = document.getElementById(listId);
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        
        
  
         taskList.appendChild(taskItem);
        taskInput.value = "";


// Load saved tasks from localStorage
const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => addTaskToList(task));
};

// Add a new task to the list
const addTaskToList = (taskText) => {
  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    removeTaskFromLocalStorage(taskText);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
};

// Save tasks to localStorage
const saveTaskToLocalStorage = (taskText) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Remove a task from localStorage
const removeTaskFromLocalStorage = (taskText) => {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Handle form submission
taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    addTaskToList(taskText);
    saveTaskToLocalStorage(taskText);
    taskInput.value = '';
  }
});

// Load tasks when the page loads
loadTasks();

        
     }
    }
   }
  