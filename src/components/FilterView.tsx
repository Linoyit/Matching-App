import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { updateUserPreference } from "../store/matchingSlice";
import { useCollection } from "../hooks/useCollection";
import "./FilterView.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useQuestions } from "../hooks/useQuestions";
import Filter from "./Filter";
library.add(fab, faFilter);

const getFilterViewStyles = () => {
  const filterBtnStyle = css`
    display: none;
    @media (max-width: 500px) {
      display: block;
      width: 35%;
      padding: 10px;
      font-size: 14px;
      background-color: grey;
      color: white;
      border: none;
    }
  `;
  return { filterBtnStyle };
};

const FilterView: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filterWidth, setFilterWidth] = useState(
    css`
      width: 0;
    `
  );

  function onToggleChange(type: string, option: string) {
    dispatch(updateUserPreference([type, option]));
  }

  const containerStyle = css`
    position: fixed;
    z-index: 1;
    overflow-x: hidden;
    width: 20%;
    height: 100%;
    background-color: #f1f1f1;
    @media (max-width: 500px) {
      position: fixed;
      z-index: 1;
      font-size: 18px;
      overflow-x: hidden;
      ${filterWidth};
      transition: 0.4s;
      height: 100%;
    }
  `;

  function onFilterBtnClick() {
    const showFilter = css`
      width: 35%;
    `;
    const hideFilter = css`
      width: 0;
    `;
    setFilterWidth(filterWidth === showFilter ? hideFilter : showFilter);
  }

  const {filterBtnStyle} = getFilterViewStyles();
  const { filterSelections } = useCollection();
  const { questionsInfo } = useQuestions();

  return (
    <>
      <button className={filterBtnStyle} onClick={onFilterBtnClick}>
        <FontAwesomeIcon icon="filter" color="white" /> Filter Results
      </button>
      <div className={containerStyle}>
        {questionsInfo.map((preference, index) => (
          <Filter
            key={index}
            type={preference.type}
            options={
              preference.filterOptions
                ? preference.filterOptions
                : preference.options
            }
            checked={filterSelections[index].selection}
            onToggleChange={onToggleChange}
          />
        ))}
      </div>
    </>
  );
};

export default FilterView;

