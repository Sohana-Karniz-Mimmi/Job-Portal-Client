import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";


const AppliedJobs = () => {

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
                <div className='flex items-center gap-x-3'>
                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    Total Applied 5 
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
                                                <span>Posting Date</span>
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
                                                    <span>Price</span>
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
                                        {/* {
                                            myBids?.map(myBid =>  */}

                                        <tr >
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                SEO Optimization
                                            </td>

                                            {/* Posting Date */}
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                02-05-204
                                            </td>

                                            {/* Deadline */}
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                02-05-204
                                            </td>

                                            {/* Price */}
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                $500
                                            </td>

                                            {/* Dynamic category */}
                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                <div className='flex items-center gap-x-2'>
                                                    <p
                                                    //                             className={`px-3 py-1 rounded-full 
                                                    // text-xs ${myBid.category === 'Web Development' && 'text-blue-500 bg-blue-100/60'} ${myBid.category === 'Digital Marketing' && 'text-pink-500 bg-pink-100/60'} ${myBid.category === 'Graphics Design' && 'text-emerald-500 bg-emerald-100/60'}
                                                    // `}
                                                    >
                                                        Digital Marketing
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
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                        {/* )
                                        } */}
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

