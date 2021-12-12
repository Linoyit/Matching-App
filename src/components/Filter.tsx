import { css } from "@emotion/css";
import { useDisplayState } from "../hooks/useDisplayState";
import FilterOption from "./FilterOption";

interface FilterProps {
    type: string;
    options: Array<string>;
    checked: Array<boolean>;
    onToggleChange: (type: string, option: string) => void;
  }

  const getFilterStyles = () => {

    const btnFilterType = css`
      border: none;
      border-bottom-style: groove;
      /* border-bottom-color: pink; */
      text-align: left;
      font-size: 20px;
      padding: 15px;
      cursor: pointer;
      background-color: #f1f1f1;
      transition: 0.4s;
      &:hover {
        color: rgb(197, 84, 103);
      }
    `;
    return { btnFilterType };
  };
const Filter: React.FC<FilterProps> = ({
    type,
    options,
    checked,
    onToggleChange,
  }) => {
   
    const {  btnFilterType } = getFilterStyles();
    const {btnStyle, handleClick} = useDisplayState();
  
    return (
      <div className="content">
        <div className={btnFilterType} onClick={handleClick}>
          {type}
        </div>
        <div style={btnStyle}>
          {options.map((option, index) => (
            <FilterOption
              key={index}
              type={type}
              option={option}
              onToggleChange={onToggleChange}
              checked={checked[index]}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Filter;
  
  