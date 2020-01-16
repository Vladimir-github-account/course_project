import './styles.scss';

import createPersonPhotoElem       from './picture.js';
import createPersonFullNameElem    from './fullName.js';
import createPersonPositionElem    from './position.js';
import createPersonDescriptionElem from './description.js';
import createPersonContactsElem    from './contacts.js';

/**
 *
 * @param {Object} employee
 * @returns {HTMLDivElement}
 */
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



