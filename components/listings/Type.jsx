import React from "react";
import { storageFloors, storageKinds } from "../../helpers/data";
import Accordion from "../shared/Accordion";

const Type = ({ formDetails, handleChange }) => {
  return (
    <Accordion title="type">
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">What kind of storage do you have?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <select
              name="storageType"
              value={formDetails.storageType}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select storage type
              </option>
              {storageKinds.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className="mb-3">What floor is your storage on?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <select
              name="storageFloor"
              value={formDetails.storageFloor}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select storage floor
              </option>
              {storageFloors.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className="mb-3">What features does your storage have?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            {/* <select
              name="storageFloor"
              value={formDetails.storageFeatures}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select storage floor
              </option>
              {storageFloors.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select> */}
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Type;
