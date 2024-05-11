import Navbar from "../Components/Navbar";
// import {  useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { PiUsersFour } from "react-icons/pi";


const ViewDetails = () => {

    // const loadedDetailsData = useLoaderData()
    // // console.log(loadedUpdateData);

    // const { touristsSpotName, countryName, averageCost, description, location, travelTime, totalVisitors, seasonality, photo } = loadedDetailsData

    return (
        <div className="">
            <Helmet>
                <title>Jobs Name - Job-Portal</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="barlow-condensed-regular md:mt-2 lg:flex gap-6 justify-between container mx-auto md:px-10 px-1 mb-10">

                {/* main content */}
                <div className="relative">
                    <div className=" pb-2 flex justify-between items-end mb-4">
                        <div className="space-y-2">
                            <h2 className="md:text-5xl text-2xl font-bold">Digital Marketing</h2>
                        </div>

                        <div> <Link className="md:px-4 md:py-2 px-3 py-2 border rounded-full hover:bg-[#fe9703] bg-green-600 font-semibold text-white duration-300 border-green-600 hover:border-[#fe9703] text-center transition-all ease-out md:text-[16px] text-sm">Apply Now</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="avatar">
                            <div className="w-16 rounded">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-1 font-medium text-[#9ca3a9]">
                                <button className=" md:py-[3px] py-[3px] md:px-3 px-2 rounded-md text-sm bg-[#fe9703] text-white">Fulltime</button>
                                <button className=" md:py-[3px] py-[3px] md:px-3 px-2 rounded-md text-sm bg-[#fe9703] text-white">Remote</button>
                                <button className=" md:py-[3px] py-[3px] md:px-3 px-2 rounded-md text-sm bg-[#fe9703] text-white">2-4 Years</button>
                            </div>
                            <div className="flex items-center gap-6">
                                <p className='flex items-center gap-2 mt-2 text-sm font-medium'>
                                    <AiOutlineDollar className=' text-lg' /> Salary: $100-$500
                                </p>
                                <p className='flex items-center gap-2 mt-2 text-sm font-medium'>
                                    <PiUsersFour className=' text-lg' />Applicants: 100
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Details */}

                    <div className="p-4 rounded-lg border my-8" >
                        <h2 className="md:text-3xl text-xl font-medium">Description</h2>
                        <div className=" pb-4 pt-3 text-[15px] flex justify-between items-center font-medium">
                            <p className="text-[#667488]">Distinctively target holistic systems through long-term high-impact outsourcing. Interactively integrate diverse models whereas market positioning outsourcing. Monotonectally pursue enabled action items and functionalized methodologies. Assertively coordinate intermandated value with leveraged models. Globally transform leveraged products and premier core competencies.Intrinsicly myocardinate client-centered markets via integrated internal or sources. Quickly.</p>
                        </div>

                    </div>

                </div>


                {/* job information */}
                <div className=" md:max-w-md w-full  sm:px-6 mt-4 pb-6 px-4 border rounded-lg">
                        <div className="py-4 mt-4 text-center">
                            <h3 className="text-3xl font-extrabold">Job Informations</h3>
                        </div>


                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr className="">
                                        <th scope="row" className="px-2 py-2 whitespace-nowrap font-bold text-[#667488]">
                                        Owner Name
                                        </th>
                                        <td className="px-2 font-semibold text-[#667488] dark:text-[#1c2733] py-2">
                                        Sohana Kariz
                                        </td>
                                    </tr>
                                    <tr className="text-black">
                                        <th scope="row" className="px-2  py-2 font-bold text-[#667488] whitespace-nowrap ">
                                        Job Title
                                        </th>
                                        <td className="px-2 font-semibold text-[#1c2733] py-2">
                                        Senior Graphics Designer
                                        </td>
                                    </tr>
                                    <tr className="text-black">
                                        <th scope="row" className="px-2  py-2 font-bold text-[#667488] whitespace-nowrap ">
                                        Category
                                        </th>
                                        <td className="px-2 font-semibold text-[#1c2733] py-2">
                                        Graphics Design
                                        </td>
                                    </tr>
                                    <tr className="text-black">
                                        <th scope="row" className="px-2  py-2 font-bold text-[#667488] whitespace-nowrap ">
                                        Posted
                                        </th>
                                        <td className="px-2 font-semibold text-[#1c2733] py-2">
                                        5 Months Ago
                                        </td>
                                    </tr>
                                    <tr className="text-black">
                                        <th scope="row" className="px-2  py-2 font-bold text-[#667488] whitespace-nowrap ">
                                        Gender
                                        </th>
                                        <td className="px-2 font-semibold text-[#1c2733] py-2">
                                        Male & Female
                                        </td>
                                    </tr>
                                    <tr className="text-black">
                                        <th scope="row" className="px-2  py-2 font-bold text-[#667488] whitespace-nowrap ">
                                        Applied
                                        </th>
                                        <td className="px-2 font-semibold text-[#1c2733] py-2">
                                        100
                                        </td>
                                    </tr>
                                    <tr className="text-black">
                                        <th scope="row" className="px-2  py-2 font-bold text-[#667488] whitespace-nowrap ">
                                        Application Ends
                                        </th>
                                        <td className="px-2 font-semibold text-[#1c2733] py-2">
                                        Fabruary 18, 2023
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;