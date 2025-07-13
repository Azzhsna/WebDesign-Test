import React from "react";

const testimonials = [
  {
    name: "Different Beans",
    message: "has high standards for roasting and serving their beans.",
  },
  {
    name: "Barista Enthusiast",
    message: "one of the best coffee shops I’ve visited in Jakarta!",
  },
  {
    name: "Local Customer",
    message: "I love the cozy atmosphere and unique flavors.",
  },
  {
    name: "Coffee Lover",
    message: "Great coffee and a relaxing vibe. Highly recommended!",
  },
  { name: "Freelancer", message: "Perfect place to work and sip espresso!" },
];

function Testimoni() {
  const duplicated = [...testimonials, ...testimonials]; // untuk looping mulus

  return (
    <section id="Blog">
      <section className="testimoni-section">
        <div className="Testimoni">
          <h2 className="testimoni-title">What Our Customers Are Saying</h2>
        </div>

        <div className="overflow-hidden w-full">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicated.map((item, idx) => (
              <div key={idx} className="testimoni-card mx-3">
                <p className="testimoni-message">"{item.message}"</p>
                <p className="testimoni-name">– {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Testimoni;
