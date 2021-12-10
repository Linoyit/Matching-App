import { useAppSelector } from "../store/hooks";
import { User } from "../store/matchingSlice";
import MatchBox from "./MatchBox";
import './Matches.css';

const Matches: React.FC = () => {
    const matches = useAppSelector((state) => state.matching.matches);
    return (
        <div className="container">
            {matches.map((user: User) => <MatchBox user={user} key={user.username} />)}
        </div>
    );
}
export default Matches