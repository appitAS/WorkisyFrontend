import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobStore from "../store/job-store";
import "./Styles/Search.css";
import axios from "axios";
import Loader from "./Loader";
import { Bot, Settings2, SearchCheck, Globe } from "lucide-react";

function Search() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setJobs } = jobStore();
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchInput.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://genai-api.workisy.com/api/search_jobs",
        {
          query: searchInput,
        }
      );

      if (response.data.length > 0) {
        setJobs(response.data);
        navigate("/jobs");
        console.log("response.data", response.data);
      }

      console.log("No jobs found", response.data);
    } catch (err) {
      console.error("Search API Error:", err);
      setError("Failed to fetch jobs");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFileAttach = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("File uploading:", file.name);
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await axios.post(
        "https://genai-api.workisy.com/api/upload_resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setJobs(response.data); // ✅ set job results from resume response
      navigate("/jobs");
    } catch (err) {
      console.error("Upload API Error:", err);
      setError("Resume upload failed");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="workisy-ai-job-serach-box-main-container">
      <div className="workisy-ai-job-serach-box-container">
        <h2 className="workisy-ai-job-serach-box-h2">
          Introducing{" "}
          <span className="workisy-ai-job-serach-box-highlight">
            AI-Powered
          </span>{" "}
          Job Search Engine
        </h2>
        <p className="workisy-ai-job-serach-box-subheading">
          Direct Access <strong style={{ color: "orange" }}>12,70,000</strong>{" "}
          Jobs World Wide
        </p>

        <div className="workisy-ai-job-serach-box-search-box">
          <label htmlFor="job-search">Ask Like</label>
          <div>
            <div className="workisy-ai-job-serach-box-input-group">
              <input
                type="text"
                id="job-search"
                placeholder="Looking java jobs in delhi 7 years exp 10 LPA"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <button
                className="workisy-ai-job-serach-box-search-btn"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <>Searching</> : "Search"}
              </button>
            </div>
            <div className="bottom-left-button-group">
              <button>
                <a
                  href="https://ai-job-frontend-five.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} style={{ marginRight: 6 }} />
                  Web Job Search
                </a>
              </button>
              <button>
                <a
                  href="https://aijobs.workisy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Settings2 size={16} style={{ marginRight: 6 }} />
                  Algorithm Job Search
                </a>
              </button>
              <button>
                <a
                  href="http://Jobiq.workisy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SearchCheck size={16} style={{ marginRight: 6 }} />
                  Scraping Job Search
                </a>
              </button>
              <button>
                <a
                  href="https://workisy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Bot size={16} style={{ marginRight: 6 }} />
                  Model Job Search
                </a>
              </button>
            </div>
          </div>
        </div>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {loading && (
          <div className="fullscreen-loader-overlay">
            <Loader />
          </div>
        )}
        <div className="workisy-ai-job-serach-box-divider">
          <span>Or</span>
        </div>

        <h3>Upload Your Resume</h3>

        <div className="workisy-ai-job-serach-box-file-upload-wrapper">
          <label
            htmlFor="file-upload"
            className="workisy-ai-job-serach-box-upload-btn"
          >
            <i className="fa fa-paperclip"></i>
            <span id="file-label">Attach Your File Here</span>
          </label>
          <input type="file" id="file-upload" onChange={handleFileAttach} />
        </div>

        <p className="workisy-ai-job-serach-box-footer-text">
          Let AI do the work! Get the best job recommendations for you
        </p>
      </div>
    </div>
  );
}

export default Search;
