import "./TopBar.css";
import { useNavigate } from "react-router-dom";


const Topbar: React.FC = () => {
    let navigate = useNavigate();

    return (
        <div className="topbar">
            <div className="topbar-left">
                <button onClick={()=> {navigate("/")}}>Icon</button>
            </div>

            <div className="topbar-right">
                <button onClick={()=> {navigate("../MyProfile")}}>My Profile</button>
                <button onClick={()=> {navigate("../Inbox")}}>Inbox Msg</button>
                <button onClick={()=> {navigate("../Login")}}>Sign Out</button>
            </div>
       </div>
    );
}

export default Topbar