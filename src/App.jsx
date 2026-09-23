import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./Feature";
import Testimonial from "./Testimonial";
import HeroStack from "./HeroStack";
import SecondTestimonial from "./SecondTestimonial";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Feature />
      <Testimonial />
      <HeroStack />
      <SecondTestimonial />
      <Footer />
    </div>
  )
}


