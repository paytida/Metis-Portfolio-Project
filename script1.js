// Select the dark mode toggle button
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Add a click event listener
darkModeToggle.addEventListener("click", () => {
  // Toggle the dark-mode class on the body element
  document.body.classList.toggle("dark-mode");

  // Save the dark mode preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    darkModeToggle.textContent = '☀️';  // Correct variable name
  } else {
    localStorage.setItem("darkMode", "disabled");
    darkModeToggle.textContent = '🌙';  // Correct variable name
  }
});

// Check localStorage for dark mode preference on page load
const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeToggle.textContent = '☀️';  // Correct variable name
}
