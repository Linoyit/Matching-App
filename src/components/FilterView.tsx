import { useState } from "react";
import './FilterView.css';

interface IProps {
  question: string;
  options: Array<string>;
}

const Filter: React.FC<IProps> = ({ question, options }) => {
  const [display, setDisplay] = useState("none");

  function handleClick() {
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
    <div className="content" key={question}>
      <div className="btnFilter" key={question} onClick={handleClick}>
        {question}
      </div>
      <div style={btnStyle}>
        {options.map((option) => (
          <div className="input">
            <input type="checkbox" id={option} name={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

const FilterView: React.FC = () => {

  return (
    <div className="filterContainer">
      <Filter question={"Gender >"} options={["Woman", "Man", "Both"]} />
      <Filter question={"Age >"} options={["18-25", "25-45", "45+"]} />
      <Filter question={"Location >"} options={["Jerusalem", "Tel-Aviv", "New-York"]}
      />
    </div>
  );
};

export default FilterView;


  //   const getStyle = (display: string) => {
  //     return styled.div`
  //     display: ${display};
  //     overflow: "hidden";
  //     color: blue;
  //     background-color: "blue";`
  //   };

  //   const DivStyle = getStyle(myDisplay);