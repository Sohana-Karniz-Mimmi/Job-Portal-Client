/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import JobCard from './JobCard'
// import { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"
import { useQuery } from '@tanstack/react-query'


const TabCategories = () => {

  // const [jobs, setJobs] = useState([])
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
  //     setJobs(data)
  //   }
  //   getData()
  // }, [])

  // Tanstack Query
  const { data: jobs = [], isLoading, } = useQuery({
    queryFn: () => getData(),
    queryKey: ['jobs'],
})

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
    // setJobs(data)
    return data;
}

if (isLoading) return <p>Data is still loading......</p>

  // console.log(jobs);

  return (
    <Tabs>
      <div className=' container py-10 mx-auto md:px-10 px-1'>

        <motion.div
          initial={{ opacity: 0, y:50}}
          whileInView={{ opacity: 1, y: 0,  transition:{
            type: 'tween',
            duration: 1.2,
            ease: [0.25, 0.25, 0.25, 0.75],
          } }}
          viewport={{ once: false, amount: 0.7 }}
         
        >
          <h1 className='text-xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
            Popular Categories
          </h1>

          <p className='max-w-2xl mx-auto mt-2 mb-8 text-center text-gray-500 '>
            Explore our Job Portals to streamline your job search. From the cutting-edge world of Technology to the strategic realm of Finance,
          </p>
        </motion.div>
        <div className=' text-[#fe9703] flex items-center justify-center'>
          <TabList>
            {/* <Tab>All Jobs</Tab> */}
            <Tab>Part Time</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Remote Job</Tab>
            <Tab>On Site Job</Tab>
            <Tab>All Jobs</Tab>
          </TabList>
        </div>

        {/* <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs.map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel> */}

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs
              .filter(j => j.category === 'Part Time')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs
              .filter(j => j.category === 'Hybrid')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs
              .filter(j => j.category === 'Remote')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs
              .filter(j => j.category === 'On Site')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs.map(job => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>


      </div>
    </Tabs>
  )
}

export default TabCategories
