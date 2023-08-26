import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Logout from "./pages/Logout";
// import AboutUs from "./pages/AboutUs";
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-items">
          <Link to="/aboutus">About Us</Link>
        </div>

        <div className="footer-link-items">
          <Link to="/">Contact Us</Link>
        </div>

        <div className="footer-link-items">
          <Link to="/">Inspiration</Link>
        </div>

        <div className="footer-link-items">
          <Link to="/">Logout</Link>
        </div>

        {/* <div className="footer-link-items">
            <Link>
            <button onClick={<Logout/>}>Logout</button></Link>
          </div> */}

        <div className="footer-link-items">
          <div className="website-rights-container">
            <small className="website-rights">Plant Assist © 2023</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
