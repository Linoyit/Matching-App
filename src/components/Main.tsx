import FilterView from "./FilterView";
import Matches from "./Matches";

const MatchingList: React.FC = () => {
    return (
       <div className="main">
           <FilterView/>
           <Matches/>
       </div>
    );
}

export default MatchingList