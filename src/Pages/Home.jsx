import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";
import { ToastContainer, toast } from "react-toastify";


const Home = () => {
   
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Home;