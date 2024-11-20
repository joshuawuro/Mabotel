import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="w-full lg:max-w-[1240px] hero text-[--white] px-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold py-4">
          <ReactTyped
            strings={["Recognizing", "Celebrating", "Empowering"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />{" "}
          <span className="text-[--orange]">Youth Exvellence</span> in Wassaman
        </h1>
        <p className="pb-4">
          Recognizing and honoring the achievements of young individuals in
          academics, arts, sports, entrepreneurship, and community service.
        </p>
        <button className="text-[--orange] font-semibold bg-[--white] opacity-70 py-3 px-4 rounded-md">
          <Link to="/nominate">Nominate Now</Link>
        </button>
      </div>
    </>
  );
}

export default Hero;
