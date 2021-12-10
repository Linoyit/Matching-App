import "./TopBar.css";
import { useNavigate } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEnvelope);

const Topbar: React.FC = () => {
    let navigate = useNavigate();

    return (
        <div className="topbar">
            <div className="topbar-left">
                <button onClick={()=> {navigate("/")}}>Icon</button>
            </div>

            <div className="topbar-right">
                <button onClick={()=> {navigate("../Profile")}}>My Profile</button>
                <button onClick={()=> {navigate("../Inbox")}}><FontAwesomeIcon icon="envelope" color="black"/> Msg</button>
                <button onClick={()=> {navigate("../Login")}}>Sign Out</button>
            </div>
       </div>
    );
}

export default Topbar