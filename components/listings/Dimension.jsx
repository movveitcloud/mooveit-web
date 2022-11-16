import React, { useContext, useState } from "react";
import { ListingInputContext } from "../../context";
import { storageSize } from "../../helpers/data";
import Accordion from "../shared/Accordion";

const Dimensions = ({ incomplete }) => {
  const { formDetails, setFormDetails, handleChange } = useContext(ListingInputContext);
  const { storageNumber } = formDetails;

  const handleCount = (type) => {
    if (type === "increase") {
      setFormDetails({ ...formDetails, storageNumber: storageNumber + 1 });
    }
    if (type === "reduce" && storageNumber > 1) {
      setFormDetails({ ...formDetails, storageNumber: storageNumber - 1 });
    }
  };

  return (
    <Accordion title="Dimensions" incomplete={incomplete}>
      <div className="space-y-6">
        <div className="mb-5">
          <h3 className="mb-3">How large is your storage?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3 mb-5">
            <select
              name="storageSize"
              value={formDetails.storageSize}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select storage size
              </option>
              {storageSize.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-between">
          <h3 className="my-3">How many storage spaces of this size & type do you have?</h3>
          <div className="flex items-center ">
            <span
              onClick={() => handleCount("reduce")}
              className="bg-[#D5D5D5] text-white h-5 w-5 text-center rounded-sm justify-center flex items-center cursor-pointer select-none">
              -
            </span>
            <span className="ml-3 items-center border border-[#959595] rounded-[5px] px-4 py-2 flex text-[.8rem] text-[#959595]">
              {storageNumber}
            </span>
            <span
              onClick={() => handleCount("increase")}
              className="bg-primary text-white ml-3 p-[3px] h-5 w-5 text-center rounded-sm justify-center flex items-center cursor-pointer select-none">
              +
            </span>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Dimensions;
