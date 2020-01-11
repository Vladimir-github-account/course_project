/**
 *
 * @param {string} url
 * @param {object?} options
 * @returns {Promise<any>}
 */
const loadJson = async( url, options = {} ) => {
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch(e) {
    console.error(e);
    throw e;
  }
};

export default loadJson;