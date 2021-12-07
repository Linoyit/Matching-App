import { User } from "../store/matchingSlice";
import './MatchBox.css';
interface IProps { 
    user: User;
}

const MatchBox: React.FC<IProps> = ({ user }) => {
    return (
        <div className="match-box">
                <img src="logo.svg" alt="profilePic" />
                <div className="info">
                        <div>{ user.firstName }</div> 
                        {" "}|{" "}
                        <div>{ user.age }</div>
                </div>
        </div>
    );
}

export default MatchBox