import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold">WYEA</h2>
          <p className="text-[--text-light-gray] mt-2">
            Recognizing and honoring the achievements of young individuals in
            academics, arts, sports, entrepreneurship, and community service.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                to="/"
                className="text-[--text-light-gray] hover:text-[--orange]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[--text-light-gray] hover:text-[--orange]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="text-[--text-light-gray] hover:text-[--orange]"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/nominate"
                className="text-[--text-light-gray] hover:text-[--orange]"
              >
                Nominate
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[--text-light-gray] hover:text-[--orange]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="text-[--text-light-gray] mt-2">
            <span className="font-bold">Email:</span> wassamanyea@gmail.com
          </p>
          <p className="text-[--text-light-gray] mt-2">
            <span className="font-bold">Follow Us:</span>
          </p>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-[--text-light-gray] hover:text-[--orange]"
              >
                🌐 Wassaman Youth Excellence Awards
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[--text-light-gray] hover:text-[--orange]"
              >
                📸 Wassamanyea_official
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-[--text-gray] my-8" />
      <p className="text-center text-[--text-light-gray] text-sm">
        Copyright ©2024. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
