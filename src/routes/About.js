import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero classVar="hero-about" introImg={aboutImg} title="#About" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
