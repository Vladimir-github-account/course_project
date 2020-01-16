import createPersonContactsListItemElem from './contactsListItem.js';

/**
 *
 * @param {Array <string>} contacts
 * @returns {HTMLUListElement}
 */
export default function createPersonContactsElem( {contacts} ) {
  const personContacts = document.createElement('ul');
  contacts.forEach(link =>
      personContacts.appendChild(
          createPersonContactsListItemElem(link)
      ));
  return personContacts;
}