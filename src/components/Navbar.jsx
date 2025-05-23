import React, { useState, useEffect } from "react";
import "./Styles/Navbar.css";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUser,
  FaBusinessTime,
  FaHandshake,
  FaFileAlt,
  FaUserCircle,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        {/* Top bar with logo, hamburger, and avatar on mobile */}
        <div className="nav-top">
          <Link to="/">
            {/* <HiOutlineArrowLeft className="back-icon" /> */}

            <div className="nav-logo">
              <img src="/workisy logo-01.png" alt="Workisy Logo" />
            </div>
          </Link>
          <div className="nav-mobile-right">
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            {/* <div className="user-profile mobile-avatar">
              <FaUserCircle className="avatar" />
            </div> */}
          </div>
        </div>

        {/* Dropdown Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {/* Services Dropdown */}
          <div
            className="nav-item dropdown"
            onMouseEnter={
              !isMobile ? () => setActiveDropdown("services") : undefined
            }
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            <span onClick={() => isMobile && handleDropdown("services")}>
              Services{" "}
              <FaChevronDown
                className={`dropdown-icon ${
                  activeDropdown === "services" ? "rotate" : ""
                }`}
              />
            </span>
            {activeDropdown === "services" && (
              <div className="dropdown-menu">
                <a
                  href="https://airesume.workisy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <FaFileAlt className="menu-icon" /> Resume Builder
                </a>

                {/* <a href="" onClick={closeMenu}>
                  <FaRocket className="menu-icon" /> Career Growth
                </a> */}
              </div>
            )}
          </div>

          {/* Login Dropdown */}
          {/* <div
            className="nav-item dropdown"
            onMouseEnter={
              !isMobile ? () => setActiveDropdown("login") : undefined
            }
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            <span onClick={() => isMobile && handleDropdown("login")}>
              Login{" "}
              <FaChevronDown
                className={`dropdown-icon ${
                  activeDropdown === "login" ? "rotate" : ""
                }`}
              />
            </span>
            {activeDropdown === "login" && (
              <div className="dropdown-menu">
                <a href="" onClick={closeMenu}>
                  <FaUser className="menu-icon" /> Candidate Login
                </a>
                <a href="" onClick={closeMenu}>
                  <FaBusinessTime className="menu-icon" /> Employer Login
                </a>
                <a href="" onClick={closeMenu}>
                  <FaHandshake className="menu-icon" /> Consultant Login
                </a>
              </div>
            )}
          </div> */}
        </div>

        {/* User profile only on desktop */}
        {/* <div className="user-profile desktop-profile">
          <FaUserCircle className="avatar" />
          <div className="user-details">
            <div className="user-name">Md Faizur Rahman</div>
            <div className="user-email">mdfaizurrahman297@gmail.com</div>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
