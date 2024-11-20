import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full h-[92vh] mx-auto flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-[--dark-gray] text-8xl font-bold">404</h1>
      <h2 className="font-semibold text-[--light-gray] text-2xl">
        Oops, This Page Not Found!
      </h2>
      <h3 className="text-[--light-gray]">the link might be corrupted</h3>
      <h4 className="text-sm pb-3">or the page may have been removed</h4>
      <button className="font-medium text-[--white] px-3 py-2 bg-[--orange] rounded hover:bg-[--orange-light]">
        <Link to="/">Go back home</Link>
      </button>
    </div>
  );
}

export default NotFound;
