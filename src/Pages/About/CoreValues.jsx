import { AiOutlineEye, AiOutlineBulb, AiOutlineHeart } from "react-icons/ai";

function CoreValues() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[--text-gray] mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-[--white] shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AiOutlineEye className="text-[--orange] text-2xl mr-2" />
              <h3 className="text-xl font-semibold text-[--orange]">Vision</h3>
            </div>
            <p className="text-[--text-light-gray] leading-relaxed">
              To be the leading organization in empowering young individuals to
              achieve excellence in academics, arts, sports, entrepreneurship,
              and community service.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[--white] shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AiOutlineBulb className="text-[--orange] text-2xl mr-2" />
              <h3 className="text-xl font-semibold text-[--orange]">Mission</h3>
            </div>
            <p className="text-[--text-light-gray] leading-relaxed">
              To inspire and recognize the achievements of young individuals by
              providing opportunities, resources, and a platform for growth and
              success.
            </p>
          </div>

          {/* Values */}
          <div className="bg-[--white] shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AiOutlineHeart className="text-[--orange] text-2xl mr-2" />
              <h3 className="text-xl font-semibold text-[--orange]">Values</h3>
            </div>
            <ul className="list-disc list-inside text-[--text-light-gray] space-y-2">
              <li>Integrity and fairness</li>
              <li>Empowerment and growth</li>
              <li>Community engagement</li>
              <li>Excellence in every endeavor</li>
              <li>Innovation and creativity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
