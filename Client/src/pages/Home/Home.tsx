import Hero from "@/components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import AiTools from "@/components/AiTools/AiTools";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
       <Hero/>
       <AiTools/>
    </div>
  );
};

export default Home;
