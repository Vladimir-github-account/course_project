'use strict';

import './styles.scss';

export default class Slider {
  /**
   *
   * @param {Array<object>} clients
   * */
  constructor( clients ) {
    if (clients.length) {
      this._clients = clients;
      this._currentIndex = 0;
      this._nextSlideIndex = null;
      this._interval = null;
      this.changeSlide = this.changeSlide.bind(this);
    } else {
      throw new Error();
    }
  }

  get interval() {
    return this._interval;
  }

  set interval( value ) {
    this._interval = value;
  }

  get nextSlideIndex() {
    return this._nextSlideIndex;
  }

  /**
   *
   * @param {number} value
   */
  set nextSlideIndex( value ) {
    if (value < 0 || value > this.clients.length - 1) {
      throw new RangeError();
    }
    this._nextSlideIndex = value;
  }

  get clients() {
    return this._clients;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  /**
   *
   * @param {number} value
   * */
  set currentIndex( value ) {
    if (isNaN(value)) {
      throw new TypeError();
    }
    if (value < 0 || value > this._clients.length - 1) {
      throw new RangeError();
    }
    this._currentIndex = value;
  }

  /**
   *
   * @param {number} index
   * @param {number} length
   * @return {number} - next slide index in carousel
   * @static
   */
  static getNextIndex( index, length ) {
    if (index < 0 || index > length - 1) {
      throw new RangeError();
    }
    return (index + 1) % length;
  }

  autoChange() {
    this.interval = setInterval(() => {
      this.nextSlideIndex = Slider.getNextIndex(this.currentIndex,
          this.clients.length);
      this.nextSlide(this.nextSlideIndex);
    }, 12000);
  }

  /**
   *
   * @param {number} nextSlideIndex
   */
  nextSlide( nextSlideIndex ) {
    const newActiveSliderMenuItem = document.querySelector(
        `[data-slideid="${nextSlideIndex}"]`);
    const activeSliderMenuItem = document.querySelector('.active');
    const currentSlide = document.querySelector('.currentSlide');
    const newCurrentSlide = document.getElementById(
        `slide${nextSlideIndex}`);

    newActiveSliderMenuItem.classList.add('active');
    this.currentIndex = nextSlideIndex;
    activeSliderMenuItem.classList.remove('active');
    currentSlide.classList.remove('currentSlide');
    newCurrentSlide.classList.add('currentSlide');
  }

  changeSlide( e ) {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = 0;
    }
    const newActiveSliderMenuItem = e.target;
    if (+newActiveSliderMenuItem.dataset.slideid !== this.currentIndex) {
      const activeSliderMenuItem = document.querySelector('.active');
      const currentSlide = document.querySelector('.currentSlide');
      const newCurrentSlide = document.getElementById(
          `slide${e.target.dataset.slideid}`);

      newActiveSliderMenuItem.classList.add('active');
      this.currentIndex = +newActiveSliderMenuItem.dataset.slideid;
      activeSliderMenuItem.classList.remove('active');
      currentSlide.classList.remove('currentSlide');
      newCurrentSlide.classList.add('currentSlide');

    }
  }

  /**
   *
   * @param {HTMLImageElement} image
   * @returns {boolean}
   */
  static isCorrectImage( image ) {
    if (image instanceof HTMLImageElement) {
      const imageProportions = image.width / image.height;
      return (imageProportions * 1.3) > (997 / 500);
    } else {
      throw new TypeError();
    }
  }

  /*----------------------------render slider menu----------------------------*/
  renderSlideMenuListItem( index ) {
    const slideMenuListItem = document.createElement('li');
    if (this.currentIndex === index) {
      slideMenuListItem.classList.add('active');
    }
    slideMenuListItem.setAttribute('data-slideid', index);
    slideMenuListItem.addEventListener('click', this.changeSlide);
    return slideMenuListItem;
  }

  renderSlideMenu( clients ) {
    const sliderMenu = document.createElement('ul');
    sliderMenu.classList.add('sliderMenu');
    clients.forEach(
        ( elem, index ) => sliderMenu.appendChild(
            this.renderSlideMenuListItem(index)));
    return sliderMenu;
  }

  /*----------------------------render slide list-----------------------------*/
  renderClientCite( cite ) {
    const clientCite = document.createElement('cite');
    clientCite.innerText = cite;
    return clientCite;
  }

  renderClientComment( comment ) {
    const clientComment = document.createElement('p');
    clientComment.innerText = comment;
    return clientComment;
  }

  renderClientCommentWrapper( comment ) {
    const clientPhotoWrapper = document.createElement('div');
    clientPhotoWrapper.appendChild(this.renderClientComment(comment));
    return clientPhotoWrapper;
  }

  renderBlockquote( comment, cite ) {
    const blockquote = document.createElement('blockquote');
    blockquote.appendChild(this.renderClientCommentWrapper(comment));
    blockquote.appendChild(this.renderClientCite(cite));
    return blockquote;
  }

  renderClientPhoto( photo ) {

    const clientPhoto = new Image();
    clientPhoto.src = photo;
    clientPhoto.onload = () => Slider.isCorrectImage(clientPhoto)
        ? clientPhoto.classList.add('correctImage')
        : clientPhoto.classList.add('height100');
    clientPhoto.alt = 'client photo';
    return clientPhoto;
  }

  renderClientPhotoWrapper( photo ) {
    const clientPhotoWrapper = document.createElement('div');
    clientPhotoWrapper.classList.add('clientPhotoWrapper');
    clientPhotoWrapper.appendChild(this.renderClientPhoto(photo));
    return clientPhotoWrapper;
  }

  renderSlide( {photo, comment, cite}, id ) {
    const slide = document.createElement('li');
    slide.setAttribute('id', `slide${id}`);
    slide.classList.add('slide');
    if (id === this.currentIndex) {
      slide.classList.add('currentSlide');
    }
    slide.appendChild(this.renderClientPhotoWrapper(photo));
    slide.appendChild(this.renderBlockquote(comment, cite));
    return slide;
  }

  renderSlideList( clients ) {
    const slideList = document.createElement('ul');
    slideList.classList.add('slideList');
    clients.forEach(( elem, index ) => slideList.appendChild(
        this.renderSlide(elem, index)));
    return slideList;
  }

  render() {
    const clientsContainer = document.createElement('div');
    clientsContainer.classList.add('clientsContainer');
    clientsContainer.appendChild(this.renderSlideList(this.clients));
    clientsContainer.appendChild(this.renderSlideMenu(this.clients));
    return clientsContainer;
  }
}