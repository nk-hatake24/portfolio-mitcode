import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { FaEnvelope } from "react-icons/fa";


const Contact = () => {

  const form = useRef() 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2za17eq', 'template_effscvx', form.current, {
        publicKey: 'DWvUQQhK3daJW8_qZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
        
        <div className="contact-text">
          <div>
            <h2>Got a problem to solve</h2>
          </div>
        </div>
       
        <div className="contact-form">
          <form ref = {form} onSubmit={sendEmail}>
          <div className="contact-form-index">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="from_name"/>
          </div>

          <div className="contact-form-index">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="user_email" />
          </div>

          <div className="contact-form-index">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="5"></textarea>
          </div>

          <div className="contact-form-footer">
            <p className="contact-form-footer-email">
              <FaEnvelope />
              <a href="mailto:nkenlamichel@gmail.com">nkenlamichel@gmail.com</a>
            </p>
            <button type='submit' className="contact-form-btn">contact me!</button>
          </div>
          </form>
        </div>
      </section>
  )
}

export default Contact