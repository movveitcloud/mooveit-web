import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { storageKinds, storageSize } from "../../helpers/data";

const FilterModal = ({ formDetails, handleChange }) => {
  return (
    <>
      <input type="checkbox" id="filter" className="modal-toggle" />
      <label htmlFor="filter" className="modal">
        <label className="modal-box p-8 relative w-[80%] md:w-[60%] max-w-[600px] rounded-xl z-20">
          <h2 className="font-semibold text-lg text-primary">Apply Filters</h2>{" "}
          <label
            htmlFor="filter"
            className="btn btn-sm btn-circle bg-accent text-primary hover:text-white border-accent hover:bg-primary hover:border-none absolute right-6 top-6"
            // onClick={closeModal}
          >
            <XIcon className="w-4" />
          </label>
          <div className="mt-8 mb-10 space-y-5">
            <div className="mb-6">
              <h3 className="mb-3 font-[500]">Price Range</h3>
              <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="hour"
                    defaultChecked
                    onChange={handleChange}
                    className="radio radio-primary radio-sm"
                  />
                  <p className="">Per hour</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="month"
                    onChange={handleChange}
                    className="radio radio-primary radio-sm"
                  />
                  <p className="">Per month</p>
                </div>
              </div>

              <div>
                {/* <input
                  type="range"
                  name="min"
                  value="month"
                  min={0}
                  max={100}
                  // onChange={handleChange}
                  className="range range-primary range-xs h-2"
                /> */}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-[500]">Storage Type</h3>
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
              <h3 className="mb-3 font-[500]">Storage Size</h3>
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
          </div>
          <div className="flex justify-end">
            <div className="flex gap-4">
              <button className="btn btn-outline btn-primary w-[125px] hover:btn-accent px-5 font-normal text-sm normal-case">
                Clear All
              </button>
              <button className="btn btn-primary w-[125px] px-5 font-normal text-sm normal-case">Apply Filters</button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default FilterModal;
