export const EMPLOYEES_JSON_URl = './data/employees.json';
export const CLIENTS_JSON_URL = './data/clients.json';
export const HEADER_HEIGHT = 74;
export const LINKS_ICON_MAP = new Map();
LINKS_ICON_MAP.set('www.facebook.com', ['fab', 'fa-facebook']);
LINKS_ICON_MAP.set('twitter.com', ['fab', 'fa-twitter']);
LINKS_ICON_MAP.set('www.linkedin.com', ['fab', 'fa-linkedin']);
LINKS_ICON_MAP.set('www.google-plus.com', ['fab', 'fa-google-plus']);
LINKS_ICON_MAP.set('dribbble.com', ['fab', 'fa-dribbble']);
LINKS_ICON_MAP.set('www.instagram.com', ['fab', 'fa-instagram']);
export const spinnerOptions = {
  lines: 8, // The number of lines to draw
  length: 0, // The length of each line
  width: 52, // The line thickness
  radius: 84, // The radius of the inner circle
  scale: 0.3, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#e84545', // CSS color or array of colors
  fadeColor: 'rgba(0,0,0,0)', // CSS color or array of colors
  speed: 0.6, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  zIndex: 50, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 5px black', // Box-shadow for the lines
  position: 'absolute' // Element positioning
};