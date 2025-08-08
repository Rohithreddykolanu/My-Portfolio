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
// Skills Carousel with Dots
const carousel = document.querySelector('.skills-carousel');
const cards = carousel.querySelectorAll('.skill-card');
const dotsContainer = document.querySelector('.carousel-dots');

function getCardsPerPage() {
return window.innerWidth <= 768 ? 1 : 4; // Mobile = 1, Desktop = 4
}

function createDots() {
dotsContainer.innerHTML = '';
const cardsPerPage = getCardsPerPage();
const totalDots = Math.ceil(cards.length / cardsPerPage);

for (let i = 0; i < totalDots; i++) {
const dot = document.createElement('div');
dot.classList.add('carousel-dot');
if (i === 0) dot.classList.add('active');
dot.addEventListener('click', () => scrollToPage(i));
dotsContainer.appendChild(dot);
}
}

function scrollToPage(pageIndex) {
const cardsPerPage = getCardsPerPage();
const cardWidth = carousel.querySelector('.skill-card');
carousel.scrollTo({
left: pageIndex * cardsPerPage * cardWidth,
behavior: 'smooth'
});
updateActiveDot(pageIndex);
}

function updateActiveDot(index) {
document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
dot.classList.toggle('active', i === index);
});
}

// Track scroll to update active dot
carousel.addEventListener('scroll', () => {
const cardWidth = carousel.querySelector('.skill-card').offsetWidth + 30;
const cardsPerPage = getCardsPerPage();
const index = Math.round(carousel.scrollLeft / (cardsPerPage * cardWidth));
updateActiveDot(index);
});

window.addEventListener('resize', createDots);

// Init
createDots();


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