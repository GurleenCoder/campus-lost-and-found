import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import heroImage from "../../assets/images/hero-image.png";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";


function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Features/>
      <HowItWorks/>

      <div>
        
      </div>
    </>
  );
}

export default Home;