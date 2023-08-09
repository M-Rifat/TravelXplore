import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"; 
import TripData from "../components/TripData";

import introImg from "../assets/intro.jpg";
import DestinationData from "../components/DestinationData";

function Home() {
  return (
    <>
      <Navbar/>
      <Hero
      classVar="hero"
      introImg={introImg}
      title="Welcome to TravelXplore"
      title2="Embark on Journeys Beyond the Ordinary!"
      text="Every journey becomes a unique story. Find Your Favourite Destination"
      btnText="Travel Plan"
      url="/"
      btnClass="styleButton"
      />
      <DestinationData/>
      <TripData/>
      <Footer/>
    </>
  );
}

export default Home;