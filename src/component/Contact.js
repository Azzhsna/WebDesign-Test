import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Subscribed with: " + email);
      setEmail("");
    }
  };

  return (
    <section id="Contact">
      <footer className="footer">
        <div className="footer-container">
          <div>
            <h2 className="footer-title">Mason Coffee</h2>
            <p className="footer-text">Jl. Kopi No. 45, Jakarta Selatan</p>
            <p className="footer-text">+62 812-3456-7890</p>
            <p className="footer-text">hello@masoncafe.id</p>

            <div className="footer-icons">
              <FaInstagram className="footer-icon" />
              <FaTwitter className="footer-icon" />
              <FaFacebookF className="footer-icon" />
            </div>
          </div>

          <div>
            <h3 className="footer-subscribe-title">
              Subscribe and Stay Updated
            </h3>
            <p className="footer-subscribe-text">
              Get the latest brews, promos, and freebies. Drop your email!
            </p>
            <div className="footer-input-wrapper">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="footer-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="footer-submit" onClick={handleSubmit}>
                ➜
              </button>
            </div>
            {error && <p className="footer-error">{error}</p>}
          </div>
        </div>

        <div className="footer-line"></div>
        <p className="footer-copy">
          &copy; 2025 Mason Cafe. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Contact;
