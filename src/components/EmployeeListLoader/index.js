import createEmployeeList from '../EmployeeList';
import {loadJson}         from '../../utils';
/*const state = {
 isFetching: false,
 employees: [],
 error: null,
 };*/
/**
 *
 * @param teamContainer
 * @param employeesJSON
 * @returns {Promise<void>}
 */
export default async function appendTeam( teamContainer, employeesJSON ) {
  try {
    const team = await loadJson(employeesJSON);
    if (Array.isArray(team)) {
      teamContainer.appendChild(createEmployeeList(team));
    }
  } catch(e) {
    console.error(e);
  }
}