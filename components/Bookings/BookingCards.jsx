import React from "react";
import { PencilIcon, LocationMarkerIcon } from "@heroicons/react/outline";

const BookingCard = () => {
  return (
    <div className="p-4 drop-shadow-md bg-white rounded-md w-[32%] mb-5">
      <div className="h-[120px]">
        <img src="/listing.png" alt="listing view" className="h-full" />
      </div>
      <div className=" mt-3 text-[#959595] flex">
        <LocationMarkerIcon className="w-4 mr-2" />
        <h4 className="text-[.7rem]">65-69 Lots Road, Chelsea, SW10 0RN</h4>
      </div>

      <div className="flex mt-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-[50px] h-[50px]">
            <img src="/dummyAvatar.png" className="rounded-[50%] w-[60px] h-[60px] object-contain " alt="user" />
          </div>
          <h4 className="text-[.8rem] font-semibold">TOM FORDWOR</h4>
        </div>
        <div className="flex justify-right mr-0">
          <PencilIcon className="w-4 text-[#4543A5] mr-2 " />
          <p className="text-[.8rem] text-[#4543A5]">MANAGE</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
