import PropTypes from 'prop-types';
import { AiOutlineDollar } from 'react-icons/ai'
import { LuUserSquare } from 'react-icons/lu'
import { PiUsersFour } from 'react-icons/pi'
// import { TfiUser } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
  const {
    _id,
    job_title,
    name,
    salary_range,
    posting_Date,
    deadline,
    applicants_number,
  } = job || {}
  return (
    <Link
      className='lg::w-[365px] w-full px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
      <div className='flex items-center justify-between'>
        <div className="avatar">
          <div className="w-10 rounded">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </div>



      <div>
        <h1 className='mt-2 text-lg font-semibold '>
          {job_title}
        </h1>
        <h1 className='flex items-center gap-2 mt-1 text-[16px] font-medium'>
        <LuUserSquare />{name}
        </h1>
        <div className='flex justify-between items-center'>
          <p className='mt-2 text-sm'>
            Posting Date: {new Date(posting_Date).toLocaleDateString()}
          </p>
          <p className='mt-2 text-sm'>
            Deadline: {new Date(deadline).toLocaleDateString()}
          </p>
        </div>

        <p className='flex items-center gap-2 mt-2 text-sm font-medium'>
        <AiOutlineDollar className=' text-lg' /> Salary: ${salary_range}
        </p>
        <div className='flex justify-between items-center'>

          <p className='flex items-center gap-2 mt-2 text-sm font-medium'>
           <PiUsersFour className=' text-lg' />Applicants: {applicants_number}
          </p>
          <div className=' text-center'>
            <Link to={`/job/${_id}`} className="md:px-4 md:py-2 px-3 py-2 border hover:bg-green-600 group-hover:text-white duration-300 border-green-600 text-center transition-all ease-out text-green-600 md:text-[16px] text-sm btn-outline rounded-md">View Details</Link>
          </div>

        </div>
      </div>
    </Link>
  )
}
JobCard.propTypes = {
  job: PropTypes.node
};


export default JobCard
