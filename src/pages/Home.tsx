import Banner from "../components/ui/Home/Banner";
import BestSellingProducts from "../components/ui/Home/BestSellingProducts";
import FaqSection from "../components/ui/Home/FAQsection/FaqSection";
import FeaturedProducts from "../components/ui/Home/FeaturedProducts";
import TestomonialSection from "../components/ui/Home/Testomonial/TestomonialSection";
import TopCategories from "../components/ui/Home/TopCategories";

const Home = () => {
    return (
        <>
         <Banner/> 
         <BestSellingProducts/>
         <TopCategories/>
         <FeaturedProducts/>
         <FaqSection/>
         <TestomonialSection/>
        </>
    );
};

export default Home;