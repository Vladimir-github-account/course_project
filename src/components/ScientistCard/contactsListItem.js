import createContactLink from '../ContactLink';

/**
 *
 * @param {string} link
 * @returns {HTMLLIElement}
 */
export default function createPersonContactsListItemElem( link ) {
  const personContactsListItem = document.createElement('li');
  personContactsListItem.appendChild(createContactLink(link, []));
  return personContactsListItem;
}