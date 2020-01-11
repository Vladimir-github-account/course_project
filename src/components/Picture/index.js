import {createImage} from '../../utils';

/**
 *
 * @param {(!Array<string> | !string)} className
 * @param {string} src
 * @param {string} alt
 * @param {string} backupSrc
 * @returns {HTMLImageElement}
 */
export default function( className, src, alt, backupSrc ) {
  const img = createImage(src, backupSrc);
  img.classList.add(...className);
  img.setAttribute('alt', alt);
  return img;
}