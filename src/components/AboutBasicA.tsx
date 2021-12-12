/** @jsxImportSource @emotion/react */
import Input from "./Input";
import Options from "./Options";
import { jsx, css } from '@emotion/react';


const AboutBasicA: React.FC = () => {

    const loctions =["Jerusalem", "Tel-Aviv", "Haifa", "Golan", "Eilat"];

    return(

        <form action="">

            <Input label="First Name" type="text" placeHolder= "Your name.."/>
            <Input label="Last Name" type="text" placeHolder= "Your last name.."/>
            <Options values={["male", "famle"]} label="Gender"/>
            <Input label="Birth" type="date" placeHolder= ""/>
            <Options  values={loctions} label="Loctions"/>
     
     </form>  
    )
}


export default AboutBasicA;