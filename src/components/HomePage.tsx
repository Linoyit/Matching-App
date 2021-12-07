import { Outlet } from "react-router";
import Topbar from "./TopBar";

const HomePage: React.FC = () => {
    return (
       <div>
           <Topbar/>
           <Outlet/>
       </div>
    );
}

export default HomePage