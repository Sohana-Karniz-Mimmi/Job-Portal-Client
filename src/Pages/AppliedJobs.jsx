import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import JobPage from "../Components/Pdf";
// import { RiArrowDropDownLine } from "react-icons/ri";


const AppliedJobs = () => {


    const { user } = useContext(AuthContext)
    const [appliedJob, setAppliedJob] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('All');
    const filteredJobs = selectedCategory === 'All' ? appliedJob : appliedJob.filter(job => job.category === selectedCategory);

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/my-apply/${user?.email}`)
        setAppliedJob(data);
    }

    console.log(appliedJob);


    return (

        <>
            <Helmet>
                <title>Applied Jobs- Job-Portal</title>
            </Helmet>

            <div>
                <Navbar></Navbar>
            </div>


            <section className='container px-4 mx-auto py-12'>
                <h2 className="text-2xl md:text-4xl font-bold text-center pb-5">Applied Jobs</h2>

                {/* Filter */}
                <div className="flex justify-end">
                    <select
                        onChange={e => {
                            setSelectedCategory(e.target.value)
                        }}
                        value={selectedCategory}
                        name='category'
                        id='category'
                        className='border py-4 px-8 rounded-lg border-green-600 outline-none'
                    >
                        <option className="bg-white text-black" value=''>Filter By Category</option>
                        <option className="bg-white text-black" value='All'>All</option>
                        <option className="bg-white text-black" value='On Site'>On Site</option>
                        <option className="bg-white text-black" value='Remote'>Remote</option>
                        <option className="bg-white text-black" value='Hybrid'>Hybrid</option>
                        <option className="bg-white text-black" value='Part Time'>Part Time</option>
                    </select>
                </div>
                <div className='flex items-center gap-x-3'>
                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        Total Applied {filteredJobs.length}
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Title</span>
                                                </div>
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <span>Deadline</span>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Salary</span>
                                                </button>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Category
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Status
                                            </th>

                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {
                                            filteredJobs?.map(apply =>

                                                <tr key={apply._id} >
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {apply.job_title}
                                                    </td>

                                                    {/* Deadline */}
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {apply.deadline}
                                                    </td>

                                                    {/* Price */}
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        ${apply.salary}
                                                    </td>

                                                    {/* Dynamic category */}
                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <div className='flex items-center gap-x-2'>
                                                            <p
                                                                className={`px-3 py-1 rounded-full 
                                                    text-xs ${apply.category === 'On Site' && 'text-blue-500 bg-blue-100/60'} ${apply.category === 'Remote' && 'text-pink-500 bg-pink-100/60'} ${apply.category === 'Part Time' && 'text-emerald-500 bg-emerald-100/60'} ${apply.category === 'Hybrid' && 'text-violet-500 bg-violet-100/60'}
                                                    `}
                                                            >
                                                                {apply.category}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    {/* Pending */}
                                                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                        <div>
                                                            <h2 className='text-sm font-normal bg-yellow-100/60 text-yellow-500 inline-flex items-center px-3 py-1 rounded-full gap-x-2'>Pending</h2>
                                                        </div>
                                                    </td>
                                                    {/* Download Button */}
                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">

                                                            {/*Pdf  */}
                                                            <JobPage />
                                                        </button>
                                                    </td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default AppliedJobs

