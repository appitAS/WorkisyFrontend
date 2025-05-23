import React from "react";
import "./Styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      {/* Background Circles */}
      <div className="bg-circle top-left-circle"></div>
      <div className="bg-circle bottom-right-circle"></div>

      <div className="footer-content">
        <div className="footer-section company-info">
          <h2 className="footer-logo">Workisy</h2>
          <p>Recruiting & Staffing</p>
          <div className="footer-socials">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/ourTeam" onClick={scrollToTop}>
                Our Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Candidates</h3>
          <ul>
            <li>
              <a
                href="https://airesume.workisy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Resume Builder
              </a>
            </li>
            <li>
              <Link to="/" onClick={scrollToTop}>
                AI Job Search
              </Link>
            </li>
            <li>
              <a href="">Candidates Login</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Employers</h3>
          <ul>
            <li>
              <a href="">Candidates Database</a>
            </li>
            <li>
              <a href="">Employer login</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <a href="">Privacy policy</a> |<a href=""> Legal notice</a> |
          <a href=""> Terms of service</a>
        </div>
        <p>© 2025 Workisy</p>
      </div>
    </footer>
  );
};

export default Footer;
