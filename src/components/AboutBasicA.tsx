/** @jsxImportSource @emotion/react */
import Input from "./Input";
import Options from "./Options";
import { jsx, css } from '@emotion/react';


const AboutBasicA: React.FC = () => {
    const years = ["year",1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998];
    const months = ["month",1, 2, 3 , 4, 5, 6, 7, 8, 9 ,10, 11, 12];
    const days = ["day",1, 2, 3 ,4 ,5 ,6];
    const loctions =["Jerusalem", "Tel-Aviv", "Haifa", "Golan", "Eilat"];

//    const divStyle = css({
//        display: "flex",
//        flexDirection: "row",
//        float: "right",
//        boxSizing: "border-box",
//    })

    return(

        <form action="">

            <Input label="First Name" type="text" placeHolder= "Your name.."/>
            <Input label="Last Name" type="text" placeHolder= "Your last name.."/>
            <Options isBirth={false} values={["male", "famle"]} label="Gender"/>

           <div >
            <Options isBirth={true} values={days} label="Birth"/>
            <Options isBirth={true} values={months} label="  "/>
            <Options isBirth={true} values={years} label="  "/>
          </div>

            <Options isBirth={false} values={loctions} label="Loctions"/>
     
     </form>  
    )
}


export default AboutBasicA;