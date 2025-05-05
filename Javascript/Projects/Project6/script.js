const toggleButton = document.getElementById('toggleMode');
const body = document.body;

// Check stored theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Save the preference
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
