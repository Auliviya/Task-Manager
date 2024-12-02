// Fetch buttons and options
const appSettings = document.querySelector('.settings-section .settings-item span');
const changeName = document.querySelector('.account-section .settings-item:nth-child(1) span');
const changePassword = document.querySelector('.account-section .settings-item:nth-child(2) span');
const changeImage = document.querySelector('.account-section .settings-item:nth-child(3) span');
const aboutUs = document.querySelector('.uptodo-section .settings-item:nth-child(1) span');
const faq = document.querySelector('.uptodo-section .settings-item:nth-child(2) span');
const helpFeedback = document.querySelector('.uptodo-section .settings-item:nth-child(3) span');
const supportUs = document.querySelector('.uptodo-section .settings-item:nth-child(4) span');
const logoutButton = document.querySelector('.logout button');

// Sample actions for each option
appSettings.addEventListener('click', () => {
  alert('Navigate to App Settings.');
});

changeName.addEventListener('click', () => {
  const newName = prompt('Enter new account name:');
  if (newName) {
    document.querySelector('.username').textContent = newName;
    alert(`Account name updated to "${newName}".`);
  }
});

changePassword.addEventListener('click', () => {
  const newPassword = prompt('Enter your new password:');
  if (newPassword) {
    alert('Password updated successfully.');
  }
});

changeImage.addEventListener('click', () => {
  const newImage = prompt('Enter the URL of your new profile image:');
  if (newImage) {
    document.querySelector('.profile-pic').src = newImage;
    alert('Profile image updated.');
  }
});

aboutUs.addEventListener('click', () => {
  alert('Navigate to About Us page.');
});

faq.addEventListener('click', () => {
  alert('Navigate to FAQ page.');
});

helpFeedback.addEventListener('click', () => {
  alert('Navigate to Help & Feedback page.');
});

supportUs.addEventListener('click', () => {
  alert('Navigate to Support Us page.');
});

logoutButton.addEventListener('click', () => {
  const confirmLogout = confirm('Are you sure you want to log out?');
  if (confirmLogout) {
    alert('You have been logged out.');
    // Add actual logout logic here
  }
});
