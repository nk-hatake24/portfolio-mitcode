import React from 'react'
import { FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact">
        <div className="contact-text">
          <div>
            <h2>Got a problem to solve</h2>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-form-index">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div className="contact-form-index">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
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
            <button className="contact-form-btn">contact me!</button>
          </div>
        </div>
      </section>
  )
}

export default Contact