
import BestSellingProducts from "../Components/BestSellingProducts";
import Footer from "../Components/Footer";
import HomeContent from "../Components/HomeContent";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HomeContent />
      < BestSellingProducts />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
      
    </div>
  );
}