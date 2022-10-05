import React from "react";
import { PencilIcon } from "@heroicons/react/outline";

const ListingCards = () => {
  return (
    <div className="p-4 drop-shadow-md bg-white rounded-md w-[88%] mx-auto mb-5">
      <img src="/listing.png" alt="listing view" className="w-[100%]" />
      <div className="flex mt-4 justify-between">
        <h4>Blocks D4-D6, Crowley lane</h4>
        <PencilIcon className="w-4 text-[#959595]" />
      </div>
    </div>
  );
};

export default ListingCards;
