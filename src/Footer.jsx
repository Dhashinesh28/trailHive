import React from "react";
import "./Footer.css";
import logo from "./assets/logo.svg";
import insta from "./assets/insta.svg";
import twiter from "./assets/twiter.svg";
import fb from "./assets/fb.svg";
import linkedin from "./assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="TrailHive" />
          <span>TrailHive</span>
        </div>
        <div className="footer-column">
          <h4>App</h4>
          <a href="#">Features</a>
          <a href="#">Benefits</a>
          <a href="#">Pricing</a>
          <a href="#">Explore</a>
          <a href="#">Trails</a>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
          <a href="#">Support</a>
          <a href="#">Members</a>
        </div>
        <div className="footer-subscribe">
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email"/>
            <button>Subscribe</button>
          </div>
          <p> By subscribing you agree to their
            <a href="#"> Privacy Policy</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2023 TrailHive. All rights reserved.</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
        <div className="footer-social">
          <a href="#">
            <img src={fb} alt="Facebook"/>
          </a>
          <a href="#">
            <img src={insta} alt="Instagram"/>
          </a>
          <a href="#">
            <img src={twiter} alt="Twitter"/>
          </a>
          <a href="#">
            <img src={linkedin} alt="LinkedIn"/>
          </a>
        </div>
      </div>
    </footer>
  )
}