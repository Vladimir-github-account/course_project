import createEmployeeList from '../ScientistList';
import {loadJson}         from '../../utils';
import {Spinner}          from 'spin.js';
import {spinnerOptions}   from '../../constants/index.js';

export default class EmployeeListLoader {
  /**
   *
   * @param {HTMLElement} employeeListContainer
   * @param {string} url
   */
  constructor( employeeListContainer, url ) {
    this._employeeListContainer = employeeListContainer;
    this._employees = null;
    this._error = null;
    this._isFetching = false;
    this.onload = null;
    this._loadingElem = null;
    this.loadTeam(url);
  }

  get loadingElem() {
    return this._loadingElem;
  }

  /**
   *
   * @param {HTMLElement} value
   */
  set loadingElem( value ) {
    if (value instanceof HTMLElement) {
      this._loadingElem = value;
    } else throw new TypeError();
  }

  get employeeListContainer() {
    return this._employeeListContainer;
  }

  get employees() {
    return this._employees;
  }

  /**
   *
   * @param {Array <Object>} value
   */
  set employees( value ) {
    this._employees = value;
  }

  get isFetching() {
    return this._isFetching;
  }

  /**
   *
   * @param {Boolean} value
   */
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

  /**
   *
   * @param {string} url
   * @returns {Promise<void>}
   */
  async setEmployees( url ) {
    try {
      const employees = await loadJson(url);
      if (Array.isArray(employees)) {
        this.employees = employees;
        this._error = null;
        this.isFetching = false;
      } else {
        throw new TypeError('Wrong data type');
      }
    } catch(e) {
      this.error = e;
      console.error(e);
    }
  }

  /**
   *
   * @param {string} url
   */
  loadTeam( url ) {
    this.onload = () => {
      this.render();
    };
    this.onerror = () => {
      this.render();
    };
    this.isFetching = true;
    this.setEmployees(url);
    this.render();
  };

  renderError() {
    this.loadingElem.remove();
  }

  renderLoading() {
    this.loadingElem = new Spinner(spinnerOptions).spin(
        this.employeeListContainer).el;
  }

  render() {
    if (this.isFetching) {
      this.renderLoading();
    } else if (this.error) {
      this.renderError();
    } else {
      this.employeeListContainer.replaceChild(
          createEmployeeList(this.employees), this.loadingElem);
    }
  }
}