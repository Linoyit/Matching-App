import { useNavigate, useParams } from "react-router";
import { User } from "../store/matchingSlice";
import './MatchBox.css';
interface IProps { 
    user: User;
}

const MatchBox: React.FC<IProps> = ({ user }) => {
    const navigate = useNavigate();
    const age = user.userSelections.find((selection) => selection.type === 'Age')?.answer;

    const params = useParams();
    const path = params.id;
    const handleClick = () => {
        if (path === '/'){
            navigate(`./${user.username}`);
        }
        navigate(`../${user.username}`);
    }

    const boxStyle = {
        marginBottom: '5px',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        // backgroundImage: `url(${user.imageUrl})`,
    };

    return (
        <div className="match-box" onClick={handleClick}>
            <img src={user.imageUrl} alt="profilePic" />
                {/* <div className="box_img" style={boxStyle}>
                    
                </div> */}
                <div className="info">
                        <div>{ user.firstName }</div> 
                        {" "}|{" "}
                        <div>{ age }</div>
                </div>
        </div>
    );
}

export default MatchBox