import { MapIcon } from "@heroicons/react/outline";
import React from "react";
import { useContext } from "react";
import ListingInputContext from "../../context/listingInputContext";
import Accordion from "../shared/Accordion";

const Address = () => {
  const { formDetails, handleChange } = useContext(ListingInputContext);

  return (
    <Accordion title="address">
      <div className="flex flex-row flex-grow gap-4 items-center border border-[#959595] rounded-lg px-4 py-3">
        <MapIcon className="text-[#959595] w-6" />
        <input
          type="text"
          name="address"
          placeholder="Enter postcode or location"
          value={formDetails.address}
          onChange={handleChange}
          className="w-full bg-transparent h-full pr-6 outline-none placeholder:text-[#959595]"
        />
      </div>
      <img src="/dummymap.png" alt="map" className="w-full mt-8" />
    </Accordion>
  );
};

export default Address;
