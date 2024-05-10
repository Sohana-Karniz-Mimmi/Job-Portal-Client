import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <div className="min-h-[calc(100vh-512px)] ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;