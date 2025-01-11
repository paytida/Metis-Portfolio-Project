// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Change button icons
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});

// Dropdown Menu Toggle
const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior

  const dropdown = this.closest('.dropdown');

  // Toggle active class to show or hide the dropdown
  dropdown.classList.toggle('active');
});
