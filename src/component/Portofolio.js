import React from "react";
import coffeeclass from "../Asset/coffeeclass.png";
import coffeeclass2 from "../Asset/coffeeclass2.jpeg";
import exhibition from "../Asset/exhibition.png";
import workshop from "../Asset/workshop.png";

function Portofolio() {
  return (
    <>
      <section id="Portofolio">
        <div className="porto">
          <h2 className="porto-title">Latest Event</h2>
          <div className="event-grid">
            <div className="event-large">
              <img
                src={coffeeclass}
                alt="coffee class"
                className="coffeeclass-img"
              />
              <div className="overlay-text">Coffee Classes</div>
            </div>
            <div className="event-small">
              <div className="small-item">
                <img
                  src={exhibition}
                  alt="exhibition"
                  className="exhibition-img"
                />
                <div className="overlay-text">Exhibition</div>
              </div>
              <div className="small-item">
                <img src={workshop} alt="workshop" className="workshop-img" />
                <div className="overlay-text">Workshop</div>
              </div>
            </div>
            <div className="event-large">
              <img
                src={coffeeclass2}
                alt="coffee class"
                className="coffeeclass-img"
              />
              <div className="overlay-text">Coffee Classes</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portofolio;
