import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const HomePage = () => {

  return (
    <div className="flex flex-col max-h-screen ">
      <div>
        <Navbar />
      </div>
        <HeroSection />
    </div>
  );
};

export default HomePage;
