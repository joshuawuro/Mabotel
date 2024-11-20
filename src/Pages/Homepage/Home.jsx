import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import ProgramOutline from "./ProgramOutline";
import Team from "./Team";
import Motivation from "./Motivation";
import ContactSection from "./ContactSection";

function Home() {
  return (
    <>
      <div>
        <div className="w-full mx-auto hero text-[--white] px-4 flex flex-col justify-center items-center text-center">
          <div>
            <h1 className="text-4xl lg:text-7xl font-bold py-4">
              <ReactTyped
                strings={["Recognizing", "Celebrating", "Empowering"]}
                typeSpeed={120}
                backSpeed={100}
                loop
              />{" "}
              <br />
              <span className="text-[--orange]">Youth Exvellence</span> in
              Wassaman
            </h1>
            <p className="pb-4">
              Recognizing and honoring the achievements of young individuals in
              academics, arts, sports, entrepreneurship, and community service.
            </p>
            <button className="text-[--orange] font-semibold bg-[--white] opacity-70 py-3 px-4 rounded-md">
              <Link to="/nominate">Nominate Now</Link>
            </button>
          </div>
        </div>
        <ProgramOutline />
        <Team />
        <Motivation />
        <ContactSection />
      </div>
    </>
  );
}

export default Home;
