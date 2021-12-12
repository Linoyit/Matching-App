
/** @jsxImportSource @emotion/react */
import Input from "./Input";
import Options from "./Options";
import { jsx, css } from '@emotion/react';


const AboutBasicB: React.FC = () => {


    return(
        <form action="">
            <Input label="Image" placeHolder=""  type="file"/>
            <Input label="About" placeHolder="Write something.."  type="textarea"/>
        </form>  
    )
}


export default AboutBasicB;