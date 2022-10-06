import React, { useContext } from "react";
import { ListingInputContext } from "../../context";
import Accordion from "../shared/Accordion";

const Services = () => {
  const { formDetails, handleChange } = useContext(ListingInputContext);

  return (
    <Accordion title="services">
      <div className="space-y-5">
        <h3 className="">Does your listing cover these services</h3>
        <div className="flex gap-5 items-center">
          <p className="font-semibold">Delivery</p>
          <input
            type="checkbox"
            name="delivery"
            onChange={handleChange}
            checked={formDetails.delivery}
            className="toggle toggle-primary toggle-sm bg-[#cccccc] h-4 w-7"
          />
        </div>
        <div className="flex gap-5 items-center">
          <p className="font-semibold">Packing</p>
          <input
            type="checkbox"
            name="packing"
            onChange={handleChange}
            checked={formDetails.packing}
            className="toggle toggle-primary toggle-sm bg-[#cccccc] h-4 w-7"
          />
        </div>
      </div>
    </Accordion>
  );
};

export default Services;
