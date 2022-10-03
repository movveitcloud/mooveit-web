import React, { useState } from "react";
import { useRef } from "react";
import { storageSize } from "../../helpers/data";
import Accordion from "../shared/Accordion";

const Dimensions = ({ formDetails, handleChange }) => {
  const [count, setCount] = useState(1);

  //console.log(multiRef.current, "refffff");

  return (
    <Accordion title="Dimensions">
      <div className="space-y-6">
        <div className="mb-5">
          <h3 className="mb-3">How large is your storage?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3 mb-5">
            <select
              name="storageType"
              value={formDetails.storageType}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select storage type
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
              onClick={() => setCount(count === 1 ? 1 : count - 1)}
              className="bg-[#D5D5D5] text-white h-5 w-5 text-center rounded-sm justify-center flex items-center cursor-pointer">
              -
            </span>
            <span className="ml-3 items-center border border-[#959595] rounded-[5px] px-4 py-2 flex text-[.8rem] text-[#959595]">
              {count}
            </span>
            <span
              onClick={() => setCount(count + 1)}
              className="bg-primary text-white ml-3 p-[3px] h-5 w-5 text-center rounded-sm justify-center flex items-center cursor-pointer">
              +
            </span>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Dimensions;
