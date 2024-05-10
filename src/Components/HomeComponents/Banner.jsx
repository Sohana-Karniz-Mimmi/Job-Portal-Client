import slider1 from '../../assets/images/Banner Slider/banner3.jpg'
import slider2 from '../../assets/images/Banner Slider/banner1.png'
import slider3 from '../../assets/images/Banner Slider/banner3.webp'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/effect-fade';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
// import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../Navbar';




const Banner = () => {
    return (
        <Swiper
            navigation={true}
            effect="fade"
            modules={[Navigation, Autoplay, EffectFade]}
            // autoplay={{
            //     delay: 3000,
            //   }}
            loop={true}
        >
            <SwiperSlide>
                <section className="relative bg-cover bg-fixed bg-center bg-no-repeat h-[720px]" style={{ backgroundImage: `url(${slider1})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center"
                    >
                        <div className='bg-[#00000080] text-white'>
                            <Navbar></Navbar>
                        </div>
                        <div className='flex items-center justify-center h-[540px]'>
                            <div className=" text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <p className='text-xl font-medium mb-1'>
                                    {/* <Typewriter
                                        words={[' Wellcome To Turio',]}
                                        loop={true}
                                        cursor
                                        // cursorStyle='_'
                                        typeSpeed={200}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    /> */}
                                    Wellcome To Job Portal
                                </p>
                                <h1 className="text-3xl font-bold sm:text-7xl">
                                        <div>Enjoy Your New Adventure</div>
                                </h1>



                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" className="mt-4 mb-10 max-w-3xl sm:text-lg/relaxed">
                                    Embark on a voyage of discovery with Turio. Explore diverse landscapes, immerse in vibrant cultures, and uncover the world's wonders. Your adventure awaits!
                                </p>
                                <button className='border border-green-600 py-[9px] bg-green-600 hover:bg-transparent px-6 font-semibold'> Explore Now </button>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="relative bg-cover bg-fixed bg-center bg-no-repeat h-[720px]" style={{ backgroundImage: `url(${slider2})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center"
                    >
                        <div className='bg-[#00000080] text-white'>
                            <Navbar></Navbar>
                        </div>
                        <div className='flex items-center justify-center h-[540px]'>
                            <div className=" text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <p className='text-xl font-medium mb-1'>
                                    {/* <Typewriter
                                        words={[' Wellcome To Turio',]}
                                        loop={true}
                                        cursor
                                        // cursorStyle='_'
                                        typeSpeed={200}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    /> */}
                                    Wellcome To Turio
                                </p>
                                <h1 className="text-3xl font-bold sm:text-7xl">
                                        <div>Enjoy Your New Adventure</div>
                                </h1>



                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" className="mt-4 mb-10 max-w-3xl sm:text-lg/relaxed">
                                    Embark on a voyage of discovery with Turio. Explore diverse landscapes, immerse in vibrant cultures, and uncover the world's wonders. Your adventure awaits!
                                </p>
                                <button className='border border-green-600 py-[9px] bg-green-600 hover:bg-transparent px-6 font-semibold'> Explore Now </button>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>

            
            

        </Swiper>
    );
};

export default Banner;