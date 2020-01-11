/**
 *
 * @param {string} src
 * @param {string} backupSrc
 * @returns {HTMLImageElement}
 */
const createImage = ( src, backupSrc ) => {
  const img = new Image();
  img.src = src;
  img.onerror = () => { ///////
    img.src = backupSrc; //add if no image logic
  };
  return img;
};

export default createImage;