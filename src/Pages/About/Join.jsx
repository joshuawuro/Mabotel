import joinUsImage from "../../assets/join-us.jpg";

function Join() {
  return (
    <div className="pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[--text-gray] my-4">
            Join Us
          </h2>
          <p className="text-[--text-light-gray] leading-relaxed mb-4">
            Become a part of the Wassaman Youth Excellence Awards community!
            Whether you're a young achiever, supporter, or stakeholder, we
            welcome you to join us in our mission to recognize and empower the
            next generation of leaders.
          </p>
          <ul className="list-disc list-inside text-[--text-light-gray] space-y-3">
            <li>Connect with like-minded individuals.</li>
            <li>Participate in exclusive events and programs.</li>
            <li>Contribute to the growth and development of young talent.</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-[--orange] text-white rounded-md font-medium shadow-md hover:bg-[--orange-light] transition">
            Join Us Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={joinUsImage}
            alt="Join Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Join;
