import React, { useState } from "react";
import Accordion from "../shared/Accordion";

const StreetView = ({ formDetails, handleChange }) => {
  return (
    <Accordion title="Street View">
      <div className="space-y-5">
        <div className="flex gap-5 items-center">
          <p className="font-normal">Enable Street View</p>
          <input
            type="checkbox"
            name="streetView"
            onChange={handleChange}
            checked={formDetails.streetView}
            className="toggle toggle-primary toggle-sm bg-[#cccccc] h-4 w-7"
          />
        </div>
      </div>
    </Accordion>
  );
};

export default StreetView;
