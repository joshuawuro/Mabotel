import BackgroundImage from "../../assets/working-bg.jpg";
const ComingSoon = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `linear-gradient(#000000c0, #000000c0), url(${BackgroundImage})`,
      }}
    >
      <div className="flex items-center justify-center h-80 bg-gray-100 rounded-2xl">
        <div className="text-center p-8">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-[--text-gray] mb-4">
            Coming Soon
          </h1>
          {/* Subtitle */}
          <p className="text-lg text-[--text-light-gray] mb-2">
            We're working on something fantastic!
          </p>
          <p className="text-md text-[--text-light-gray] mb-6">
            We will be here soon. Subscribe to be notified.
          </p>
          {/* Subscription Button */}
          <button className="px-6 py-3 bg-[--orange] text-white rounded-md font-medium shadow-md hover:bg-[--orange-light] transition">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
