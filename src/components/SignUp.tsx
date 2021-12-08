import { Link } from "react-router-dom";
import { IndexKind } from "typescript";
import Enter from "./Enter";
import Questions from "./Questions";

const SignUp: React.FC = () => {
   

    return (
       <div>
            <div className="enter">
           <h1>Create new account</h1>
           <input  placeholder = "User Name" className="user"/>
           <input  placeholder= "Password" className="user"/>
           <input  placeholder= "E-mail" className="user"/>
           <Questions/>
           <button>join</button>
           <Link to='/login'>Already have an account ?</Link>
       </div>           

</div>
);
}

export default SignUp;