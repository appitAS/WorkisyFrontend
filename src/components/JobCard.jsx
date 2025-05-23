import React from "react";
import "./Styles/jobCard.css";

const JobCard = ({ job }) => {
  // Truncate string to maxLen with ellipsis
  const truncate = (str, maxLen) => {
    if (!str) return "";
    return str.length > maxLen ? str.slice(0, maxLen) + "..." : str;
  };

  // Format updated_at date to "YYYY-MM-DD"
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const d = new Date(dateStr);
    return d.toISOString().slice(0, 10);
  };

  return (
    <div className="jobcard-container">
      <div className="jobcard">
        <div className="jobcard-head">
          <div className="jobcard-logo">
            {job.company_logo ? (
              <img
                src={job.company_logo}
                alt={job.company_name}
                style={{ width: 56, height: 56, borderRadius: 12 }}
              />
            ) : (
              <span className="jobcard-logo-initial">
                {job.company_logo_text || job.company_name?.[0] || "W"}
              </span>
            )}
          </div>
          <div className="jobcard-text-details">
            <div className="jobcard-title">
              {job.title.length > 18 ? truncate(job.title, 18) : job.title}
            </div>
            <div className="jobcard-company">{job.company_name}</div>
            <div className="jobcard-location">{job.recruit_locations_ai}</div>
          </div>
        </div>
        <div className="jobcard-badges-row">
          <div className="jobcard-badges">
            <span className="jobcard-badge jobcard-badge-faded">
              {job.recruit_work_exp_ai || "N/A"}
            </span>
            <span className="jobcard-badge jobcard-badge-faded">
              {formatDate(job.updated_at)}
            </span>
          </div>
          <span className="jobcard-badge jobcard-badge-platform">Naukri</span>
        </div>
        <div className="jobcard-desc-label">Job Description</div>
        <div className="jobcard-description">
          {job.job_description
            ? truncate(job.job_description, 100)
            : truncate(job.recruit_skills_ai, 100)}
        </div>
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="jobcard-button"
        >
          View Job
        </a>
      </div>
    </div>
  );
};

export default JobCard;
