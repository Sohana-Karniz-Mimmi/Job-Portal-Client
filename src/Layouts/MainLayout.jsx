import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div className="relative">
            <div className="sticky top-0 z-[999999999999999999] bg-base-200" >
                    <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-455px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;