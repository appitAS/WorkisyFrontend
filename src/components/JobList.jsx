import React, { useState, useEffect } from "react";
import jobStore from "../store/job-store";
import JobCard from "./JobCard";
import Loader from "./Loader";
import "./Styles/jobList.css";

const JobList = () => {
  const [user, setUser] = useState(null);
  const { jobs } = jobStore();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  // Calculate pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle redirect from backend after login
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectUrl = params.get("redirect");
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, []);

  // Truncate string to maxLen with ellipsis
  const truncate = (str, maxLen) => {
    if (!str) return "";
    return str.length > maxLen ? str.slice(0, maxLen) + "" : str;
  };

  // Format updated_at date to "Today", "1 Day Ago", or "X Days Ago"
  const formatDate = (dateStr) => {
    const updatedDate = new Date(dateStr);
    const now = new Date();
    const diffTime = now - updatedDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 Day Ago";
    return `${diffDays} Days Ago`;
  };

  // Format skills by replacing spaces with " - "
  const formatSkills = (skillsStr) => {
    if (!skillsStr) return "";
    // Remove extra spaces, split by spaces, join with ' - '
    const skillsArray = skillsStr.trim().split(/\s+/);
    return skillsArray.join(" - ");
  };

  

  // Generate page numbers for pagination
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show pages around current page
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="joblist-wrapper">
      <div className="joblist-container">
        {currentJobs.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {renderPageNumbers().map((number) => (
            <button
              key={number}
              className={`pagination-button ${
                currentPage === number ? "active" : ""
              }`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}

          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;
