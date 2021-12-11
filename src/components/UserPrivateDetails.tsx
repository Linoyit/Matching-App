import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDisplayState } from '../hooks/useDisplayState';
import { useFormInput } from '../hooks/useFormInput';
import { useAppSelector } from '../store/hooks';
import EditContent from './EditContent';
import './UserPrivateDetails.css';
library.add(faUser, faKey);

const UserPrivateDetails: React.FC = () => {
  const myProfile = useAppSelector((state) => state.matching.profile);
  const display = useDisplayState();
  const password = useFormInput('', 'password');
  const placeholder = 'Enter new Password';

  return (
    <div className='privateDetails'>
      <b>Account Details:</b>
      <p>
        <FontAwesomeIcon icon='user' color='black' />
        {'   '}username : {myProfile.user.username}
      </p>
      <p>
        <FontAwesomeIcon icon='key' color='black' />
        {'   '}change password
        <EditContent handleClick={display.handleClick}></EditContent>
      </p>
      <div style={display.btnStyle}>
        <input type='password' placeholder={placeholder} {...password}></input>
      </div>
    </div>
  );
};

export default UserPrivateDetails;
