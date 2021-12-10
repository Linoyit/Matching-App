import './MatchProfile.css';
import { useNavigate, useParams } from "react-router-dom";
import MatchBox from './MatchBox';
import SendMessageBox from './SendMessageBox';
import { useAppSelector } from '../store/hooks';
import { User } from '../store/matchingSlice';
import PropertiesBox from './PropertiesBox';


const Matches: React.FC = () => {
    let navigate = useNavigate();
    const matches = useAppSelector((state) => state.matching.matches);
    const {id} = useParams();
    const finduser: User|undefined = matches.find((user: User) => user.username === id)
    const user: User = finduser ? finduser : matches[0];
    
    return (
        <>
        <div>
            <button onClick={()=> {navigate("/")}}>back</button>
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
                <PropertiesBox user={user}/>
                <SendMessageBox/>
            </div>
            
        </div>
        </>
    );
}
export default Matches