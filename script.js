const toggleSwitch = document.querySelector('input[type="checkbox"');
const nav = document.getElementById('nav'),
  toggleIcon = document.getElementById('toggle-icon');
(image1 = document.getElementById('image1')),
  (image2 = document.getElementById('image2')),
  (image3 = document.getElementById('image3')),
  (textBox = document.getElementById('text-box'));

// dark or light images
function imageMode(color) {
  image1.src = `./img/undraw_proud_coder_${color}.svg`;
  image2.src = `./img/undraw_feeling_proud_${color}.svg`;
  image3.src = `./img/undraw_conceptual_idea_${color}.svg`;
}

// dark mode styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

// light mode styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

// switch theme
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
