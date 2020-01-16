import createSlider     from '../Slider';
import {loadJson}       from '../../utils';
import {Spinner}        from 'spin.js';
import {spinnerOptions} from '../../constants/index.js';

export default class SliderLoader {
  constructor( sliderContainer, url ) {
    this._sliderContainer = sliderContainer;
    this._clients = null;
    this._error = null;
    this._isFetching = false;
    this.onload = null;
    this._loadingElem = null;
    this.loadSlider(url);
  }

  get loadingElem() {
    return this._loadingElem;
  }

  set loadingElem( value ) {
    if (value instanceof HTMLElement) {
      this._loadingElem = value;
    } else throw new TypeError();
  }

  get sliderContainer() {
    return this._sliderContainer;
  }

  get clients() {
    return this._clients;
  }

  set clients( value ) {
    this._clients = value;
  }

  get isFetching() {
    return this._isFetching;
  }

  set isFetching( value ) {
    if (typeof value !== 'boolean') {
      throw new TypeError();
    }
    this._isFetching = value;
    if (!value && !this.error && typeof this.onload === 'function') {
      this.onload();
    }
  }

  get error() {
    return this._error;
  }

  set error( value ) {
    if (value instanceof Error) {
      this._error = value;
      this.isFetching = false;
      if (typeof this.onerror === 'function') {
        this.onerror(new Event('error'));
      }
    } else {
      throw new TypeError();
    }
  }

  async setClients( url ) {
    try {
      const clients = await loadJson(url);
      if (Array.isArray(clients)) {
        this.clients = clients;
        this._error = null;
        this.isFetching = false;
      } else {
        throw new TypeError('Wrong data type');
      }
    } catch(e) {
      console.error(e);
      this.error = e;
    }
  }

  loadSlider( url ) {
    this.onload = () => {
      this.render();
    };
    this.onerror = () => {
      this.render();
    };
    this.isFetching = true;
    this.setClients(url);
    this.render();
  };

  renderError() {
    this.loadingElem.remove();
  }

  renderLoading() {
    this.loadingElem = new Spinner(spinnerOptions).spin(
        this.sliderContainer).el;
  }

  render() {
    if (this.isFetching) {
      this.renderLoading();
    } else if (this.error) {
      this.renderError();
    } else {
      this.sliderContainer.replaceChild(createSlider(this.clients),
          this.loadingElem);
    }
  }
}
