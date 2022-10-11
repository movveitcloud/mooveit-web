import React from "react";
import { PencilIcon, LocationMarkerIcon } from "@heroicons/react/outline";

const BookingCard = () => {
  return (
    <div className="p-4  hover:shadow hover:scale-105 transition-transform duration-500 bg-white rounded-md w-full md:w-[48%] lg:w-[31%] mb-5">
      <div className="h-[120px] rounnded-md">
        <img src="/listing.png" alt="listing view" className="h-full object-cover w-full rounded-md" />
      </div>
      <div className=" mt-3 text-[#959595] flex">
        <LocationMarkerIcon className="w-4 mr-2" />
        <h4 className="text-[.6rem] lg:text-[.7rem]">65-69 Lots Road, Chelsea, SW10 0RN</h4>
      </div>

      <div className="flex mt-2 md:mt-4 items-center justify-between">
        <div className="flex gap-2 items-center align-middle">
          <div className="w-[50px] h-[50px]">
            <img src="/dummyAvatar.png" className="rounded-[50%] w-[60px] h-[60px] object-contain " alt="user" />
          </div>
          <h4 className="text-[.7rem] lg:text-[.8rem]  font-semibold">TOM FORDWOR</h4>
        </div>
        <div className="flex justify-right mr-0">
          <PencilIcon className="w-4 text-[#4543A5] mr-2 " />
          <p className="text-[.7rem] lg:text-[.8rem] text-[#4543A5]">MANAGE</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
