'use strict';

import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';

const header = document.getElementById('pageHeader');
const navToggle = document.querySelector('#pageHeader .navToggle');
const nav = document.querySelector('#pageHeader .pageNavigation');
navToggle.onclick = onNavToggleClick;
let isDisplayed = false;
function onNavToggleClick(){

  if (isDisplayed){
    nav.classList.remove('displayed');
  } else {
    nav.classList.add('displayed');

  }
  isDisplayed = !isDisplayed;

}

window.onscroll = checkScroll;

function checkScroll(){
  let scroll = window.scrollY;
  if (scroll >= 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

window.onload = onloadHandler;

function onloadHandler() {
  console.log('work');
}