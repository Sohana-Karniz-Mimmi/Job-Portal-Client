import { useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Table from "../Components/Table";

const AllJobs = () => {

    const loadedAllJobsData = useLoaderData();
    // console.log(loadedAllJobsData);

    
    // const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//         <div className="flex items-center justify-center space-x-2 h-screen">
//         <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#fe9703]">

//         </div>
//     </div>
//     );
//   }

    
    return (
        <div>

            <Helmet>
                <title>All Jobs - Job-Portal</title>
            </Helmet>

            <div>
                <Navbar></Navbar>
            </div>

            <div className="barlow-condensed-regular mt-4 mb-10 md:mt-5 container max-w-6xl mx-auto">
                <div className="text-center">
                    <h2 className="font-semibold text-3xl lg:text-[44px] lg:mb-4 mb-2"> All Jobs</h2>
                    <p className="lg:w-[550px] lg:text-lg text-[#9ca3a9] font-medium md:w-[500px] text-sm  w-80 mx-auto">Discover Our Newest Listings: The Latest Properties Ready to Impress and Inspire Your Next Adventure in Real Estate Excellence!</p>
                </div>
                 <Table allJobs={loadedAllJobsData} ></Table>
                <></>
            </div>
        </div>
    );
};

export default AllJobs;