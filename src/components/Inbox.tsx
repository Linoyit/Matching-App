import { css } from "@emotion/css";
import { Outlet, useNavigate } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { User } from "./models/User";

const getChatStyles = () => {
  const imgStyle = css`
    border-radius: 50%;
    max-width: 100%;
    align-self: center;
  `;
  const chatStyle = css`
    @media (max-width: 600px) {
      width: 90%;
    }
    border: 1px solid grey;
    border-radius: 5px;
    width: 50%;
    height: 80px;
    margin: auto;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    background-color: pink;
    box-shadow: 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  `;
  const inboxStyle = css`
    margin: 10px;
  `;
  const imgContainerStyle = css`
    width: 15%;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const nameStyle = css`
    margin: 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
  `;
  return { imgStyle, chatStyle, inboxStyle, imgContainerStyle, nameStyle };
};

const Inbox: React.FC = () => {
  const { matches, profile } = useCollection();
  //TODO: create chats in store, onClick open conversation problem routing.
  const navigate = useNavigate();

  const handleClick = (user: User) => {
    // inboxName is: User + other user.
    navigate(`./${profile.user.username}${user.username}`);
  };

  const { imgStyle, chatStyle, inboxStyle, imgContainerStyle, nameStyle } =
    getChatStyles();

  return (
    <><span className={inboxStyle}>
      {matches.map((user) => (
        <div className={chatStyle} onClick={() => handleClick(user)}>
          <div className={imgContainerStyle}>
            <img className={imgStyle} src={user.imageUrl} alt="profileImg" />
          </div>
          <p className={nameStyle}>{user.firstName}</p>
        </div>
      ))}
    </span><Outlet/></>
  );
};

export default Inbox;
