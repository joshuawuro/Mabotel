import BackgroundImage from "../../assets/contact-hero.jpg";

function ContactHero() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(#00000080, #00000080), url(${BackgroundImage})`,
        }}
      >
        <h1 className="text-[--white] text-4xl md:text-6xl font-bold">
          Contact Us
        </h1>
      </div>
    </>
  );
}

export default ContactHero;
