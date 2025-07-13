import React from "react";
import ekspresso from "../Asset/ekspresso.png";
import brewhacks from "../Asset/brewhacks.png";
import icecoffee from "../Asset/icecoffee.jpeg";

function Blog() {
  return (
    <>
      <section id="Blog">
        <div className="Blog">
          <h2 className="Blog-title">Brew Stories</h2>

          <div className="story-grid">
            <div className="story-card">
              <div className="story-image-wrapper">
                <img
                  src={brewhacks}
                  alt="Brew Hack"
                  className="brewhacks-img"
                />
              </div>
              <div className="story-content">
                <h3>Easy Brew Hacks for Your Chill Morning</h3>
                <p>
                  No fancy machine? no problem. Here’s how to brew smooth,
                  café-level coffee right from your kitchen—zero stress.
                </p>
                <button className="see-more">See More</button>
              </div>
            </div>

            <div className="story-card">
              <div className="story-image-wrapper">
                <img
                  src={ekspresso}
                  alt="Espresso Vibe"
                  className="ekspresso-img"
                />
              </div>
              <div className="story-content">
                <h3>Espresso or Pour Over — What’s Your Vibe?</h3>
                <p>
                  Some like it strong, some like it slow. Find out which coffee
                  style matches your mood (and your playlist).
                </p>
                <button className="see-more">See More</button>
              </div>
            </div>

            <div className="story-card">
              <div className="story-image-wrapper">
                <img
                  src={icecoffee}
                  alt="Iced Coffee"
                  className="icecoffee-img"
                />
              </div>
              <div className="story-content">
                <h3>
                  Iced, Shaken, Blissed Out: Cool Coffee Tricks to Beat the Heat
                </h3>
                <p>
                  Hot day? Cool down with easy iced coffee ideas that don’t
                  taste like watered-down regret. Fresh, bold, and no blender
                  required.
                </p>
                <button className="see-more">See More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
