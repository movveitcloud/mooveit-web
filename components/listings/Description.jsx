import React, { useState } from "react";
import { useRef } from "react";
import Accordion from "../shared/Accordion";

const Dimensions = ({ formDetails, handleChange }) => {
  return (
    <Accordion title="Description">
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">Storage Title</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <input
              name="storageTitle"
              value={formDetails.storageTitle}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}
              placeholder="Enter Storage Title"
            />
          </div>
        </div>
        <div>
          <h3 className="mb-3">Give a brief description of your listing</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <textarea
              name="description"
              value={formDetails.description}
              placeholder="Talk about features, restrictions & anything your customers should know."
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Dimensions;
