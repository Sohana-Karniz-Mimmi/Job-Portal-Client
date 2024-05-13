import { Helmet } from "react-helmet-async";
import Banner from "../Components/HomeComponents/Banner";
import Counting from "../Components/HomeComponents/CountUp";
import TabCategories from "../Components/HomeComponents/TabCategories";
import Testimonial from "../Components/HomeComponents/Testimonial";
import ExtraSection from "../Components/HomeComponents/ExtraSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Job-Portal - Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="md:pt-12 md:pb-6 bg-[#f5f7fc]">
            <TabCategories></TabCategories>
            </div>
            <Counting></Counting>
            <ExtraSection></ExtraSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;