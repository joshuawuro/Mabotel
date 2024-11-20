import outcomeImage from "../../assets/outcome-image.jpg";

function Outcome() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={outcomeImage}
            alt="Expected Outcome"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[--text-gray] mb-4">
            Expected Outcome
          </h2>
          <p className="text-[--text-light-gray] leading-relaxed mb-4">
            By recognizing and celebrating the achievements of young
            individuals, the Wassaman Youth Excellence Awards aims to foster a
            culture of excellence and community support in the Wassaman region.
            We believe that honoring these young talents will have the following
            positive impacts:
          </p>
          <ul className="list-disc list-inside text-[--text-light-gray] space-y-3">
            <li>
              Enhanced recognition of young talent and contributions in the
              region.
            </li>
            <li>Increased motivation among youth to pursue excellence.</li>
            <li>Stronger community support for youth initiatives.</li>
            <li>
              Creation of a network of young achievers who can collaborate on
              future projects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Outcome;
