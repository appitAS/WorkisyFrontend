import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Search from "./components/Serach";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs.jsx";
import OurTeam from "./components/OurTeams.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ourTeam" element={<OurTeam />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
