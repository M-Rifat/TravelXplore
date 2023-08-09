import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

import aboutImg from "../assets/place2.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero classVar="hero-about" introImg={aboutImg} title="#Contact" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
