
/** @jsxImportSource @emotion/react */

import { jsx, css } from '@emotion/react';
import Enter from "./Enter";
import {useNavigate } from 'react-router';



const SignUp: React.FC = () => {
const navigate =  useNavigate();

 const joinBtn = css({
    backgroundColor: "#f44336",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    cursor: "pointer",
    width: "100%",
    opacity: "0.9",
    '&:hover &,:focus': "hotpink"
});

const hrStyle = css({
   border: " 1px solid #f1f1f1",
   marginBottom: 25
})

const container = css({
    padding: 16,
})

const styleForm = css({
    border:"1px solid #ccc",
    maxWidth: "40%",
    margin: "auto",
    '@media screen and (max-width: 600px)':{
        maxWidth: "100%",
        margin:0,
    }
})



    return (
        <form action=""  className="signupFrom" css={styleForm}>
        <div css={container} >
          <h1>Sign In</h1>
          <hr css={hrStyle}/>
          <Enter isJoin={true}/>
          <button type="submit" className="joinbtn"  css={joinBtn} onClick={() => navigate(`${'../HomePage'}`)}>Login</button>

          </div>
      </form>        
    
);
}

export default SignUp;