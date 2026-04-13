import React from "react";
import { Link } from "react-router";

const Friend = ({ friend }) => {
  const { id, name, days_since_contact, tags, status, picture } = friend;

  return (
    <Link to={`/friend/${id}`} >
      <div className="bg-base-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer">
        <div className="flex justify-center">
          <img
            src={picture}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">{name}</h2>

        <p className="text-gray-500 text-sm mt-1">{days_since_contact}d ago</p>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1 text-sm rounded-full bg-[#cbfadb] text-[#244D3F] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-3">
          <span
            className={`px-4 py-1 text-sm rounded-full text-white font-semibold capitalize ${
              status === "overdue"
                ? "bg-red-700"
                : status === "almost due"
                  ? "bg-yellow-500"
                  : status === "on-track"
                    ? "bg-green-800"
                    : "bg-gray-600"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Friend;
