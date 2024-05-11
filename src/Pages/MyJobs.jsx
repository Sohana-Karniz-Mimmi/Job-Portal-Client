import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";

// import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";

const MyJobs = () => {

    // const loadedTouristList = useLoaderData()
    // const { user } = useContext(AuthContext);
    // const remainingTouristList = loadedTouristList.filter(touristItem => touristItem.email == user.email)
    // const [touristList, setTouristList] = useState(remainingTouristList);

    const handleDelete = id => {
        console.log(id);
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        // })
        //     .then((result) => {
        //         if (result.isConfirmed) {
        //             fetch(`https://tourism-server-beta.vercel.app/tourists/${id}`, {
        //                 method: 'DELETE',
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     console.log(data);
        //                     if (data.deletedCount > 0) {
        //                         Swal.fire({
        //                             title: "Deleted!",
        //                             text: "Your file has been deleted.",
        //                             icon: "success"
        //                         });

        //                         const remaining = touristList.filter(touristEmail => touristEmail._id !== id)
        //                         setTouristList(remaining);
        //                     }
        //                 })
        //         }
        //     })

    }


    return (
        <div>
            <Helmet>
                <title>My Jobs - Job-Portal</title>
            </Helmet>

            <div>
                <Navbar></Navbar>
            </div>
            <div className="barlow-condensed-regular py-10 border border-1 rounded-lg mt-10 container mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center pb-5">My Jobs</h2>
                <div className="overflow-x-auto table-responsive">
                    <table className="table">
                        {/* head */}
                        <thead className=" text-[15px] bg-gray-200 text-black">
                            <tr>
                                <th>Job Title</th>
                                <th>Photo</th>
                                <th >Categories</th>
                                <th className="text-center">Posting Date</th>
                                <th className="text-center">Deadline</th>
                                <th className="text-center">Salary</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className=" text-sm">
                            {/* row 1 */}
                            {/* {
                                touristList?.map((tourist) =>  */}
                            <tr className="">
                                <th>SEO Optimization</th>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm opacity-50">Sohana Karniz</div>
                                        </div>
                                    </div>
                                </th>
                                <td >Digital Marketing</td>
                                <td className="text-center">24-11-2023</td>
                                <td className="text-center">24-11-2023</td>
                                <td className="text-center">$500-$100</td>
                                <td className="text-center">Sohanasheikh@gmail.com</td>
                                <td className="text-center">
                                    <div className=" space-x-1">
                                        <Link to={`/update/${"tourist._id"}`} className="py-2 px-4 rounded-md join-item text-white bg-green-500">Update</Link>
                                        <button onClick={() => handleDelete("tourist._id")} className="py-2 px-4 rounded-md join-item text-white bg-red-500">Delete</button>
                                    </div></td>
                            </tr>
                            {/* )
                            } */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;