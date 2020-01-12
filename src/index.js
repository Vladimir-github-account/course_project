'use strict';

import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';
import {
  HEADER_HEIGHT,
  CLIENTS_JSON_URL,
  EMPLOYEES_JSON_URl,
}                          from './constants';
import {
  header,
  navToggle,
  nav,
  teamContainer,
  navLinks,
  clientsContainer,
  works,
  openedWork,
  openedWorkImage,
  closeWorkButton,
}                          from './controls';
import appendClients       from './assets/js/viewmodel/appendClients.js';
import employeesListLoader from './components/EmployeeListLoader';

window.onload = onloadHandler;

function onloadHandler() {
  checkScroll();
  employeesListLoader(teamContainer, EMPLOYEES_JSON_URl);
  appendClients(clientsContainer, CLIENTS_JSON_URL);
}

//Open work
works.forEach(work => work.onclick = openWork);

function openWork( e ) {
  if (e.currentTarget.childNodes[0].naturalWidth) {
    openedWorkImage.src = e.currentTarget.childNodes[0].src;
    openedWork.classList.add('opened');
  }
}

//Close work
openedWork.onmouseup = openedWorkMouseUpHandler;
closeWorkButton.onclick = closeWork;

function openedWorkMouseUpHandler( e ) {
  if (e.target === openedWork) {
    closeWork();
  }
}

function closeWork() {
  if (openedWork.classList.contains('opened')) {
    openedWork.classList.remove('opened');
  }
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


