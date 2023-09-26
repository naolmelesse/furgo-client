import React from 'react';
import '../styles/contact-us.scss';

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
        <div className="contact-header">
            <h2>Get in touch</h2>
            <p>Contact us for any queries about Furgo</p>
        </div>
        
        <p className="contact-title">Contact form</p>
        <form action="">

            <div className="contact-form-container">
                <div className="left-contact">
                    <div className="contact-text-box">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="" />
                    </div>
                    <div className="contact-text-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="contact-text-box">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name="phone" id="" />
                    </div>
                </div>
                <div className="right-contact">
                    <div className="contact-text-box">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="35" rows="15" ></textarea>
                    </div>
                </div>
            </div>
            <input className="submit-btn" type="submit" value="Send message" />
        </form>
        </div>
  )
}

export default ContactUs