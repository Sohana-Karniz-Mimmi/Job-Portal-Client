import icon1 from '../../assets/images/Icon/icon-1.png'
import icon2 from '../../assets/images/Icon/icon-2.png'
import icon3 from '../../assets/images/Icon/icon-3.png'

const ExtraSection = () => {
    return (
        <div className=' container py-10 mb-12 mx-auto md:px-10 px-1'>
            <div>
                <h1 className='text-xl font-semibold text-center text-gray-800 capitalize lg:text-4xl '>
                    How Job Portal Works for You?
                </h1>

                <p className='max-w-xl mx-auto mt-2 mb-8 text-center text-gray-500 '>
                    Set up a comprehensive profile highlighting your skills, experience, and aspirations. Make a strong first impression on potential employers.
                </p>
            </div>

            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
                <div className='lg::w-[365px] w-full py-12 px-10 text-center rounded-md shadow-md bg-[#f5f7fc]'>

                    <div className="mx-auto mb-5">
                        <img className='mx-auto' src={icon1} />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='mt-2 text-lg font-semibold '>
                            Need Any Jobs?
                        </h1>
                        <p>
                            But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born
                        </p>
                    </div>
                </div>
                <div className='lg::w-[365px] w-full py-12 px-10 text-center rounded-md shadow-md bg-[#f5f7fc]'>

                    <div className="mx-auto mb-5">
                        <img className='mx-auto' src={icon2} />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='mt-2 text-lg font-semibold '>
                            Post Your Jobs
                        </h1>
                        <p>
                            But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born
                        </p>
                    </div>
                </div>
                <div className='lg::w-[365px] w-full py-12 px-10 text-center rounded-md shadow-md bg-[#f5f7fc]'>

                    <div className="mx-auto mb-5">
                        <img className='mx-auto' src={icon3} />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='mt-2 text-lg font-semibold '>
                            Apply to Jobs
                        </h1>
                        <p>
                            But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ExtraSection;