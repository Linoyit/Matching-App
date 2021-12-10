
import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { updateUserPreference } from "../store/matchingSlice";
import { useCollection } from "../utils/useCollection";
import './FilterView.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faFilter)

interface FilterProps {
  type: string;
  options: Array<string>;
  checked: Array<boolean>;
  onToggleChange: (type:string, option:string) => void;
}

interface optionProps {
  type: string;
  option: string;
  checked: boolean;
  onToggleChange: (type:string, option:string) => void;
}

const Option: React.FC<optionProps> = ({type, option, checked, onToggleChange}) => {

  function handleChange() {
    onToggleChange(type, option);
  }

  return(
    <div className="input">
            <input type="checkbox" id={option} name={option} onChange={handleChange} checked={checked}/>
            <label htmlFor={option}>{option}</label>
          </div>
  );
}

const Filter: React.FC<FilterProps> = ({ type, options, checked, onToggleChange }) => {
  const [display, setDisplay] = useState("none");
  
  function handleFilterClick() {
    const val = display === "none" ? "block" : "none";
    setDisplay(val);
  }
 
  const shownStyle = {
    display: "block",
    overflow: "hidden",
    backgroundColor: "white",
    color: "black",
  };

  const hiddenStyle = {
    display: "none",
    overflow: "hidden",
  };

  const btnStyle = display === "none" ? hiddenStyle : shownStyle;
  return (
    <div className="content" >
      <div className="btnFilterType" onClick={handleFilterClick}>
        {type}
      </div>
      <div style={btnStyle}>
        {options.map((option, index) => (
          <Option key={index} type={type} option={option} onToggleChange={onToggleChange} checked={checked[index]}/>
        ))}
      </div>
    </div>
  );
};

const FilterView: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filterWidth, setFilterWidth] = useState(css`width:0;`);
  function onToggleChange(type:string, option:string) {
    dispatch(updateUserPreference([type, option]));
  }

  const containerStyle = css`
      position: fixed;
      z-index: 1;
      overflow-x: hidden;
      width: 20%;
      height: 100%;
      background-color: #f1f1f1;
    @media (max-width: 400px){
      position: fixed;
      z-index: 1;
      font-size: 18px;
      overflow-x: hidden;
      ${filterWidth};
      transition: 0.4s;
      height: 100%;
      background-color: #f1f1f1;
    }
    `

  const filterBtnStyle = css`
      display: none;
    @media (max-width: 400px){
      display: block;
      width:35%;
      padding: 10px;
      font-size: 14px;
      background-color: grey;
      color: white;
      border: none;
    }  
  `

  function onFilterBtnClick() {
    const showFilter = css`width:35%;`
    const hideFilter = css`width:0;`
    setFilterWidth(filterWidth === showFilter? hideFilter : showFilter);
  }

  const { preferences, filterSelections } = useCollection();

    return (
      <>
      <button className={filterBtnStyle} onClick={onFilterBtnClick}>
        <FontAwesomeIcon icon="filter" color="white"/> Filter Results
        </button>
      <div className={containerStyle}>
        {preferences.map((preference, index) => (
          <Filter key={index} type={preference.type}
            options={preference.filterOptions ? preference.filterOptions : preference.options}
            checked={filterSelections[index].selection}
            onToggleChange={onToggleChange} />
        ))}
      </div></>
    );
  };

export default FilterView;
