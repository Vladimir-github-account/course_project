'use strict';
import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';
import 'spin.js/spin.css';
import {
  CLIENTS_JSON_URL,
  EMPLOYEES_JSON_URl,
}                          from './constants';
import {
  navToggle,
  teamContainer,
  navLinks,
  clientsContainer,
  works,
  openedWork,
  closeWorkButton,
}                          from './controls';
import employeesListLoader from './components/EmployeeListLoader';
import SliderLoader        from './components/SliderLoader';
import {
  openedWorkMouseUpHandler,
  openWork,
  navLinkClickHandler,
  closeWork,
  closeNavigation,
  checkScroll
}                          from './pageFunctional';

window.onload = onloadHandler;

function onloadHandler() {
  checkScroll();
  new employeesListLoader(teamContainer, EMPLOYEES_JSON_URl);
  new SliderLoader(clientsContainer, CLIENTS_JSON_URL);
}

//Open work
works.forEach(work => work.onclick = openWork);

//Close work
openedWork.onmouseup = openedWorkMouseUpHandler;
closeWorkButton.onclick = closeWork;

// Mobile Navigation
navLinks.forEach(navLink =>
    navLink.onclick = navLinkClickHandler
);
navToggle.onclick = closeNavigation;

// Page Scroll
window.onscroll = checkScroll;



