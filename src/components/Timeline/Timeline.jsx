import React, { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineVideoCall, MdTextsms } from "react-icons/md";

const Timeline = () => {
  const { activities } = useContext(TimelineContext);

  return (
    <div className="p-4 sm:p-6 mt-6 md:mt-10 min-h-screen w-11/12 md:w-9/12 lg:w-7/12 mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Timeline</h1>

      <div className="mb-6">
        <select defaultValue="Filter Timeline" className="select w-full sm:w-auto">
          <option disabled={true}>Filter Timeline</option>
          <option>Text</option>
          <option>Call</option>
          <option>Video</option>
        </select>
      </div>

      {activities.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        <div className="space-y-4">
          {activities.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="border-r-2 pr-3">
                {item.type.toLowerCase() === "call" ? (
                  <FiPhoneCall className="text-xl sm:text-2xl text-green-800" />
                ) : item.type.toLowerCase() === "video" ? (
                  <MdOutlineVideoCall className="text-xl sm:text-2xl text-accent" />
                ) : (
                  <MdTextsms className="text-xl sm:text-2xl text-info" />
                )}
              </div>
              <div>
                <h2 className="font-semibold text-base sm:text-lg">
                  <span className="text-gray-700 font-extrabold text-lg sm:text-xl md:text-2xl">
                    {item.type}
                  </span>{" "}
                  with{" "}
                  <span className="text-lg sm:text-xl md:text-2xl text-green-800">
                    {item.name}
                  </span>
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;