'use strict';

/* Constants */

const nav = document.querySelector('nav');
const navButtons = document.querySelectorAll('.navButton');
const splash = document.querySelector('#splash');

/* Functions */

const scrollToSection = (button) => {
    button.addEventListener('click', () => {
        document.querySelector(button.dataset.target)?.scrollIntoView();
        button.blur();
    });
};

/* Observers */

const toggleNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        nav.classList.toggle('navDisabled', entry.isIntersecting);
    });
}, { threshold: 0.1 });

/* Initialisation */

const init = () => {
    // Hide navbar when splash screen is visible
    if (splash) toggleNav.observe(splash);
    // Scroll to section functionality for navbar buttons
    navButtons.forEach(button => scrollToSection(button));
};

document.addEventListener('DOMContentLoaded', init);
