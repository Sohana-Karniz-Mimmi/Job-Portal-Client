import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";

import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyJobs = () => {

    const loadedMyJobList = useLoaderData()
    console.log(loadedMyJobList);
    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    const remainingMyJobList = loadedMyJobList.filter(JobItem => JobItem?.buyer?.email == user?.email)
    console.log(remainingMyJobList);
    const [myJobs, setMyJobList] = useState(remainingMyJobList);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`${import.meta.env.VITE_API_URL}/job/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Job has been deleted.",
                                    icon: "success"
                                });

                                const remaining = myJobs.filter(myJobEmail => myJobEmail._id !== id)
                                setMyJobList(remaining);
                            }
                        })
                }
            })

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
                            {
                                myJobs?.map((myJob) =>
                                    <tr key={myJob._id} className="">
                                        <th>{myJob.job_title}</th>
                                        <th>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={myJob.photo} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm opacity-50">{myJob.buyer.displayName}</div>
                                                </div>
                                            </div>
                                        </th>
                                        <td >{myJob.category}</td>
                                        <td className="text-center">{myJob.postedDate}</td>
                                        <td className="text-center">{myJob.deadline}</td>
                                        <td className="text-center">${myJob.salary}</td>
                                        <td className="text-center">{myJob?.buyer?.email}</td>
                                        <td className="text-center">
                                            <div className=" space-x-1">
                                                <Link to={`/update/${myJob._id}`} className="py-2 px-4 rounded-md join-item text-white bg-green-500">Update</Link>
                                                <button onClick={() => handleDelete(myJob._id)} className="py-2 px-4 rounded-md join-item text-white bg-red-500">Delete</button>
                                            </div></td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;