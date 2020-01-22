import './styles.scss';

import createPersonPhotoElem       from './picture.js';
import createPersonFullNameElem    from './fullName.js';
import createPersonYearsOfLifeElem from './yearsOfLife.js';
import createPersonDescriptionElem from './description.js';
import createPersonContactsElem    from './contacts.js';

/**
 *
 * @param {Object} scientist
 * @returns {HTMLDivElement}
 */
export default function( scientist ) {
  const personWrapper = document.createElement('div');

  const person = document.createElement('div');
  person.classList.add('person');
  person.appendChild(createPersonPhotoElem(scientist));
  person.appendChild(createPersonFullNameElem(scientist));
  person.appendChild(createPersonYearsOfLifeElem(scientist));
  person.appendChild(createPersonDescriptionElem(scientist));
  person.appendChild(createPersonContactsElem(scientist));

  personWrapper.appendChild(person);
  personWrapper.classList.add('personWrapper');
  return personWrapper;
}



