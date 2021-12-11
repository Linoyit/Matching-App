import './MatchProfile.css';
import { useNavigate, useParams } from "react-router-dom";
import MatchBox from './MatchBox';
import SendMessageBox from './SendMessageBox';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { User } from '../store/matchingSlice';
import PropertiesBox from './PropertiesBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faChevronLeft)

const Matches: React.FC = () => {
    let navigate = useNavigate();
    const matches = useAppSelector((state) => state.matching.matches);
    const {id} = useParams();
    const finduser: User|undefined = matches.find((user: User) => user.username === id)
    const user: User = finduser ? finduser : matches[0];

    const dispatch = useAppDispatch();
    function onToggleChange(type:string, option:string) {
      dispatch(updateUserProfile([type, option]));
    }

    return (
        <>
        <div className="back">
            <button onClick={()=> {navigate("/")}}><FontAwesomeIcon icon="chevron-left" color="black"/></button>
        </div>

        <div className="matchProfile">

            <div className="leftSide">
                <MatchBox user={user}/>
                <div className="about">
                    <b>About myself...</b>
                    <p>{user.about}</p>
                </div>
            </div>

            <div className="rightSide">
                <PropertiesBox user={user} edit={false} onToggleChange={onToggleChange}/>
                <SendMessageBox/>
            </div>
            
        </div>
        </>
    );
}
export default Matches

function updateUserProfile(arg0: string[]): any {
    throw new Error('Function not implemented.');
}
