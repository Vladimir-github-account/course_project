import './styles.scss';
import createContactLink from '../ContactLink';

import createPersonPhotoElem from './picture.js';

export default function( employee ) {
  const personWrapper = document.createElement('div');
  const person = document.createElement('div');
  person.classList.add('person');
  person.appendChild(createPersonPhotoElem(employee));
  person.appendChild(createPersonFullNameElem(employee));
  person.appendChild(createPersonPositionElem(employee));
  person.appendChild(createPersonDescriptionElem(employee));
  person.appendChild(createPersonContactsElem(employee));
  personWrapper.appendChild(person);
  personWrapper.classList.add('personWrapper');
  return personWrapper;
}

function createPersonFullNameElem( {name} ) {
  const personFullName = document.createElement('h3');
  personFullName.innerText = name || 'ᅠ';
  personFullName.setAttribute('title', name || 'Please reload the page');
  return personFullName;
}

function createPersonPositionElem( {position} ) {
  const personPosition = document.createElement('h4');
  personPosition.innerText = position || 'Company employee';
  personPosition.setAttribute('title', position || 'Company employee');
  return personPosition;
}

function createPersonDescriptionElem( {description} ) {
  const personDescription = document.createElement('p');
  personDescription.innerText = description || 'Wonderful employee';
  personDescription.setAttribute('title', description || 'Wonderful employee');
  return personDescription;
}

function createPersonContactsElem( {contacts} ) {
  const personContacts = document.createElement('ul');
  contacts.forEach(link =>
      personContacts.appendChild(
          createPersonContactsListItemElem(link)
      ));
  return personContacts;
}

function createPersonContactsListItemElem( link ) {
  const personContactsListItem = document.createElement('li');
  personContactsListItem.appendChild(createContactLink(link, []));
  return personContactsListItem;
}