// Navigation Active Highlight (simple)
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#ff9800";
    }
});

// Alert Example Button
function showAlert() {
    alert("Welcome to MSSK EXIM!");
}

// Contact Form Submission
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message Sent Successfully!");
    });
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
