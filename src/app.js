'use strict';

const navBar = document.querySelector('.navBar');
const navButtons = document.getElementsByClassName('navButton');
const main = document.querySelector('.main');

/* Settings functions */

let filters = ['invert(0)', 'grayscale(0)'];

function toggleTheme() {
    if (filters.includes('invert(1)')) {
        filters[0] = 'invert(0)';
    } else {
        filters[0] = 'invert(1)';
    }
    document.documentElement.style.filter = filters.join(' ');
}

function toggleColor() {
    if (filters.includes('grayscale(1)')) {
        filters[1] = 'grayscale(0)';
    } else {
        filters[1] = 'grayscale(1)';
    }
    document.documentElement.style.filter = filters.join(' ');
}

/* Scroll functions */

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("scroll", () => {

    if (window.scrollY <= 1000) {
        // Disable the navbar on the splash screen
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].disabled = true;
        }
        navBar.style.opacity = "0";
    } else {
        // Re-enable the navbar after scrolling past the splash screen
        navBar.style.opacity = "1";
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].disabled = false;
        }
    }
});