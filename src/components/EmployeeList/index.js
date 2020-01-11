import EmployeeCard from '../EmployeeCard';
import './styles.scss';

export default function appendTeam( team ) {
    const teamContainer = document.createElement('div');
    team.forEach(employee => {
        teamContainer.appendChild(EmployeeCard(employee));
    });
    teamContainer.classList.add('teamContainer');
    return teamContainer;
}
