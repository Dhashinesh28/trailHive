import React from "react";
import "./Testimonial.css";
import dellLogo from "./assets/dell logo.svg";
import zendeskLogo from "./assets/zendesk.svg";
import rakutenLogo from "./assets/logo-rakuten.svg";
import pacificLogo from "./assets/logo-pacific-funds.svg";
import latticeLogo from "./assets/Logo lattice.svg";
import ncrLogo from "./assets/Logo tel.svg";

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-content">
        <span className="testimonial-title">
          TESTIMONIAL
        </span>
        <h2>
          "TrailHive has completely changed the way I explore
          the outdoors. The personalized trail
          recommendations and virtual challenges have kept
          me motivated and engaged with my adventures."
        </h2>
        <p className="testimonial-name"> - John R.</p>
      </div>
      <div className="trusted-section">
        <p> Trusted by teams at over 1,000 of the world's leading organizations</p>
        <div className="company-logos">
          <img src={dellLogo} alt="Dell"/>
          <img src={zendeskLogo} alt="Zendesk"/>
          <img src={rakutenLogo} alt="Rakuten"/>
          <img src={pacificLogo} alt="Pacific Funds"/>
          <img src={ncrLogo} alt="NCR"/>
          <img src={latticeLogo} alt="Lattice"/>
        </div>
      </div>
    </section>
  )
}