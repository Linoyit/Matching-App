/** @jsxImportSource @emotion/react */
import Input from "./Input";
import Options from "./Options";
import { jsx, css } from '@emotion/react';
import AboutBasicA from "./AboutBasicA";
import AboutBasicB from "./AboutBasicB";
import {useState} from  'react';
import SignUp from "./SignUp";
import AboutAdvanced from "./AboutAdvanced";


const AboutYou: React.FC = () =>{
    const [pagePart, setPage] = useState(1);

    const btnStyle = css({
        backgroundColor: "#04AA6D",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        // float: "right",
        boxSizing: "border-box",


       
    })

    const containerStyle =css({
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: "20px",
        boxSizing: "border-box",
        maxWidth: "60%",
        margin: "auto",
        '@media screen and (max-width: 600px)':{
            maxWidth: "100%",
            margin:0,
        }
    })


   const hrStyle = css({
    border: " 1px solid #04AA6D",
    marginBottom: 25,
    boxSizing: "border-box",
 })

 const navigateStyle = css({
    marginTop: "100px",
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
 });
  
    return(

      pagePart === 0 ?<SignUp/>: <div className="aboutContainer" css={containerStyle }>
             <h1>About you</h1>
             <hr css={hrStyle}/>
             {pagePart === 1&&<AboutBasicA/>}
             {pagePart === 2&&<AboutBasicB/>}
             {pagePart === 3&&<AboutAdvanced/>}

             <div className="navigate" css={navigateStyle}>
             <button type="submit" css={ btnStyle } onClick={() => setPage(pagePart + 1)}>Next</button>
             <button  type="submit" css={ btnStyle } onClick={() => setPage(pagePart - 1)}>Back</button>
          </div>
      </div>
      
    )
}

export default AboutYou;