'use strict';

import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';
import Slider from './assets/js/slider.js';

const header = document.getElementById('pageHeader');
const navToggle = document.querySelector('#pageHeader .navToggle');
const nav = document.querySelector('#pageHeader .pageNavigation');
const teamContainer = document.querySelector('div.team');
const facebookCheck = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;
const twitterCheck = /(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:[\w\-]*\/)*([\w\-]*)/;
const linkedinCheck = /(?:http:\/\/)?(?:www\.)?linkedin\.com\/(?:(?:\w)*#!\/)?(?:[\w\-]*\/)*([\w\-]*)/;

const clients = [
  {
    photo: './assets/images/testimonial-1.jpg',
    comment: '"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam..."',
    cite: 'Susan Sims, Interaction Designer at XYZ'
  },
  {
    photo: './assets/images/testimonial-2.jpg',
    comment: '"Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur... "',
    cite: 'Susan Sims, Interaction Designer at XYZ'
  },
];

navToggle.onclick = onNavToggleClick;
let isDisplayed = false;

function onNavToggleClick() {
  if (isDisplayed) {
    nav.classList.remove('displayed');
  } else {
    nav.classList.add('displayed');
  }
  isDisplayed = !isDisplayed;
}

window.onscroll = checkScroll;

function checkScroll() {
  let scroll = window.scrollY;
  if (scroll >= 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

window.onload = onloadHandler;

function onloadHandler() {
  checkScroll();
  createTeam();
  createClients();
}

async function createTeam() {
  try {
    const response = await fetch('./data/employees.json');
    const team = await response.json();
    console.log(team);
    team.forEach(elem => {
          console.log(elem);
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
    if (facebookCheck.test(elem)) {
      personContacts.appendChild(
          createPersonContactsListItemElem(elem, 'facebook'));
      return false;
    } else {
      if (twitterCheck.test(elem)) {
        personContacts.appendChild(
            createPersonContactsListItemElem(elem, 'twitter'));
      } else if (linkedinCheck.test(elem)) {
        personContacts.appendChild(
            createPersonContactsListItemElem(elem, 'linkedin'));
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

/*CREATE CLIENTS*/
function createClients() {
  const slider = new Slider(clients).render();
  document.querySelector('div.clients').appendChild(slider);
}

