import Options from "./Options";
import RadioButton from "./RadioButton";
import './Questions.css'


const Questions: React.FC = () => {

    const years = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998];
    const months = [1, 2, 3 , 4, 5, 6, 7, 8, 9 ,10, 11, 12];
    const days = [1, 2, 3 ,4 ,5 ,6];
    const loctions =["Jerusalem", "Tel-Aviv", "Haifa", "Golan", "Eilat"];


    return(
    <div id="questions">
    
    <div id="labelQuestions">
        <label id="gender">Gender:</label>
        <label>Birth:</label>
        <label id="loction">Loction:</label>
    </div>

<div id= "firstLine" >
    <RadioButton values= {["Famle", "Male"]}/> 
    
    <div className="userBirth" >
      <Options  selectType="select year"  values={years}/>
      <Options  selectType="select month"  values={months}/>
      <Options  selectType="select day"  values={days}/> 
    </div>

    <div>
    <Options  selectType="select loction"  values={loctions}/>
    </div>
</div>
     
    <label id="smoking">Smoking:</label>
    <RadioButton values= {["Yes", "No"]}/>


    </div>)
}

export default Questions