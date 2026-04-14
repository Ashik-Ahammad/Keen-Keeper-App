<<<<<<< HEAD
import React, { use, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Banner = ({ friendsPromise }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation speed
      once: true,     // animate only once
    });
  }, []);
=======
import React, { use } from "react";

const Banner = ({ friendsPromise }) => {
>>>>>>> 5c66a73576390d4acbcac8a6956f4a76182826a9

  const friends = use(friendsPromise);

  const onTrackCount = friends.filter(f => f.status === "on-track").length;

  const needAttentionCount = friends.filter(f => f.status !== "on-track").length;

  return (
<<<<<<< HEAD
    <div className="pb-12 " data-aos="fade-up">
      <div className="flex flex-col items-center justify-center text-center mt-16 px-4">
        <h1 data-aos="fade-right" className="text-4xl font-bold text-gray-800">
          Friends to keep close in your Life
        </h1>
        <p data-aos="fade-left" className="text-gray-500 mt-4 max-w-2xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button data-aos="zoom-in" className="btn bg-[#244D3F] hover:bg-info text-white mt-6 border-none">
=======
    <div className="pb-12">
      <div className="flex flex-col items-center justify-center text-center mt-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Friends to keep close in your Life
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] hover:bg-[#1a3a30] text-white mt-6 border-none">
>>>>>>> 5c66a73576390d4acbcac8a6956f4a76182826a9
          + Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto text-center mt-16 gap-4 border-b-2 pb-16 border-gray-100">

        <div className="bg-white px-4 py-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold text-[#244D3F]">{friends.length}</h3>
          <p className="text-gray-500 font-medium">Total Friends</p>
        </div>

        <div className="bg-white px-4 py-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold ">{onTrackCount}</h3>
          <p className="text-gray-500 font-medium">On Track</p>
        </div>

        <div className="bg-white px-4 py-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold ">{needAttentionCount}</h3>
          <p className="text-gray-500 font-medium">Need Attention</p>
        </div>

        <div className="bg-white px-4 py-8 rounded-2xl shadow-sm border border-gray-100">
<<<<<<< HEAD
          <h3 className="text-3xl font-bold ">24</h3>
=======
          <h3 className="text-3xl font-bold ">18</h3>
>>>>>>> 5c66a73576390d4acbcac8a6956f4a76182826a9
          <p className="text-gray-500 font-medium">Interactions</p>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;