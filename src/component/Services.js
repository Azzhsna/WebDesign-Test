import React from "react";
import coffeebar from "../Asset/coffeebar.png";

function Services() {
  return (
    <section id="Services">
      <div className="mason-services">
        <h2>Why People Choose Our Services?</h2>

        <div className="our-services">
          {[
            "Specialty Coffee Bar",
            "Coffee Classes & Workshops",
            "Event & Space Rental",
            "Merch & Beans Shop",
          ].map((title, index) => (
            <div key={index} className="service1">
              <img src={coffeebar} alt="coffee bar" className="coffeebar-img" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
