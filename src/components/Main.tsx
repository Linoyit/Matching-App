import FilterView from "./FilterView";
import Matches from "./Matches";

const MatchingList: React.FC = () => {
    return (
       <div>
           Matching List
           <FilterView/>
           <Matches/>
       </div>
    );
}

export default MatchingList