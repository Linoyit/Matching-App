
/** @jsxImportSource @emotion/react */

import { jsx, css } from '@emotion/react';
import AboutYou from "./AboutYou";
import Enter from "./Enter";
import React, { useState } from 'react';



const SignUp: React.FC = () => {
const [isJoin, setJoin] = useState(false)
 const joinBtn = css({
    backgroundColor: "#f44336",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    cursor: "pointer",
    width: "100%",
    opacity: "0.9",
    boxSizing: "border-box",
    '&:hover &,:focus': "hotpink"
});

const hrStyle = css({
   border: " 1px solid #f1f1f1",
   marginBottom: 25,
   boxSizing: "border-box",
})

const container = css({
    padding: 16,
    boxSizing: "border-box",
})

const styleForm = css({
    border:"1px solid #ccc",
    maxWidth: "40%",
    margin: "auto",
    boxSizing: "border-box",
    '@media screen and (max-width: 600px)':{
        maxWidth: "100%",
        margin:0,
    }
})



    return (
        isJoin ? <AboutYou/>: <form action=""  className="signupFrom" css={styleForm}>
        <div css={container} >
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr css={hrStyle}/>
          <Enter isJoin={false}/>
          <button type="submit" className="joinbtn"  css={joinBtn} onClick={() => setJoin(true)}>join</button>

          </div>
      </form>        
    
);
}

export default SignUp;