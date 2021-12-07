import { useAppSelector } from "../store/hooks";
import { User } from "../store/matchingSlice";
import MatchBox from "./MatchBox";

const Matches: React.FC = () => {
    const matches = useAppSelector((state) => state.matching.matches);
    return (
       <div>
           Matching List
           <ul></ul>
            <ul>
                <li>
                    { matches.map((user: User) =>
                        <MatchBox user={user}/>)
                    }
                </li>
            </ul>
       </div>
    );
}

export default Matches