const currentMonthElement = document.getElementById('current-month');
const datesContainer = document.getElementById('dates');
const selectedDateElement = document.getElementById('selected-date');
const taskListElement = document.getElementById('task-list');

// Dummy tasks for demonstration
const tasks = {
  '2024-11-29': ['Finish project report', 'Buy groceries'],
  '2024-11-30': ['Team meeting at 3 PM', 'Yoga class'],
};

// Helper function to format date
const formatDate = (year, month, day) => {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

// Generate calendar
const generateCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Set current month
  currentMonthElement.textContent = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Clear previous dates
  datesContainer.innerHTML = '';

  // Add empty days at the beginning
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    datesContainer.appendChild(emptyCell);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dateElement = document.createElement('div');
    dateElement.classList.add('date');
    dateElement.textContent = day;

    const formattedDate = formatDate(year, month, day);

    if (formattedDate === formatDate(today.getFullYear(), today.getMonth(), today.getDate())) {
      dateElement.classList.add('active'); // Highlight today's date
      updateTasks(formattedDate);
    }

    dateElement.addEventListener('click', () => {
      document.querySelectorAll('.date').forEach((date) => date.classList.remove('active'));
      dateElement.classList.add('active');
      updateTasks(formattedDate);
    });

    datesContainer.appendChild(dateElement);
  }
};

// Update tasks for the selected date
const updateTasks = (date) => {
  selectedDateElement.textContent = date;
  taskListElement.innerHTML = '';

  if (tasks[date]) {
    tasks[date].forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.textContent = task;
      taskListElement.appendChild(taskItem);
    });
  } else {
    const noTasksItem = document.createElement('li');
    noTasksItem.textContent = 'No tasks for this day.';
    taskListElement.appendChild(noTasksItem);
  }
};

// Initialize calendar
generateCalendar();