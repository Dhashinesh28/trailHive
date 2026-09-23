import React from "react";
import "./HeroStack.css";
import trailImage from "./assets/Herostack.jpg";

export default function HeroStack() {
  return (
    <div className="hero-stack">
      <section className="trail-section">
        <h2>
          Find new trails to explore and
          <br />
          adventures to embark on.
        </h2>
        <img src={trailImage} alt="Hiking trail" />
      </section>
    </div>
  )
}