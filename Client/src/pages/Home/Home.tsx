import Hero from "@/components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import AiTools from "@/components/AiTools/AiTools";
import TestimonalsComponent from "@/components/Testimonals/Testimonals";
import Paymentplan from "@/components/PaymentPlans/Paymentplan";
import Footer from "@/components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
       <Hero/>
       <AiTools/>
       <TestimonalsComponent/>
       <Paymentplan/>
       <Footer/>
    </div>
  );
};

export default Home;
