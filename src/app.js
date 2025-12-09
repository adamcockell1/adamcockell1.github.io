'use strict';

const navBar = document.querySelector('.navBar');
const navButtons = document.getElementsByClassName('navButton');
const main = document.querySelector('.main');

/* Theme and color button functions */

let filters = ['invert(0)', 'grayscale(0)'];

function theme() {
    if (filters.includes('invert(1)')) {
        filters[0] = 'invert(0)';
    } else {
        filters[0] = 'invert(1)';
    }
    // Overwrite currently applied filters with what is stored in the filters list
    document.documentElement.style.filter = filters.join(' ');
}

function color() {
    if (filters.includes('grayscale(1)')) {
        filters[1] = 'grayscale(0)';
    } else {
        filters[1] = 'grayscale(1)';
    }
    // Overwrite currently applied filters with what is stored in the filters list
    document.documentElement.style.filter = filters.join(' ');
}

/* Scroll button functions */

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
