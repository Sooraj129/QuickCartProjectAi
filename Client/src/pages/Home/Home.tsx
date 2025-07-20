import Hero from "@/components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import AiTools from "@/components/AiTools/AiTools";
import TestimonalsComponent from "@/components/Testimonals/Testimonals";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
       <Hero/>
       <AiTools/>
       <TestimonalsComponent/>
    </div>
  );
};

export default Home;
