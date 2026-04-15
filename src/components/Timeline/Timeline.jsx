import React, { useContext, useEffect, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { MessageSquareMore, PhoneCall, Video } from "lucide-react";

const Timeline = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const { activities } = useContext(TimelineContext);

  const [filter, setFilter] = useState("All");

  const filteredActivities = filter === "All" ? activities : activities.filter((item) => item.type === filter);

  const sortedActivities = [...filteredActivities]

  return (
    <div className="p-4 sm:p-6 mt-6 md:mt-10 min-h-screen w-full md:w-9/12 lg:w-7/12
overflow-x-hidden mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Timeline</h1>

      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select w-full sm:w-auto"
        >
          <option value="All">Filter Timeline</option>
          <option value="Text">Text</option>
          <option value="Call">Call</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {sortedActivities.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        <div className="space-y-4"
         data-aos="fade-up">
          {sortedActivities.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="border-r-2 pr-3">
                {item.type.toLowerCase() === "call" ? (
                     <PhoneCall className="text-xl sm:text-2xl text-green-800" />
                ) : item.type.toLowerCase() === "video" ? (
                  <Video className="text-xl sm:text-2xl text-accent" />
                ) : (
                  <MessageSquareMore className="text-xl sm:text-2xl text-info" />
                )}
              </div>

              <div>
                <h2 className="font-semibold text-base sm:text-lg">
                  <span className="text-gray-700 font-extrabold text-lg sm:text-xl md:text-2xl">
                    {item.type}&nbsp;
                  </span>
                  with&nbsp;
                  <span className="text-lg sm:text-xl md:text-2xl text-green-800">
                    {item.name}
                  </span>
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {new Date(item.date).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
