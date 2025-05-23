import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Styles/Contactus.css';

const ContactUs = () => {
  return (
    <div className="workisy-contact-container">
      <div className="workisy-contact-header">
        <h1>Get in Touch</h1>
        <p>We're here to help and answer any question you might have.</p>
      </div>

      <div className="workisy-contact-grid">
        {/* Contact Methods */}
        <div className="workisy-contact-methods">
          <div className="workisy-contact-card">
            <div className="contact-icon-bg">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <h3>Phone Support</h3>
            <p>24/7 customer support available</p>
            <a href="tel:+917842190827">+91 78421 90827</a>
          </div>

          <div className="workisy-contact-card">
            <div className="contact-icon-bg">
              <FaEnvelope className="contact-icon" />
            </div>
            <h3>Email Support</h3>
            <p>Typically responds within 2 hours</p>
            <a href="mailto:support@workisy.com">support@workisy.com</a>
          </div>

          <div className="workisy-contact-card">
            <div className="contact-icon-bg">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <h3>Corporate Office</h3>
            <p>PSR Prime Towers, 704 C, 7th Floor<br/>
            Gachibowli, Hyderabad<br/>
            Telangana - 500032</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="workisy-contact-form">
          <div className="form-header">
            <h2>Send us a Message</h2>
            <p>Our team typically responds within 1 business day</p>
          </div>
          
          <form>
            <div className="form-group">
              <input type="text" id="name" required />
              <label htmlFor="name">Full Name</label>
            </div>
            
            <div className="form-group">
              <input type="email" id="email" required />
              <label htmlFor="email">Email Address</label>
            </div>
            
            <div className="form-group">
              <input type="tel" id="phone" required />
              <label htmlFor="phone">Phone Number</label>
            </div>
            
            <div className="form-group">
              <textarea id="message" rows="4" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Social & Map Section */}
      <div className="workisy-contact-social">
        <div className="social-links">
          <a href="#" className="social-icon linkedin">
            <FaLinkedin />
          </a>
          <a href="#" className="social-icon twitter">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon instagram">
            <FaInstagram />
          </a>
        </div>
        
        <div className="office-map">
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.314238823634!2d78.3499114153559!3d17.44605450506008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8b5dfd07%3A0x3696b5f5ef16e6d8!2sPSR%20Prime%20Towers!5e0!3m2!1sen!2sin!4v1624446782729!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;