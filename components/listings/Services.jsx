import React, { useContext } from "react";
import { ListingInputContext } from "../../context";
import Accordion from "../shared/Accordion";
import Switch from "../shared/Switch";

const Services = () => {
  const { formDetails, handleChange } = useContext(ListingInputContext);

  return (
    <Accordion title="services">
      <div className="space-y-5">
        <h3 className="">Does your listing cover these services</h3>
        <div className="flex gap-5 items-center">
          <p className="font-semibold">Delivery</p>
          <Switch name="delivery" handleChange={handleChange} formDetails={formDetails} />
        </div>
        <div className="flex gap-5 items-center">
          <p className="font-semibold">Packing</p>
          <Switch name="packing" handleChange={handleChange} formDetails={formDetails} />
        </div>
      </div>
    </Accordion>
  );
};

export default Services;
