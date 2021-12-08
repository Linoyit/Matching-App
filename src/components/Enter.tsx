import { Link } from "react-router-dom";
import "./Enter.css";

interface IProps{
   isJoin: boolean;

}

const Enter: React.FC<IProps> = ({isJoin}) => {
    const title = isJoin? "Sign in": "Create new account";
    const enter = isJoin? " Sign in" : "Join";
    const account = isJoin? "Don’t have an account?" : "already have an account ?" 
    const navigate = isJoin? "/signup" : "/login";

    // const chackName = (userName: string) =>{
          
    // // }
    // const chackPassword = (userPassword: string) =>{
    //     if(userPassword.length < 6)
           
    // }
    return (
       <div className="enter">
           <h1>{title}</h1>
           <input  placeholder = "User Name" />
           <input  placeholder= "Password"/>
           <button>{enter}</button>
           <Link to={navigate}>{account}</Link>
       </div>
    );
}

export default Enter