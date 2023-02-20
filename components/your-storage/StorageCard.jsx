import React from "react";
import { PencilIcon, LocationMarkerIcon } from "@heroicons/react/outline";

const StorageCard = () => {
  return (
    <div className="mb-5  w-full rounded-md bg-white p-4 transition-transform duration-500 hover:scale-105 hover:shadow md:w-[48%] lg:w-[31%]">
      <div className="rounnded-md h-[120px]">
        <img src="/listing.png" alt="listing view" className="h-full w-full rounded-md object-cover" />
      </div>
      <div className=" mt-3 flex text-[#959595]">
        <LocationMarkerIcon className="mr-2 w-4" />
        <h4 className="text-[.6rem] lg:text-[.7rem]">65-69 Lots Road, Chelsea, SW10 0RN</h4>
      </div>

      <div className="float-right mt-2 md:mt-4 ">
        <div className=" flex">
          <PencilIcon className="mr-2 w-4 text-[#4543A5] " />
          <p className="text-[.7rem] text-[#4543A5] lg:text-[.8rem]">MANAGE</p>
        </div>
      </div>
    </div>
  );
};

export default StorageCard;
