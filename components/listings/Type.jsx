import React, { useState } from "react";
import Select from "react-select";
import { storageFeatures, storageFloors, storageKinds } from "../../helpers/data";
import Accordion from "../shared/Accordion";

const Type = ({ formDetails, handleChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Accordion title="type">
      <div className="space-y-6 relative">
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
          {/* <div className="items-center border border-[#959595] rounded-lg px-4 py-3"> */}
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={storageFeatures}
            isMulti
            menuPortalTarget={document.getElementById("store")}
            className="text-black"
            placeholder="Select storage features"
          />
          {/* </div> */}
        </div>
      </div>
    </Accordion>
  );
};

export default Type;
