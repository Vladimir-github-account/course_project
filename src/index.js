'use strict';

import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';
import {
  HEADER_HEIGHT,
  CLIENTS_JSON,
  EMPLOYEES_JSON,
} from './assets/js/model/index.js';
import {
  header,
  navToggle,
  nav,
  teamContainer,
  navLinks,
  clientsContainer,
} from './assets/js/viewmodel/controls.js';

import appendTeam from './assets/js/viewmodel/appendTeam.js';
import appendClients from './assets/js/viewmodel/appendClients.js';


window.onload = onloadHandler;

function onloadHandler() {
  checkScroll();
  appendTeam(teamContainer, EMPLOYEES_JSON);
  appendClients(clientsContainer, CLIENTS_JSON);
}

// Mobile Navigation
let isDisplayed = false;
navLinks.forEach(navLink =>
  navLink.onclick = navLinkClickHandler
);
navToggle.onclick = closeNavigation;

function navLinkClickHandler( e ) {
  e.preventDefault();
  const element = document.querySelector(this.getAttribute('href'));
  scrollTo(element.offsetTop - HEADER_HEIGHT);
  closeNavigation();
}

function scrollTo( to ) {
  window.scroll({
                  behavior: 'smooth',
                  left: 0,
                  top: to
                });
}

function closeNavigation() {
  if (isDisplayed) {
    nav.classList.remove('displayed');
  } else {
    nav.classList.add('displayed');
  }
  isDisplayed = !isDisplayed;
}

// Page Scroll
window.onscroll = checkScroll;

function checkScroll() {
  let scroll = window.scrollY;
  if (scroll >= 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}



