import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTikTok,
} from "react-icons/ai";

const ContactSection = () => {
  return (
    <div className="bg-[--white] text-center py-20 px-5">
      <h2 className="text-2xl lg:text-5xl font-bold text-[--orange] mb-4">
        GET ANSWERS TO ALL YOUR QUESTIONS <br />
        YOU MIGHT HAVE.
      </h2>
      <p className="text-gray-700 mb-6">
        We will address any questions you have about the Wassaman Youth
        Excellence Awards and the related programs and services.
      </p>
      <button className="bg-[--orange] text-[--white] py-2 px-6 rounded-md hover:bg-[--orange-light] transition duration-300">
        <Link to="/contact">CONTACT US</Link>
      </button>
      <div className="flex justify-center gap-4 mt-6 text-3xl text-[--orange]">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-[--orange-light] transition duration-300"
          target="_blank"
        >
          <AiFillFacebook />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-[--orange-light] transition duration-300"
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="#"
          aria-label="TikTok"
          className="hover:text-[--orange-light] transition duration-300"
          target="_blank"
        >
          <AiFillTikTok />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
