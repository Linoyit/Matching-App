import FilterView from "./FilterView";
import Matches from "./Matches";

const MatchingList: React.FC = () => {
    return (
       <div>
           <FilterView/>
           <Matches/>
       </div>
    );
}

export default MatchingList