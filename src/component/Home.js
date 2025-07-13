import React, { useEffect, useState, useRef } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import coffemason from "../Asset/coffemason.png";

function Header() {
  const [rotation, setRotation] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
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
      <div
        className={`navbar transition-transform duration-500 ${
          showNavbar ? "navbar--visible" : "navbar--hidden"
        }`}
      >
        <div className="navbar-left">
          <a href="Home" className="cursor-pointer hover:text-[#e26a32]">
            Home
          </a>
          <a href="#Services" className="cursor-pointer hover:text-[#e26a32]">
            Services
          </a>
          <a href="#About" className="cursor-pointer hover:text-[#e26a32]">
            About Us
          </a>
          <a href="#Shop" className="cursor-pointer hover:text-[#e26a32]">
            Shop
          </a>
          <a href="#Portofolio" className="cursor-pointer hover:text-[#e26a32]">
            Portfolio
          </a>
          <a href="#Blog" className="cursor-pointer hover:text-[#e26a32]">
            Blog
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-[#e26a32]">
            Contact
          </a>
        </div>
        <div className="navbar-right">
          <FiUser className="icon" />
        </div>
      </div>

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
    </>
  );
}

export default Header;
