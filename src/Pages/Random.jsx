import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Mobile menu icon
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import logo from "../assets/MABOTEL.png";

const Random = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Create a reference to the mobile menu
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);

  // Handle scroll event to add/remove glassmorphism and change position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Close menu if clicked outside of the mobile menu
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        overlayRef.current &&
        !overlayRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "fixed top-0 left-0 w-full z-50 bg-opacity-40 backdrop-blur-lg border-b border-gray-200"
          : "relative bg-[#262626]"
      } transition-all ease-in-out duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="w-20" src={logo} alt="logo" />
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6 items-center text-[--white]">
          <Link
            to="/"
            className="px-3 font-medium hover:text-[--orange] transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 font-medium hover:text-[--orange] transition"
          >
            About
          </Link>
          <Link
            to="/team"
            className="px-3 font-medium hover:text-[--orange] transition"
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="px-3 font-medium hover:text-[--orange] transition"
          >
            Contact
          </Link>
          <Link
            to="/nominate"
            className="px-4 py-3 text-[--white] font-lg rounded-lg bg-[--orange] hover:bg-[--orange-light]"
          >
            Nominate
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-white text-2xl" />
            ) : (
              <AiOutlineMenu className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Dark Overlay when Menu is Open */}
      {isMobileMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-64 h-full bg-white bg-opacity-90 backdrop-blur-lg p-6 transform transition-all ease-in-out duration-300 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <Link
            to="/"
            className="text-[--text-gray] text-xl font-semibold hover:text-[--orange] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[--text-gray] text-xl font-semibold hover:text-[--orange] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-[--text-gray] text-xl font-semibold hover:text-[--orange] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-[--text-gray] text-xl font-semibold hover:text-[--orange] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Random;
