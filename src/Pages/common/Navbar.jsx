import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/MABOTEL.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Detect scroll and add a blurred class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close the mobile menu if the screen width is greater than or equal to 768px
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        className={`sticky flex justify-between items-center h-20 max-w-[1240px] m-auto px-4 shadow-sm ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <Link to="/">
          <img className="w-20" src={logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/" className="px-3 font-medium hover:text-[--orange]">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/about"
              className="px-3 font-medium hover:text-[--orange]"
            >
              About
            </Link>
          </li>
          <li className="p-4">
            <Link to="/team" className="px-3 font-medium hover:text-[--orange]">
              Team
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/contact"
              className="px-3 font-medium hover:text-[--orange]"
            >
              Contact
            </Link>
          </li>
          <li className="py-4 pl-4">
            <Link
              to="/nominate"
              className="px-4 py-3 text-[--white] font-lg rounded-lg bg-[--orange] hover:bg-[--orange-light]"
            >
              Nominate
            </Link>
          </li>
        </ul>

        {/* TOGGLE MENU AND CLOSE HAMBURGER MENU */}
        <div onClick={handleNav} className="md:hidden z-20 cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Overlay */}
        {nav && (
          <div
            onClick={handleNav}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          ></div>
        )}

        {/* MOBILE MODE */}
        <section
          className={`fixed top-0 right-0 w-[75%] h-full bg-white z-10 transition-transform duration-300 ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="mt-[6rem]">
            <li className="py-4">
              <Link
                to="/"
                className="text-xl font-medium text-[--orange] pl-10 pr-96 py-2"
                onClick={() => setNav(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/about"
                className="text-xl font-medium text-[--orange] pl-10 pr-80 py-2"
                onClick={() => setNav(false)}
              >
                About
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/team"
                className="text-xl font-medium text-[--orange] pl-10 pr-80 py-2"
                onClick={() => setNav(false)}
              >
                Team
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/contact"
                className="text-xl font-medium text-[--orange] pl-10 pr-80 py-2"
                onClick={() => setNav(false)}
              >
                Contact
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/nominate"
                className="text-[--white] text-xl bg-[--orange] pl-10 pr-80 py-2 hover:bg-[--orange-light]"
                onClick={() => setNav(false)}
              >
                Nominate
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default Navbar;
