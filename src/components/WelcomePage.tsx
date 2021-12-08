import { Navigate, useNavigate, useNavigationType } from "react-router"
import "./Welcome.css"

const WelcomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (page:string) =>{
    //    name === "join"?
    //    navigate(`${'../signup'}`):
    //    navigate(`${'../ login'}`)
         navigate(`../${page}`)

    }
    
    return (
        
    <div className="welcomeContainer">
      <div className ="top">
          <div id="logo">logo</div>
          <button id="login" onClick={() => handleClick("login")} >Log in</button>
      </div>
       <div>
         <h1>DATING FOR EVERY SINGLE PERSON</h1>
         <div id="welcomeText">
         <p>OkCupid is the only dating app that matches you on what matters to you.</p>
         <p>You deserve to find who you’re looking for.</p>     
         <p>Meet them today!</p>
         </div>
         <button id="join" onClick={() => handleClick("signup")}>join</button>
       </div>
    </div>
    );
}

export default WelcomePage