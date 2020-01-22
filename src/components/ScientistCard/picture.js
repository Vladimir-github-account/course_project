import createPicture from '../Picture';

export default function createPersonPhotoElem( employee ) {
  const personPhotoWrapper = document.createElement('div');
  personPhotoWrapper.classList.add('personPhotoWrapper');
  const personPhoto = createPicture(['personPhoto'], employee.profilePicture,
      'employee photo',
      'https://retohercules.com/images/transparent-avatars-16.png');
  personPhotoWrapper.appendChild(personPhoto);
  return personPhotoWrapper;
}