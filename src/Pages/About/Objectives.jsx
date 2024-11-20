import React from "react";

function Objectives() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[--text-gray] mb-8">
          Our Objectives
        </h2>
        <div className="space-y-6">
          {/* Objective 1 */}
          <div className="flex items-start">
            <span className="text-2xl mr-3">🏅</span>
            <p className="text-[--text-light-gray] leading-relaxed">
              <strong>Recognition:</strong> We acknowledge and reward the
              remarkable accomplishments of young individuals in the Wassaman
              region.
            </p>
          </div>

          {/* Objective 2 */}
          <div className="flex items-start">
            <span className="text-2xl mr-3">🌠</span>
            <p className="text-[--text-light-gray] leading-relaxed">
              <strong>Inspiration:</strong> We aim to inspire and motivate other
              young people to pursue excellence in their respective fields.
            </p>
          </div>

          {/* Objective 3 */}
          <div className="flex items-start">
            <span className="text-2xl mr-3">📣</span>
            <p className="text-[--text-light-gray] leading-relaxed">
              <strong>Awareness:</strong> We raise awareness about the potential
              and significant contributions of youth to the development of our
              region.
            </p>
          </div>

          {/* Objective 4 */}
          <div className="flex items-start">
            <span className="text-2xl mr-3">📣</span>
            <p className="text-[--text-light-gray] leading-relaxed">
              <strong>Networking:</strong> We provide a platform for young
              achievers to connect, share ideas, and collaborate on future
              projects.
            </p>
          </div>

          {/* Objective 5 */}
          <div className="flex items-start">
            <span className="text-2xl mr-3">💪</span>
            <p className="text-[--text-light-gray] leading-relaxed">
              <strong>Support:</strong> We seek to garner support from various
              stakeholders for youth development initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objectives;
