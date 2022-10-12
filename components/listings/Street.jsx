import React, { useContext } from "react";
import { ListingInputContext } from "../../context";
import Accordion from "../shared/Accordion";
import Switch from "../shared/Switch";

const StreetView = () => {
  const { formDetails, handleChange } = useContext(ListingInputContext);

  return (
    <Accordion title="Street View">
      <div className="space-y-5">
        <div className="flex gap-5 items-center">
          <p className="font-normal">Enable Street View</p>
          <Switch name="streetView" handleChange={handleChange} formDetails={formDetails} />
        </div>
        {formDetails.streetView && (
          <div>
            <img src="/street.png" alt="icon" className="w-full m-auto" />
          </div>
        )}
      </div>
    </Accordion>
  );
};

export default StreetView;
