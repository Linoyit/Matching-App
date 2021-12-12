/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { jsx, css } from '@emotion/react';

interface IProps{
   isJoin: boolean;

}

const Enter: React.FC<IProps> = ({isJoin}) => {
    // const title = isJoin? "Sign in": "Create new account";
    // const enter = isJoin? " Sign in" : "Join";
    const account = isJoin? "Don’t have an account?" : "already have an account ?" 
    const navigate = isJoin? "/signup" : "/login";
   

     const inputStyle = css({
        width: "100%",
        padding: "15px",
        margin: "5px 0 22px 0",
        display: "inline-block",
        border: "none",
        background: "#f1f1f1",
        boxSizing: "border-box",
     })

     const labelStyle= css({
        padding: "12px 12px 12px 0",
        display: "inline-block",
        boxSizing: "border-box",
     })


     
    return (
       <div className="enter">

        <label css={labelStyle} ><b>Email</b></label>
        <input id="mail" type="mail" placeholder="Enter Email" css={inputStyle} name="email" required/>
      
        <label css={labelStyle} ><b>Password</b></label>
        <input id="password1" type="password" placeholder="Enter Password"   css={inputStyle} name="psw" required/>
       {isJoin === false && <div>
     <label css={labelStyle}><b>Repeat Password</b></label>
     <input id="password2"  type="password" placeholder="Repeat Password"  css={inputStyle}  name="psw-repeat" required/>
     </div>  }
      
      
           {/* <button>{enter}</button> */}
           <Link to={navigate}  style= {{color:"dodgerblue"}}>{account}</Link>
       </div>
    );
}

export default Enter