// AOS (Animate On Scroll) Initialization
AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

// Mobile Navigation Toggle
const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
const expanded = toggle.getAttribute('aria-expanded') === 'true';
toggle.setAttribute('aria-expanded', !expanded);
links.classList.toggle('active');
});

toggle.addEventListener('keydown', (e) => {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
toggle.click();
}
});

// Theme Toggle (Dark Mode by Default)
const toggleButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Apply saved theme or default to dark
if (savedTheme === 'light') {
document.body.classList.remove('dark-mode');
toggleButton.textContent = '🌙 Dark Mode';
} else {

// Default to dark mode
document.body.classList.add('dark-mode');
toggleButton.textContent = '☀️ Light Mode';
localStorage.setItem('theme', 'dark'); // Save default if not set
}

toggleButton.addEventListener('click', () => {
const isCurrentlyDark = document.body.classList.contains('dark-mode');

if (isCurrentlyDark) {
document.body.classList.remove('dark-mode');
toggleButton.textContent = '🌙 Dark Mode';
localStorage.setItem('theme', 'light');
} else {
document.body.classList.add('dark-mode');
toggleButton.textContent = '☀️ Light Mode';
localStorage.setItem('theme', 'dark');
}
});

// Typed.js Animation for Job Titles
var typed = new Typed('#animated-title', {
strings: [
'Business Analyst',
'Financial Analyst',
'Data Analyst',
'Product Analyst',
'Associate Consultant'
],
typeSpeed: 60,
backSpeed: 30,
backDelay: 3000,
loop: true
});

// Read More / Read Less Toggle
function toggleReadMore(button) {
const fullText = button.previousElementSibling;
const shortText = fullText.previousElementSibling;

if (fullText.style.display === "block") {
fullText.style.display = "none";
shortText.style.display = "block";
button.textContent = "Read More";
} else {
fullText.style.display = "block";
shortText.style.display = "none";
button.textContent = "Read Less";
}
}

// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
e.preventDefault();
document.getElementById('form-status').textContent = "Thanks for reaching out! I’ll reply soon.";
this.reset();
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
e.preventDefault();
status.textContent = "Thanks for reaching out! I’ll reply soon.";
form.querySelector('button').disabled = true;

setTimeout(() => {
form.reset();
form.querySelector('button').disabled = false;
}, 2000);
});

// Back to Top Button Functionality
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Debounced Scroll Event for Back to Top Button
let scrollTimeout;
window.addEventListener('scroll', () => {
clearTimeout(scrollTimeout);
scrollTimeout = setTimeout(() => {
backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
}, 100);
});
