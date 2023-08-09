import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TripData from "../components/TripData";

import aboutImg from "../assets/service.jpg";

function Service() {
  return (
    <>
      <Navbar />
      <Hero classVar="hero-about" introImg={aboutImg} title="#Service" />
      <TripData/>
      <Footer/>
    </>
  );
}

export default Service;
