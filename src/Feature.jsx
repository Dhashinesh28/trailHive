import React from "react";
import "./Feature.css";
import feature1 from "./assets/Feature-1.jpg";
import feature2 from "./assets/Feature-2.jpg";
import feature3 from "./assets/Feature-3.jpg";

export default function Feature() {
  return (
    <section className="features" id="features">
      <div className="feature-intro">
        <span>FEATURES</span>
        <h2>
          Stay Active
          <br />
          And Healthy
        </h2>
        <button>Learn more</button>
      </div>
      <div className="feature-card">
        <img src={feature1} alt="Access nature"/>
        <h3>Access nature</h3>
        <p>
          With TrailHive, you'll have access to a comprehensive database of
          trails, complete with detailed information on ratings, difficulty
          levels, and user reviews.
        </p>
      </div>
      <div className="feature-card">
        <img src={feature2} alt="Explore trails"/>
        <h3>Access nature</h3>
        <p>
          With TrailHive, you'll have access to a comprehensive database of
          trails, complete with detailed information on ratings, difficulty
          levels, and user reviews.
        </p>
      </div>
      <div className="feature-card">
        <img src={feature3} alt="Outdoor adventure"/>
        <h3>Access nature</h3>
        <p>
          With TrailHive, you'll have access to a comprehensive database of
          trails, complete with detailed information on ratings, difficulty
          levels, and user reviews.
        </p>
      </div>
    </section>
  )
}