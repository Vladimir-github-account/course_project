import EmployeeCard from '../ScientistCard';
import './styles.scss';

/**
 *
 * @param {Array <Object>} team
 * @returns {HTMLDivElement}
 */
export default function appendTeam( team ) {
  const teamContainer = document.createElement('div');
  team.forEach(employee => {
    teamContainer.appendChild(EmployeeCard(employee));
  });
  teamContainer.classList.add('teamContainer');
  return teamContainer;
}
