import React from "react";
import { PencilIcon } from "@heroicons/react/outline";

const ListingCards = ({ data }) => {
  return (
    <div className="p-4  bg-white rounded-md w-full lg:w-[48.5%] mb-5  hover:shadow hover:scale-105 transition-transform duration-500">
      <img src="/listing.png" alt="listing view" className="w-[100%] object-cover" />
      <div className="flex mt-4 justify-between">
        <h4 className="text-[.5rem] lg:text-[.8rem]">{data?.name}</h4>
        <PencilIcon className="w-4 text-[#959595]" />
      </div>
    </div>
  );
};

export default ListingCards;
