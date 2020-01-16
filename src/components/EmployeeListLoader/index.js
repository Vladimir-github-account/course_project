import createEmployeeList from '../EmployeeList';
import {loadJson}         from '../../utils';
import {Spinner}          from 'spin.js';
import {spinnerOptions}   from '../../constants/index.js';

/**
 *
 * @param teamContainer
 * @param employeesJSON
 * @returns {Promise<void>}
 */

export default class EmployeeListLoader {
  constructor( employeeListContainer, url ) {
    this._employeeListContainer = employeeListContainer;
    this._employees = null;
    this._error = null;
    this._isFetching = false;
    this.onload = null;
    this.loadTeam(url);
  }

  get employeeListContainer() {
    return this._employeeListContainer;
  }

  get employees() {
    return this._employees;
  }

  set employees( value ) {
    this._employees = value;
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
    const spinner = document.querySelector('.spinner');
    spinner.remove();
  }

  renderLoading() {
    new Spinner(spinnerOptions).spin(this.employeeListContainer);
  }

  render() {
    if (this.isFetching) {
      this.renderLoading();
    } else if (this.error) {
      this.renderError();
    } else {
      const spinner = document.querySelector(`#team .spinner`);
      this.employeeListContainer.replaceChild(
          createEmployeeList(this.employees), spinner);
    }
  }
}