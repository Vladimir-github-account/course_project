/**
 *
 * @param {string} yearsOfLife
 * @returns {HTMLHeadingElement}
 */
export default function createPersonYearsOfLifeElem( {position: yearsOfLife} ) {
  const personPosition = document.createElement('h4');
  personPosition.innerText = yearsOfLife || '';
  personPosition.setAttribute('title', yearsOfLife || '');
  return personPosition;
}