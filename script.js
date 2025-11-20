// Burger menu toggle
const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');
const aboutSection = document.getElementById('about');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Show/hide burger menu based on scroll position
function handleScroll() {
    if (aboutSection) {
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const nav = document.querySelector('nav');

        // If we've scrolled past the header (about section is at or above viewport top)
        if (aboutPosition <= 100) {
            nav.classList.add('burger-mode');
        } else {
            nav.classList.remove('burger-mode');
            // Close menu if it's open when switching back
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
}

// Listen to scroll events
window.addEventListener('scroll', handleScroll);
// Check on page load
handleScroll();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
