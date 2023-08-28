import "./ContactFormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          if(confirm('Message sent Successfully...')){
            window.location.reload();  
        }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form-container">
      <h1>Send a message to us</h1>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required/>
        <input type="number" name="phone" placeholder="Phone" />
        <textarea name="message" id=""  rows="4" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
