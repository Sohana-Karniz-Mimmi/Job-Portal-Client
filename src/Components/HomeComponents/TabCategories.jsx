/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import JobCard from './JobCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
const TabCategories = () => {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data)
    }
    getData()
  }, [])

  console.log(jobs);

  return (
    <Tabs>
      <div className=' container py-10 mx-auto md:px-10 px-1'>
        <h1 className='text-xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
        Popular Categories
        </h1>

        <p className='max-w-2xl mx-auto mt-2 mb-8 text-center text-gray-500 '>
        Explore our Job Portals to streamline your job search. From the cutting-edge world of Technology to the strategic realm of Finance,
        </p>
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
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs.map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel> */}

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(j => j.category === 'Part Time')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(j => j.category === 'Hybrid')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(j => j.category === 'Remote')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(j => j.category === 'On Site')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
