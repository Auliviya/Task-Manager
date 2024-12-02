const progressData = {
    today: 75, // Progress percentage for today
    week: 60, // Progress percentage for the week
    overall: 85, // Overall progress percentage
  };
  
  const taskData = {
    completed: 40,
    inProgress: 10,
    pending: 5,
  };
  
  // Update Progress Circles
  const updateProgress = () => {
    // Today's Progress
    const todayCircle = document.getElementById('progress-today');
    todayCircle.style.background = `conic-gradient(#4caf50 ${progressData.today}%, #333 ${progressData.today}%)`;
    document.getElementById('today-percent').textContent = `${progressData.today}%`;
  
    // Weekly Progress
    const weekCircle = document.getElementById('progress-week');
    weekCircle.style.background = `conic-gradient(#2196f3 ${progressData.week}%, #333 ${progressData.week}%)`;
    document.getElementById('week-percent').textContent = `${progressData.week}%`;
  
    // Overall Progress
    const overallCircle = document.getElementById('progress-overall');
    overallCircle.style.background = `conic-gradient(#ff9800 ${progressData.overall}%, #333 ${progressData.overall}%)`;
    document.getElementById('overall-percent').textContent = `${progressData.overall}%`;
  };
  
  // Update Task Breakdown
  const updateTaskBreakdown = () => {
    document.getElementById('completed-tasks').textContent = taskData.completed;
    document.getElementById('inprogress-tasks').textContent = taskData.inProgress;
    document.getElementById('pending-tasks').textContent = taskData.pending;
  };
  
  // Initialize Insights Section
  const initInsights = () => {
    updateProgress();
    updateTaskBreakdown();
  };
  
  // Run on page load
  initInsights();