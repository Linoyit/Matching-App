import { useCollection } from "../hooks/useCollection";
import MatchBox from "./MatchBox";
import './Matches.css';
import { User } from "./models/User";

const Matches: React.FC = () => {

    const {matches} = useCollection();
    return (
        <div className="container">
            {matches.map((user: User) => <MatchBox user={user} key={user.username} />)}
        </div>
    );
}
export default Matches