import { css } from "@emotion/css";
import { useNavigate, useParams } from "react-router";
import { User } from "../store/matchingSlice";
import "./MatchBox.css";
interface IProps {
  user: User;
}

const getStyles = () => {
    const imageStyle = css`
    position: relative;
    height: 70%;
    margin: auto;
    background-color: rgb(192, 47, 72);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const matchBoxStyle = css`
    border: 1px solid rgb(192, 47, 72);
    border-radius: 5px;
    margin: 10px;
    height: 280px;
    width: 280px;
    box-shadow: 4px 8px 0 rgba(0, 0, 0, 0.2);
    @media (min-width: 400px) {
      height: 180px;
      width: 180px;
    }
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `;
  return {imageStyle, matchBoxStyle};
}

const MatchBox: React.FC<IProps> = ({ user }) => {
  const navigate = useNavigate();
  const age = user.userSelections.find(
    (selection) => selection.type === "Age"
  )?.answer;
  const params = useParams();
  const path = params.id;

  const handleClick = () => {
    if (path === "/") {
      navigate(`./${user.username}`);
    }
    navigate(`../${user.username}`);
  };

  const {matchBoxStyle, imageStyle} = getStyles();
  
  return (
    <div className={matchBoxStyle} onClick={handleClick}>
      <div className={imageStyle}>
        <img src={user.imageUrl} alt="profilePic" />
      </div>
      <div className="info">
        <div>{user.firstName}</div>
        <div> | </div>
        <div>{age}</div>
      </div>
    </div>
  );
};

export default MatchBox;
