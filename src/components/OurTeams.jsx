import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Styles/OurTeams.css";

const TeamMember = ({ name, role, image, socials }) => (
  <div className="team-card">
    <img src={image} alt={name} className="team-image" />
    <div className="team-content">
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      <div className="team-socials">
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}
        {socials.github && (
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Aravind Gajjela",
      role: "CEO & Founder",
      image: "https://www.appitsoftware.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-12-at-13.38.47.jpeg",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ventaka Niranjan",
      role: "IT professional",
      image: "https://www.appitsoftware.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-16.55.39.jpeg",
      socials: {
        linkedin: "#",
        github: "#"
      }
    },
  ];

  return (
    <div className="our-team-section">
      <div className="our-team-container">
        <div className="our-team-header">
          <h1>Welcome to Workisy</h1>
          <p>
            <strong>Workisy.com</strong> is a cutting-edge AI-driven job search and recruitment platform dedicated to connecting the right talent with the right opportunities faster and more accurately than ever before. Leveraging advanced machine learning algorithms and intelligent job matching technology, Workisy delivers personalized job recommendations tailored to each candidate’s unique skills, experience, and career goals.

Our platform simplifies the job search process with powerful resume-building tools and a user-friendly interface that guides candidates from application to success. For employers, Workisy provides precision hiring solutions that streamline recruitment, reduce time-to-hire, and improve candidate quality.

At Workisy, we are committed to empowering candidates by unlocking access to the most relevant job openings and helping employers find the perfect fit making hiring smarter, faster, and more effective for everyone.
          </p>
        </div>

        <div className="our-team-subheader">
          <h2>Our Amazing Team</h2>
          <p>Meet the passionate individuals driving innovation and success at Workisy.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
