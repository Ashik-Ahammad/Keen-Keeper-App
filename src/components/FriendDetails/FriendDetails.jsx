import { FaBoxArchive } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { MdOutlineVideoCall, MdTextsms } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useLoaderData } from "react-router";

const FriendDetails = () => {
  const friend = useLoaderData();

  const getStatusColor = (status) => {
    if (status === "on-track") return "bg-green-500";
    if (status === "almost due") return "bg-yellow-500";
    if (status === "overdue") return "bg-red-500";
  };

  return (
    <div className="p-6 mt-10 min-h-screen w-9/12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />

          <h2 className="text-xl font-bold">{friend.name}</h2>

          <div
            className={`inline-block px-3 py-1 text-white text-sm rounded-full mt-2 ${getStatusColor(
              friend.status,
            )}`}
          >
            {friend.status}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4 italic">"{friend.bio}"</p>

          <p className="text-gray-400 mt-3">{friend.email}</p>

          <div className="mt-6 space-y-3">
            <button className="w-full border py-2 rounded-lg hover:bg-gray-100">
              <span className="flex flex-row gap-x-2 items-center justify-center"><HiOutlineBellSnooze /> Snooze 2 Weeks</span>
            </button>
            <button className="w-full border py-2 rounded-lg hover:bg-gray-100">
                <span className="flex flex-row gap-x-2 items-center justify-center">
              <FaBoxArchive />
              Archive
                </span>
            </button>
            <button className="w-full border py-2 rounded-lg text-red-500 hover:bg-red-50">
                <span className="flex flex-row gap-x-2 items-center justify-center">
              <RiDeleteBin5Line />
              Delete
                </span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h2 className="text-2xl font-bold">
                {friend.days_since_contact}
              </h2>
              <p className="text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h2 className="text-2xl font-bold">{friend.goal}</h2>
              <p className="text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 text-center">
              <h2 className="text-xl font-bold">
                {new Date(friend.next_due_date).toDateString()}
              </h2>
              <p className="text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Relationship Goal</h3>
              <p className="text-gray-500">Connect every {friend.goal} days</p>
            </div>
            <button className="border px-4 py-1 rounded hover:bg-gray-100">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button className="border p-4 rounded-lg hover:bg-gray-100">
                <span className="flex flex-col items-center justify-center">
                  <FiPhoneCall />
                  <p>Call</p>
                </span>
              </button>
              <button className="border p-4 rounded-lg hover:bg-gray-100">
                <span className="flex flex-col items-center justify-center">
                  <MdTextsms />
                  <p>Text</p>
                </span>
              </button>
              <button className="border p-4 rounded-lg hover:bg-gray-100">
                <span className="flex flex-col items-center justify-center">
                  <MdOutlineVideoCall />
                  <p>Video</p>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
