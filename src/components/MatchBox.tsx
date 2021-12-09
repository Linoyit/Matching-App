import { useNavigate } from "react-router";
import { User } from "../store/matchingSlice";
import './MatchBox.css';
interface IProps { 
    user: User;
}

const MatchBox: React.FC<IProps> = ({ user }) => {
    const navigate = useNavigate();
    const age = user.userSelections.find((selection) => selection.type === 'Age')?.answer;
    
    const handleClick = () => {
        navigate(`./${user.username}`);
    }

    const boxStyle = {
        position: 'relative',
        marginBottom: '5px',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor:'blue',
        backgroundImage: `url(${user.imageUrl})`,
    };

    return (
        <div className="match-box" onClick={handleClick}>
                <div className="box_img">
                    {/* <img src={user.imageUrl} alt="profilePic" /> */}
                </div>
                <div className="info">
                        <div>{ user.firstName }</div> 
                        {" "}|{" "}
                         {/* { <div>{ user.age }</div> }  */}
                        {  <div>{ age }</div>  }
                </div>
        </div>
    );
}

export default MatchBox