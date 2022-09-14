import { MapIcon } from "@heroicons/react/outline";
import React from "react";
import Accordion from "../shared/Accordion";

const Address = ({ formDetails, setFormDetails }) => {
  return (
    <Accordion title="address">
      <div className="flex flex-row flex-grow gap-4 items-center border border-[#959595] rounded-lg p-4">
        <MapIcon className="text-[#959595] w-6" />
        <input
          type="text"
          placeholder="Enter postcode or location"
          className="w-full bg-transparent h-full pr-6 outline-none text-base placeholder:text-[#959595]"
        />
      </div>
    </Accordion>
  );
};

export default Address;
