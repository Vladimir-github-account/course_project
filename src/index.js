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
  scientistsContainer,
  navLinks,
  clientsContainer,
  events,
  openedEvent,
  closeWorkButton,
  getStartedButton
}                          from './controls';
import scientistListLoader from './components/ScientistListLoader';
import SliderLoader        from './components/SliderLoader';
import {
  openedWorkMouseUpHandler,
  openWork,
  anchorLinkClickHandler,
  navLinkClickHandler,
  closeWork,
  closeNavigation,
  checkScroll
}                          from './pageFunctional';

window.onload = onloadHandler;

function onloadHandler() {
  checkScroll();
  new scientistListLoader(scientistsContainer, EMPLOYEES_JSON_URl);
  new SliderLoader(clientsContainer, CLIENTS_JSON_URL);
}

//Open work
events.forEach(work => work.onclick = openWork);

//Close work
openedEvent.onmouseup = openedWorkMouseUpHandler;
closeWorkButton.onclick = closeWork;

// Mobile Navigation
navLinks.forEach(navLink =>
    navLink.onclick = navLinkClickHandler
);
navToggle.onclick = closeNavigation;

// Get started button

getStartedButton.onclick = anchorLinkClickHandler;

// Page Scroll
window.onscroll = checkScroll;



