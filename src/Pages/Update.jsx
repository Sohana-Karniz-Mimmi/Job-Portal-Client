import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import axios from "axios"
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Update = () => {

    // React Hook Form
    const {
        register,
        handleSubmit,
    } = useForm()

    const { user } = useContext(AuthContext);
    const job = useLoaderData()
    const navigate = useNavigate()
    // console.log(job);
    const [postDate, setPostDate] = useState(new Date())
    const [applicationDeadline, setDeadline] = useState(new Date())

    const deadline = new Date(applicationDeadline).toLocaleDateString()
    const postedDate = new Date(postDate).toLocaleDateString()
    const email = user.email
    const displayName = user.displayName
    const {
      _id,
    //   job_title,
    //   deadline,
    //   category,
    //   min_price,
    //   max_price,
    //   description,
    } = job || {}
    const handleUpdateForm = data => {

        const { job_title, category, salaryRange, description, photo } = data
        const salary = parseFloat(salaryRange)

        const jobs = {
            job_title, category, postedDate, deadline, salary, description, photo, buyer: {
                email,
                displayName,
                buyerPhoto: user?.photoURL,
            },
        }
        // console.table(jobs);


        axios.put(`${import.meta.env.VITE_API_URL}/job/${_id}`, jobs)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    navigate('/myJobs')
                    toast.success('Update Successfully')
                }
                // console.log('inside post response data', data);
            })


    }

    return (
        <div>
            <Helmet>
                <title>Update Job Post - Job-Portal</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>
            <section className="p-6 barlow-condensed-regular dark:text-gray-900">

                <form onSubmit={handleSubmit(handleUpdateForm)} className="container mx-auto flex justify-center space-y-12">
                <fieldset className=" py-10 md:px-16 px-5 rounded-md shadow-sm dark:bg-white border-2 mt-5">
                        <div className="mb-6 text-center">
                            <h3 className="md:text-4xl text-2xl font-extrabold">Add A Job</h3>
                        </div>
                        <div className=" md:w-[680px] w-[300px] grid grid-cols-6 gap-4 col-span-full lg:col-span-3">


                            {/* First Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-base block mb-2">Job Title</label>
                                <div className="relative">
                                    <input {...register("job_title", { required: true })} name="job_title" required type="text" className="w-full text-base border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter as Job Title" />
                                    {/* {errors.job_title && <span className="text-red-600">Please Enter a Job Title</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-base block mb-2">Job Category</label>
                                <div className="relative">
                                    <select {...register("category", { required: true })} name="category" type="text" required className="w-full text-base border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent">
                                        <option value="">Select Job...</option>
                                        <option value="On Site">On Site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                    {/* {errors.category && <span className="text-red-600">Please Enter Your Country</span>} */}

                                </div>
                            </div>

                            {/* 2nd Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-base block mb-2">Job Posting Date</label>
                                <div className="relative">
                                    <DatePicker
                                        className='md:w-[332px] border w-[300px] rounded-lg px-2 py-2 '
                                        selected={postDate}
                                        onChange={date => setPostDate(date)}
                                    />

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-base block mb-2">Application Deadline</label>
                                <div className="relative">
                                    <DatePicker
                                        className='md:w-[332px] border w-[300px] rounded-lg px-2 py-2 '
                                        selected={applicationDeadline}
                                        onChange={date => setDeadline(date)}
                                    />
                                </div>
                            </div>

                            {/* 3rd Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-base block mb-2">Salary rang</label>
                                <div className="salaryRange">
                                    <input {...register("salaryRange", { required: true })} name="salaryRange" type="text" required className="w-full text-base border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Your Photo URL" />
                                    {/* {errors.salaryRange && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-base block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input {...register("photo", { required: true })} name="photo" type="text" required className="w-full text-base border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Your Photo URL" />
                                    {/* {errors.photo && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>



                            {/* User Name  and email */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-base block mb-2">Your Name</label>
                                <div className="relative">
                                    <input  {...register("userName", { required: true })} value={displayName} name="userName" type="text" className="w-full text-base border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" />

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-base block mb-2">Your Email</label>
                                <div className="relative">
                                    <input  {...register("email", { required: true })} name="email" value={user.email} type="text" className="w-full text-base border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" />

                                </div>
                            </div>


                            {/* description */}
                            <div className="col-span-full">
                                <label className="text-base block mb-2">Job Description</label>
                                <div className="relative">
                                    <textarea {...register("description", { required: true })} name="description" type="text" cols="10" rows="2" placeholder="Write a short description..." className="w-full text-base border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent"></textarea>

                                </div>
                            </div>
                            {/* Btn */}
                            <div className="col-span-full">
                                <input type="submit" value='Add Job' className="w-full text-lg p-2 rounded-md btn bg-green-600 hover:bg-green-600 text-white" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};


export default Update;