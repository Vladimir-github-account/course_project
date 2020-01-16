/**
 *
 * @param {string} position
 * @returns {HTMLHeadingElement}
 */
export default function createPersonPositionElem( {position} ) {
  const personPosition = document.createElement('h4');
  personPosition.innerText = position || 'Company employee';
  personPosition.setAttribute('title', position || 'Company employee');
  return personPosition;
}