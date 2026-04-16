import React from "react";
import { Link } from "react-router";
import { RiArrowGoBackFill } from "react-icons/ri";
import notFoundIcon from "../../assets/404error.webm";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <video
        src={notFoundIcon}
        autoPlay
        loop
        muted
        playsInline
        className="w-56"
      />
      <p className="my-5 text-3xl">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
      >
        <span className="flex items-center gap-x-2">
          <RiArrowGoBackFill />
          Go Back Home
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
