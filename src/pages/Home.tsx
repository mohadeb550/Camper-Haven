import Banner from "../components/ui/Home/Banner";
import BestSellingProducts from "../components/ui/Home/BestSellingProducts";
import FeaturedProducts from "../components/ui/Home/FeaturedProducts";
import TopCategories from "../components/ui/Home/TopCategories";

const Home = () => {
    return (
        <>
         <Banner/> 
         <BestSellingProducts/>
         <TopCategories/>
         <FeaturedProducts/>
        </>
    );
};

export default Home;