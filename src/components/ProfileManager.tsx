import { useParams } from "react-router";
import { useCollection } from "../utils/useCollection";
import HomePage from "./HomePage";
import MatchProfile from "./MatchProfile";
import MyProfile from "./MyProfile";

const ProfileManager: React.FC = () => {
  const { profile } = useCollection();
  const params = useParams();
  let id;
  if (params) {
    id = params.id ? params.id : "-1";
  }
  const component =
    profile.user.username === id ? (
      <MyProfile />
    ) : profile.user.username === "-1" ? (
      <HomePage />
    ) : (
      <MatchProfile />
    );

  return (<>{ component }</>);
};

export default ProfileManager;
