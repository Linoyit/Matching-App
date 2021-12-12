import { css } from "@emotion/css";
import { useNavigate, useParams } from "react-router";
import { useCollection } from "../hooks/useCollection";
import "./MatchBox.css";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import EditContent from "./EditContent";
import { useDisplayState } from "../hooks/useDisplayState";
import { User } from "./models/User";
library.add(faEdit);

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
    @media (min-width: 500px) {
      height: 180px;
      width: 180px;
    }
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `;
  return { imageStyle, matchBoxStyle };
};

const MatchBox: React.FC<IProps> = ({ user }) => {
  const navigate = useNavigate();
  const { profile } = useCollection();
  const age = profile.user.userSelections.find(
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

  const { matchBoxStyle, imageStyle } = getStyles();

  const Editable: React.FC = () => {
    const { handleClick } = useDisplayState();
    const { profile } = useCollection();

    // const handleEditClick = () => {
    //   <input className={input} type="file" id="select_image" name="image" />
    // }

    const editStyle = css`
      position: absolute;
      top: 5px;
      left: 5px;
    `;
    const label = css`
      display: inline-block;
    `;
    const input = css`
      display: none;
    `;

    const tag = (
      <div className={editStyle}>
        <label className={label} htmlFor="edit-profile-img">
          <EditContent handleClick={handleClick}/>
          <input
            className={input}
            type="file"
            id="select_image"
            name="image"
            onChange={() => {
              console.log("changed");
            }}
          />
        </label>
      </div>
    );
    return profile.user.username === path ? tag : null;
  };

  return (
    <div className={matchBoxStyle} onClick={handleClick}>
      <div className={imageStyle}>
        <Editable />
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
