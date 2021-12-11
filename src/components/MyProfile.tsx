import { useAppDispatch, useAppSelector } from '../store/hooks';
import MatchBox from './MatchBox';
import PropertiesBox from './PropertiesBox';
import './MyProfile.css'
import { updateUserProfile } from '../store/matchingSlice';

const MyProfile: React.FC = () => {
  const myProfile = useAppSelector((state) => state.matching.profile);
  const edit = true;

  const dispatch = useAppDispatch();
  function onToggleChange(type:string, option:string) {
    dispatch(updateUserProfile([type, option]));
  }

  return (
    <>
      <div className='myProfile'>
        <div className='leftSide'>
          <MatchBox user={myProfile.user} />
          <div className='about'>
            <b>About myself...</b>
            {/* {edit ? <EditContent handleClick={display.handleClick}/> : null} */}
            <p>{myProfile.user.about}</p>
          </div>
        </div>

        <div className='rightSide'>
          <PropertiesBox user={myProfile.user} edit={edit} onToggleChange={onToggleChange}/>
        </div>
      </div>
    </>
  );
};

export default MyProfile;

