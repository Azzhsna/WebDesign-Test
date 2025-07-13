import React, { useEffect, useState, useRef } from "react";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import coffemason from "../Asset/coffemason.png";

function Header() {
  const [rotation, setRotation] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setRotation(y % 360);
      setVisible(y < 500);

      if (y > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {" "}
      <section id="Home">
        <nav
          className={`navbar transition-transform duration-500 ${
            showNavbar ? "navbar--visible" : "navbar--hidden"
          }`}
        >
          {/* Mobile Navbar */}
          <div className="mobile-navbar-container">
            <div className="text-xl font-bold">Mason Coffee</div>
            <div className="flex items-center gap-4">
              <FiUser className="icon" />
              {menuOpen ? (
                <FiX
                  className="icon"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                />
              ) : (
                <FiMenu
                  className="icon"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
                />
              )}
            </div>
          </div>

          <div className="navbar-top">
            <a href="#Home">Home</a>
            <a href="#Services">Services</a>
            <a href="#About">About Us</a>
            <a href="#Shop">Shop</a>
            <a href="#Portofolio">Portfolio</a>
            <a href="#Blog">Blog</a>
            <a href="#Contact">Contact</a>
          </div>
          {menuOpen && (
            <div className="mobile-menu md:hidden">
              <a href="#Home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#Services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#About" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
              <a href="#Shop" onClick={() => setMenuOpen(false)}>
                Shop
              </a>
              <a href="#Portofolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </a>
              <a href="#Blog" onClick={() => setMenuOpen(false)}>
                Blog
              </a>
              <a href="#Contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="cafe-name">
          <p>Welcome to</p>
          <h1>Mason Coffee</h1>
          <p>Taste of Authentic Beans</p>
        </div>
        {visible && (
          <img
            src={coffemason}
            alt="Coffee Splash"
            className="coffeemason-img"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        )}
      </section>
    </>
  );
}

export default Header;
