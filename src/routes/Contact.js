import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

import contactImg from "../assets/contact.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero classVar="hero-about" introImg={contactImg} title="#Contact" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
