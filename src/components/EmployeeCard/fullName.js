/**
 *
 * @param {string} name
 * @returns {HTMLHeadingElement}
 */
export default function createPersonFullNameElem( {name} ) {
  const personFullName = document.createElement('h3');
  personFullName.innerText = name || 'ᅠ';
  personFullName.setAttribute('title', name || 'Please reload the page');
  return personFullName;
}