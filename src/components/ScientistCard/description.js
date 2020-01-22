/**
 *
 * @param {string} description
 * @returns {HTMLParagraphElement}
 */
export default function createPersonDescriptionElem( {description} ) {
  const personDescription = document.createElement('p');
  personDescription.innerText = description || 'Wonderful employee';
  personDescription.setAttribute('title', description || 'Wonderful employee');
  return personDescription;
}