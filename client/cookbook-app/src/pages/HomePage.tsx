import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/auth/AuthContext";

const HomePage = () => {
  const { token } = useContext(AuthContext);
  
  useEffect(() => {
    console.log("Token set:", token);
  }, [token]);

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
