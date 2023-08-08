import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"; 
import Trip from "../components/Trip";

import introImg from "../assets/12.jpg";

function Home() {
  return (
    <>
      <Navbar/>
      <Hero
      classVar="hero"
      introImg={introImg}
      title="Your Journey Makes Story"
      text="Find Your Favourite Destination"
      btnText="Travel Plan"
      url="/"
      btnClass="styleButton"
      />
    </>
  );
}

export default Home;