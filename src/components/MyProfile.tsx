import { useAppSelector } from '../store/hooks';
import MatchBox from './MatchBox';
import PropertiesBox from './PropertiesBox';
import './MyProfile.css'
import EditContent from './EditContent';

const MyProfile: React.FC = () => {
  const myProfile = useAppSelector((state) => state.matching.profile);
  const edit = true;

  return (
    <>
      <div className='myProfile'>
        <div className='leftSide'>
          <MatchBox user={myProfile.user} />
          <div className='about'>
            <b>About myself...</b>
            { edit ? <EditContent /> : null }
            <p>{myProfile.user.about}</p>
          </div>
        </div>

        <div className='rightSide'>
          <PropertiesBox user={myProfile.user} edit={edit} />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
