'use strict';

/* Constants */

const nav = document.querySelector('nav');
const navButtons = document.querySelectorAll('.navButton');
const splash = document.querySelector('#splash');

/* Functions */

const scrollToSection = (section) => {
    section?.scrollIntoView({ block: 'start' });
};

/* Observers */

const toggleNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const isVisible = entry.isIntersecting;
        nav.style.opacity = isVisible ? '0' : '1';
        nav.style.visibility = isVisible ? 'hidden' : 'visible';
        navButtons.forEach(button => { button.disabled = isVisible });
    });
}, { threshold: 0.1 });


/* Initialisation */

const init = () => {
    // Hide navbar when splash screen is visible
    if (splash) toggleNav.observe(splash);
    // Scroll to section for navbar buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            scrollToSection(document.querySelector(button.getAttribute('data-target')));
        });
    });
};

document.addEventListener('DOMContentLoaded', init);
