import Banner from "../Components/HomeComponents/Banner";
import TabCategories from "../Components/HomeComponents/TabCategories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="md:pt-12 md:pb-6 bg-[#f5f7fc]">
            <TabCategories></TabCategories>
            </div>
        </div>
    );
};

export default Home;