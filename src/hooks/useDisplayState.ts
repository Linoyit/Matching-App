import { useState } from "react";

export function useDisplayState(){
	const [display, setDisplay] = useState("none");
  
	const handleClick = () => {
	  const val = display === "none" ? "block" : "none";
	  setDisplay(val);
	}
   
	const shownStyle = {
	  display: "block",
	  overflow: "hidden",
	  color: "black",
	};
  
	const hiddenStyle = {
	  display: "none",
	  overflow: "hidden",
	};

	const oppositeStyle = display === "none" ? shownStyle : hiddenStyle
  
	const btnStyle = display === "none" ? hiddenStyle : shownStyle;
	return { btnStyle, handleClick, oppositeStyle};

}