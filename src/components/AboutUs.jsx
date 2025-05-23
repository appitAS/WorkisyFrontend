import React from "react";
import "./Styles/AboutUs.css";
import { FaRocket, FaUsers, FaChartLine, FaHandshake, FaRegLightbulb } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="workisy-aboutus-container">
      {/* Hero Section */}
      <section className="workisy-aboutus-hero">
        <div className="workisy-hero-content">
          <h1>Redefining Recruitment with AI Innovation</h1>
          <p className="workisy-hero-subtext">
            Bridging Talent with Opportunity through Smart Technology
          </p>
          <div className="workisy-hero-image">
            <img 
              src="https://i.ytimg.com/vi/B8WQBHjlvA4/maxresdefault.jpg" 
              alt="Team collaboration" 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="workisy-stats-container">
        <div className="workisy-stat-item">
          <h3>1M+</h3>
          <p>Successful Matches</p>
        </div>
        <div className="workisy-stat-item">
          <h3>95%</h3>
          <p>Candidate Satisfaction</p>
        </div>
        <div className="workisy-stat-item">
          <h3>50K+</h3>
          <p>Companies Trust Us</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="workisy-aboutus-cards">
        <div className="workisy-aboutus-card mission-card">
          <FaRocket className="card-icon" />
          <h2>Our Mission</h2>
          <p>
            Revolutionize hiring processes through AI-powered solutions that prioritize 
            both candidate potential and employer needs, creating meaningful connections 
            in the global job market.
          </p>
        </div>

        <div className="workisy-aboutus-card vision-card">
          <FaRegLightbulb className="card-icon" />
          <h2>Our Vision</h2>
          <p>
            To become the world's most trusted career ecosystem where technology 
            empowers human potential and organizations find perfect cultural matches.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="workisy-aboutus-why">
        <h2>Why Workisy Stands Out</h2>
        <div className="workisy-aboutus-features">
          <div className="workisy-aboutus-feature-card">
            <FaUsers className="feature-icon" />
            <h3>Human-Centric AI</h3>
            <p>
              Our algorithms learn from behavioral patterns while maintaining 
              the human touch in career decisions.
            </p>
          </div>
          <div className="workisy-aboutus-feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Growth Analytics</h3>
            <p>
              Real-time career path predictions and skill gap analysis for 
              continuous professional development.
            </p>
          </div>
          <div className="workisy-aboutus-feature-card">
            <FaHandshake className="feature-icon" />
            <h3>Ethical Recruitment</h3>
            <p>
              Bias-free matching system that promotes diversity and equal 
              opportunity in hiring.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;