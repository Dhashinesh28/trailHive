import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Your Ultimate
            <br />
            Outdoor
            <br />
            Companion
          </h1>
          <p>
            Are you tired of spending hours searching for the perfect hiking
            or biking trail? TrailHive - the ultimate outdoor adventure app
            that connects you with the best trails in your area.
          </p>
          <button className="hero-button">
            Download the app
          </button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="TrailHive outdoor adventure"/>
        </div>
      </div>
    </section>
  )
}