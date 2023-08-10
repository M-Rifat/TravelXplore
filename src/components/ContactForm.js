import "./ContactFormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2x5ec5x', 'template_czurh0w', form.current, 'TkuPZ_W0E1-Vj_H_h')
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
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" id=""  rows="4" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
