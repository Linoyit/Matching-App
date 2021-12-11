import { useAppDispatch, useAppSelector } from '../store/hooks';
import MatchBox from './MatchBox';
import PropertiesBox from './PropertiesBox';
import './MyProfile.css';
import { updateUserProperties, updateUserSelections } from '../store/matchingSlice';
import EditContent from './EditContent';
import { useDisplayState } from '../hooks/useDisplayState';
import { useFormInput } from '../hooks/useFormInput';
import UserPrivateDetails from './UserPrivateDetails';

const MyProfile: React.FC = () => {

  const myProfile = useAppSelector((state) => state.matching.profile);
  const display = useDisplayState();
  const formInput = useFormInput(myProfile.user.about, 'about');
  const dispatch = useAppDispatch();
  function onToggleChange(type: string, option: string) {
    dispatch(updateUserSelections([type, option]));
  }

  const onChange = (event: any) => {
    console.log(event.target.files[0].name);
    dispatch(updateUserProperties(['imageUrl', event.target.files[0].name]));
  }

  return (
    <>
      <div className='myProfile'>
        <div className='leftSide'>
          <MatchBox user={myProfile.user} />
          <input type="file" id="select_image" name="image" onChange={onChange} />
          <UserPrivateDetails />
          <div className='about'>
            <b>About myself...</b>
            <EditContent handleClick={display.handleClick} />
            <p style={display.oppositeStyle}>{myProfile.user.about}</p>
            <p>
              <input
                style={display.btnStyle}
                type='text'
                {...formInput}
              ></input>
            </p>
          </div>
        </div>

        <div className='rightSide'>
          <PropertiesBox
            user={myProfile.user}
            edit={true}
            onToggleChange={onToggleChange}
          />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
