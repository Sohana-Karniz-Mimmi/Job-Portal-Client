import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Table from "../Components/Table";
import axios from "axios";

import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

const AllJobs = () => {

    const targetRef = useRef();


    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL
                }/all-jobs?search=${search}`
            )
            setJobs(data)
        }
        getData()
    }, [search])

    const handleReset = () => {
        setSearch('')
        setSearchText('')
    }

    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }

    // console.log(search)



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

                <div>
                    <button className="btn" onClick={() => generatePDF(targetRef, { filename: 'https://drive.google.com/file/d/1DcrtNBJ7Br7gLD25z6dNLTZs2NRftZft/view?usp=sharing' })}>Download PDF</button>
                    <div ref={targetRef}>
                        Content to be included in the PDF
                    </div>
                </div>

                {/* Sort By*/}
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 py-4'>

                    {/* Search */}
                    <form
                        onSubmit={handleSearch}
                    >
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>

                    <button
                        onClick={handleReset}
                        className='btn'
                    >
                        Reset
                    </button>
                </div>

                <Table allJobs={jobs} ></Table>
                <></>
            </div>
        </div>
    );
};

export default AllJobs;