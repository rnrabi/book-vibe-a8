import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;