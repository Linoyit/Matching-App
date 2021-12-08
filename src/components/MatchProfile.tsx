import './MatchProfile.css';
import { useNavigate, useParams } from "react-router-dom";
import MatchBox from './MatchBox';
import SendMessageBox from './SendMessageBox';
import { useAppSelector } from '../store/hooks';
import { User } from '../store/matchingSlice';


const Matches: React.FC = () => {
    let navigate = useNavigate();
    const matches = useAppSelector((state) => state.matching.matches);
    const {id} = useParams();
    const finduser: User|undefined = matches.find((user: User) => user.username === id)
    const user = finduser ? finduser : matches[0];
    
    return (
        <>
        <div>
            <button onClick={()=> {navigate("/")}}>back</button>
        </div>

        <div className="matchProfile">

            <div className="leftSide">
                <MatchBox user={user}/>
                <div className="about">
                    about myself...
                </div>
            </div>

            <div className="rightSide">
                <SendMessageBox/>
            </div>
            
        </div>
        </>
    );
}
export default Matches