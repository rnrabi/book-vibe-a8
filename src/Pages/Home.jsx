import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";
import { ToastContainer, toast } from "react-toastify";


const Home = () => {
    const notify = () => toast("Wow so easy!");
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Home;