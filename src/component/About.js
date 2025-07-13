import React, { useState } from "react";
import aboutmason from "../Asset/aboutmason.png";
import leftbeans from "../Asset/leftbeans.png";
import rightbeans from "../Asset/rightbeans.png";
function About() {
  return (
    <>
      <section id="About">
        <div className="about-mason">
          <img src={aboutmason} alt="about mason" className="about-img" />
          <div className="about-text">
            <div className="text-wrapper">
              <h2>About Mason</h2>
              <p>
                Mason Cafe is where quality coffee meets warm atmosphere. Since
                2020, we’ve served specialty coffee with carefully selected
                beans and strong support for local farmers. More than just a
                café, we are a space to connect, learn, and enjoy every sip.
                Whether you're here for a quiet morning ritual, an inspiring
                conversation, or a cozy workspace, Mason Cafe welcomes you like
                home. Every cup we serve tells a story — of craftsmanship,
                community, and comfort.
              </p>
            </div>
          </div>
        </div>
        <div className="promo-circle">
          <p>
            <strong>Let’s join the club</strong>
            <br></br>
            <span>and enjoy special rewards</span>
          </p>
        </div>
        {/* OPEN HOURS */}
        <div className="open-hours-section">
          <img src={leftbeans} alt="beans left" className="beans-left" />

          <div className="open-hours-content">
            <h2>Open Hours</h2>
            <p className="open-hours">We're open for your daily coffee fix!</p>
            <br></br>
            <div className="hours">
              <p>☕ Mon – Fri: 08:00 AM – 09:00 PM</p>
              <p>☕ Sat – Sun: 09:00 AM – 10:00 PM</p>
            </div>
            <br></br>
            <p className="location">📍 Jl. Kopi No. 45, Jakarta Selatan</p>
            <br></br>
            <button className="direction-btn">Get Directions</button>
          </div>
          <img src={rightbeans} alt="beans right" className="beans-right" />
        </div>
      </section>
    </>
  );
}
export default About;
