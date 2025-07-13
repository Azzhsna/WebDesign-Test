import React from "react";
import coffeelatte from "../Asset/coffeelatte.jpeg";
import bottle from "../Asset/bottle.jpeg";
import beans from "../Asset/beans.jpeg";

function Shop() {
  return (
    <>
      <section id="Shop">
        <h2 className="section-title">Top Categories</h2>
        <div class="categories-container">
          <div class="category-card">
            <img
              src={coffeelatte}
              alt="coffeelatte"
              className="coffeelatte-img"
            />
            <h3>Coffee Latte</h3>
            <button class="view-more">View More</button>
          </div>
          <div class="category-card">
            <img src={bottle} alt="bottle" className="bottle-img" />
            <h3>Portable Coffee Bottles</h3>
            <button class="view-more">View More</button>
          </div>
          <div class="category-card">
            <img src={beans} alt="beans" className="beans-img" />
            <h3>Mocha Beans</h3>
            <button class="view-more">View More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
