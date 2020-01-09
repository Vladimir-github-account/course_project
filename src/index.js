'use strict';

import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';
import {
  Slider,
  FACEBOOK_CHECK,
  TWITTER_CHECK,
  LINKEDIN_CHECK,
  HEADER_HEIGHT,
  CLIENTS
} from './assets/js/model/index.js';
import {
  header,
  navToggle,
  nav,
  teamContainer,
  navLinks,
  clients
} from './assets/js/viewmodel/controls.js';

window.onload = onloadHandler;

function onloadHandler() {
  checkScroll();
  createTeam();
  createClients();
}

// Mobile Navigation
let isDisplayed = false;
navLinks.forEach(navLink =>
    navLink.onclick = navLinkClickHandler
);

function navLinkClickHandler( e ) {
  e.preventDefault();
  const element = document.querySelector(this.getAttribute('href'));
  scrollTo(element.offsetTop - HEADER_HEIGHT);
  closeNavigation();
}

navToggle.onclick = closeNavigation;

function closeNavigation() {
  if (isDisplayed) {
    nav.classList.remove('displayed');
  } else {
    nav.classList.add('displayed');
  }
  isDisplayed = !isDisplayed;
}

function scrollTo( to ) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: to
  });
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

// Create Team
async function createTeam() {
  try {
    const response = await fetch('./data/employees.json');
    const team = await response.json();
    team.forEach(elem => {
          teamContainer.appendChild(createTeamPersonElem(elem));
        }
    );
    return teamContainer;
  } catch(e) {
    console.error(e);
  }
}

function createTeamPersonElem( employee ) {
  const personWrapper = document.createElement('div');
  const person = document.createElement('div');
  person.classList.add('person');
  person.appendChild(createPersonPhotoElem(employee));
  person.appendChild(createPersonFullNameElem(employee));
  person.appendChild(createPersonPositionElem(employee));
  person.appendChild(createPersonDescriptionElem(employee));
  person.appendChild(createPersonContactsElem(employee));
  personWrapper.appendChild(person);
  return personWrapper;
}

function createPersonPhotoElem( employee ) {
  const personPhoto = new Image();
  personPhoto.src = employee.profilePicture;
  personPhoto.alt = 'photo';
  return personPhoto;
}

function createPersonFullNameElem( employee ) {
  const personFullName = document.createElement('h3');
  personFullName.innerText = employee.name;
  return personFullName;
}

function createPersonPositionElem( employee ) {
  const personPosition = document.createElement('h4');
  personPosition.innerText = employee.position;
  return personPosition;
}

function createPersonDescriptionElem( employee ) {
  const personDescription = document.createElement('p');
  personDescription.innerText = employee.description;
  return personDescription;
}

function createPersonContactsElem( employee ) {
  const personContacts = document.createElement('ul');
  employee.contacts.forEach(elem => {
    if (FACEBOOK_CHECK.test(elem)) {
      personContacts.appendChild(
          createPersonContactsListItemElem(elem, 'facebook'));
    } else {
      if (TWITTER_CHECK.test(elem)) {
        personContacts.appendChild(
            createPersonContactsListItemElem(elem, 'twitter'));
      } else {
        if (LINKEDIN_CHECK.test(elem)) {
          personContacts.appendChild(
              createPersonContactsListItemElem(elem, 'linkedin'));
        }
      }
    }
  });
  return personContacts;
}

function createPersonContactsListItemElem( link, social ) {
  const personContactsListItem = document.createElement('li');
  personContactsListItem.appendChild(createPersonContactLinkElem(link, social));
  return personContactsListItem;
}

function createPersonContactLinkElem( link, social ) {
  const personContactLink = document.createElement('a');
  personContactLink.href = link;
  personContactLink.target = '_blank';
  personContactLink.appendChild(createPersonContactIconElem(social));
  return personContactLink;
}

function createPersonContactIconElem( social ) {
  const personContactIcon = document.createElement('i');
  personContactIcon.classList.add('fab');
  switch(social) {
    case 'facebook':
      personContactIcon.classList.add('fa-facebook');
      return personContactIcon;
    case 'twitter':
      personContactIcon.classList.add('fa-twitter');
      return personContactIcon;
    case 'linkedin':
      personContactIcon.classList.add('fa-linkedin');
      return personContactIcon;
  }
}

//Create Clients
function createClients() {
  const slider = new Slider(CLIENTS).render();
  clients.appendChild(slider);
}

