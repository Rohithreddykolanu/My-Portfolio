// AOS (Animate On Scroll) Initialization
AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

// Scroll-based active tracker
window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.offsetHeight;
if (scrollY >= sectionTop - 60) {
current = section.getAttribute("id");
}
});

navLinks.forEach(link => {
link.classList.remove("active");
if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}
});
});


// Hero Section
// Typed.js Animation for Job Titles
var typed = new Typed('#animated-title', {
strings: [
'Business Analyst',
'Financial Analyst',
'Data Analyst',
'Product Analyst'
],
typeSpeed: 60,
backSpeed: 30,
backDelay: 3000,
loop: true
});


// Skills Section
// Skills Carousel Functionality
function scrollCarousel(direction) {
const carousel = document.querySelector('.skills-carousel');
const cardWidth = carousel.querySelector('.skill-card').offsetWidth + 30; // card + gap
carousel.scrollBy({
left: direction * cardWidth * 1.05, // scroll by 1 card width
behavior: 'smooth'
});
}


// Testimonials Section
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


// Contact Section
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