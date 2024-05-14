import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

const MyJobs = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    // const [jobs, setJobs] = useState([])

    // useEffect(() => {
    //     getData()
    // }, [user])


    // Tanstack Query
    const QueryClient = useQueryClient()

    // Tanstack Query for get the data   
    const { data: jobs = [], isLoading, } = useQuery({
        queryFn: () => getData(),
        queryKey: ['jobs', user?.email],
    })
    console.log(jobs, isLoading);


    const getData = async () => {
        const { data } = await axiosSecure(`/jobs/${user?.email}`)
        // setJobs(data)
        return data

    }

    // Tanstack Query for get the data
    const handleDelete = async id => {
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
                    mutateAsync({ id, })
                    // axiosSecure.delete(`/job/${id}`)
                    // .then(data => {
                    //     if (data.data.deletedCount > 0) {
                    //         Swal.fire({
                    //             title: "Deleted!",
                    //             text: "Your Job has been deleted.",
                    //             icon: "success"
                    //         });

                    //         //refresh ui

                    //         // getData()
                    //     }
                    // })
                }
            })

    }



    const { mutateAsync } = useMutation({
        mutationFn: async ({ id }) => {
            const { data } = await axiosSecure.delete(`/job/${id}`)
            console.log(data)
            return data
        },
        onSuccess: () => {
            console.log('Wow, data Delete')
            // toast.success('Delete Successfully')
            Swal.fire({
                title: "Deleted!",
                text: "Your Job has been deleted.",
                icon: "success"
            });

            // refresh ui for latest data
            // refetch()

            // Kothin
            QueryClient.invalidateQueries({ queryKey: ['jobs'] })
        },
    })


    if (isLoading) {
        return <>
            <div className="flex items-center justify-center space-x-2 h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#fe9703]"></div>
            </div>
        </>

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
                                jobs?.map((myJob) =>
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