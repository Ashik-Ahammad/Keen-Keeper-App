import React from "react";

const Banner = () => {
  return (
    <div className="pb-12">
      <div className=" flex flex-col items-center justify-center text-center mt-16">
        <h1 className="text-4xl font-bold">
          Friends to keep close in your Life
        </h1>
        <p className="text-gray-500 mt-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture <br />
          the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white mt-4">
          + Add a Friend
        </button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto text-center mt-16 gap-4 border-b-2 pb-16 border-gray-300">
        <div className="bg-base-100 px-4 py-8 rounded-lg shadow-md border border-gray-100  ">
          <h3 className="text-2xl font-semibold">10</h3>
          <p>Total Friends</p>
        </div>
        <div className="bg-base-100 px-4 py-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold">3</h3>
          <p>On Track</p>
        </div>
        <div className="bg-base-100 px-4 py-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold">6</h3>
          <p>Need Attention</p>
        </div>
        <div className="bg-base-100 px-4 py-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold">12</h3>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
