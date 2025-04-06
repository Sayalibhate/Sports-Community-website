import React from "react";
import { IoLocationSharp, IoPeopleSharp, IoFootballSharp } from "react-icons/io5"; // Added IoFootballSharp for sports icon

const formatMembersCount = (count) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count;
};

const generateRandomMembersCount = () => {
  return Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000;
};

const PlaceCard = ({ img, title, location, description, type, handleOrderPopup }) => {
  const membersCount = generateRandomMembersCount();

  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-xl hover:border-2 hover:border-primary dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg overflow-hidden"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-4">
          <h1 className="line-clamp-1 font-bold text-xl text-primary dark:text-primary-light">{title}</h1>
          <div className="flex items-center gap-2 opacity-70 text-sm">
            <IoLocationSharp />
            <span>{location}</span>
          </div>

          <p className="line-clamp-2 text-gray-700 dark:text-gray-300">{description}</p>

          {/* Sports Type */}
          <div className="flex items-center gap-2 mt-2 text-sm text-primary dark:text-primary-light">
            <IoFootballSharp className="text-lg" /> {/* Icon for Sports */}
            <span className="font-medium">{type}</span> {/* Type of Sport */}
          </div>

          <div className="flex items-center justify-between border-t-2 pt-3 mt-3 text-sm">
            <div className="flex items-center gap-1 opacity-70">
              <IoPeopleSharp className="text-primary dark:text-primary-light" />
              <span>{formatMembersCount(membersCount)} Members</span>
            </div>

            <div>
              <button className="bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
