import Banner from "../Components/HomeComponents/Banner";
import Counting from "../Components/HomeComponents/CountUp";
import TabCategories from "../Components/HomeComponents/TabCategories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="md:pt-12 md:pb-6 bg-[#f5f7fc]">
            <TabCategories></TabCategories>
            </div>
            <Counting></Counting>
        </div>
    );
};

export default Home;