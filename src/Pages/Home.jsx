import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
   
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;