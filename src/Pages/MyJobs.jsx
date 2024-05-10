import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";

const MyJobs = () => {
    return (
        <div>
            <Helmet>
                <title>My Jobs - Job-Portal</title>
            </Helmet>

            <div>
                <Navbar></Navbar>
            </div>
            this is My Jobs page
        </div>
    );
};

export default MyJobs;