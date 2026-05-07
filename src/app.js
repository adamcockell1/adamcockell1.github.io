'use strict';

/* Constants */

const nav = document.querySelector('nav');
const navButtons = document.querySelectorAll('.navButton');
const splash = document.querySelector('#splash');
const fin = document.querySelector('#fin');

/* Functions */

const scrollToTop = () => {
    window.scrollTo({ top: 0 });
};

/* Observers */

const toggleNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const isVisible = entry.isIntersecting;
        nav.style.opacity = isVisible ? '0' : '1';
        nav.style.visibility = isVisible ? 'hidden' : 'visible';
        navButtons.forEach(btn => { btn.disabled = isVisible });
    });
}, { threshold: 0.1 });


/* Initialisation */

const init = () => {
    if (splash) toggleNav.observe(splash);
    fin?.addEventListener('click', scrollToTop);
};

document.addEventListener('DOMContentLoaded', init);
