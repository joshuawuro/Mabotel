import { Link } from "react-router-dom";
import HeadOfPlanningCommittee from "../../assets/hd-pln-cmttee.jpg";
import CEO from "../../assets/ceo-fnder.jpg";
import HeadOfMedia from "../../assets/hd-md-pblct.jpg";

function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team behind the Wassaman Youth Excellence Awards.
            Our passionate and committed team works tirelessly to recognize and
            celebrate the outstanding achievements of young individuals in the
            Wassaman region.{" "}
            <Link
              to="/team"
              className="text-[--orange] hover:text-[--orange-light] font-semibold"
            >
              Read more &rarr;
            </Link>
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src={HeadOfPlanningCommittee}
              alt="Mrs. Grace Boadu"
              className="mx-auto rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-800">
              Mrs. Grace Boadu
            </h3>
            <p className="text-sm text-[--orange]">
              Head of Planning Committee, Wassaman Youth Excellence Awards
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src={CEO}
              alt="Mr. Mensah Appiah"
              className="rounded-2xl mx-auto object-cover"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-800">
              Mr. Mensah Appiah
            </h3>
            <p className="text-sm text-[--orange]">
              CEO, Founder of Wassaman Youth Excellence Awards
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src={HeadOfMedia}
              alt="Mr. Francis Danso"
              className="mx-auto rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-800">
              Mr. Francis Danso
            </h3>
            <p className="text-sm text-[--orange]">
              Head of Media and Publicity, Wassaman Youth Excellence Awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
