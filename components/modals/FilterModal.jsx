import React, { useRef, useEffect } from "react";
import { XIcon } from "@heroicons/react/outline";
import { storageKinds, storageSize } from "../../helpers/data";
import { useDispatch } from "react-redux";
import { getSearchListings } from "../../redux/features/listings.slice";
import { useRouter } from "next/router";

const FilterModal = ({ formDetails, setFormDetails, initialState, handleChange }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const filterModal = useRef(null);
  const query = router.query.s;

  const handleFilter = ({ closeModal }) => {
    const { address, delivery, packing, type, storageType, storageSize, minPrice, maxPrice, area } = formDetails;

    const payload = {
      area: address ? address.toLowerCase() : query ? query.toLowerCase() : "",
      storageSize: storageSize ? storageSize : "",
      storageType: storageType ? storageType : "",
      type: type,
      minPrice: minPrice ? minPrice : null,
      maxPrice: maxPrice ? maxPrice : null,
      delivery: delivery ? true : null,
      packing: packing ? true : null,
    };
    closeModal ? filterModal.current.click() : "";
    dispatch(getSearchListings({ payload }));
  };

  const clearFilters = () => {
    setFormDetails(initialState);
    filterModal.current.click();
    dispatch(getSearchListings({ payload: { area: query ? query.toLowerCase() : "", packing: null, delivery: null } }));
  };

  useEffect(() => {
    handleFilter({ closeModal: false });
  }, [formDetails.delivery, formDetails.packing]);

  return (
    <>
      <input type="checkbox" id="filter" className="modal-toggle" />
      <label htmlFor="filter" ref={filterModal} className="modal">
        <label htmlFor="" className="modal-box p-8 relative w-[80%] md:w-[60%] max-w-[600px] rounded-xl z-20">
          <h2 className="font-semibold text-lg text-primary">Apply Filters</h2>{" "}
          <label
            htmlFor="filter"
            className="btn btn-sm btn-circle bg-accent text-primary hover:text-white border-accent hover:bg-primary hover:border-none absolute right-6 top-6">
            <XIcon className="w-4" />
          </label>
          <div className="mt-8 mb-10 space-y-5">
            <div className="mb-6">
              <h3 className="mb-3 font-[500]">Price Range</h3>
              <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="type"
                    value="hour"
                    checked={formDetails.type == "hour"}
                    onChange={handleChange}
                    className="radio radio-primary radio-sm"
                  />
                  <p>Per hour</p>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="type"
                    value="month"
                    checked={formDetails.type == "month"}
                    onChange={handleChange}
                    className="radio radio-primary radio-sm"
                  />
                  <p>Per month</p>
                </div>
              </div>

              <div className="flex gap-4 items-end mt-4">
                <div className="w-full">
                  <label>Min Price</label>
                  <div className="text-sm mt-1 px-4 py-2 rounded-lg border border-[#959595] w-full">
                    £{" "}
                    <input
                      type="number"
                      min={1}
                      name="minPrice"
                      value={formDetails?.minPrice}
                      onChange={handleChange}
                      className="bg-transparent outline-none"
                    />
                  </div>
                </div>
                <span className="text-base mb-2">to</span>
                <div className="w-full">
                  <label>Max Price</label>
                  <div className="text-sm mt-1 px-4 py-2 rounded-lg border border-[#959595] w-full">
                    £{" "}
                    <input
                      type="number"
                      min={1}
                      name="maxPrice"
                      value={formDetails?.maxPrice}
                      onChange={handleChange}
                      className="bg-transparent outline-none"
                    />
                  </div>
                </div>
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
              <button
                className="btn btn-outline btn-primary w-[125px] hover:btn-accent px-5 font-normal text-sm normal-case"
                onClick={clearFilters}>
                Clear All
              </button>
              <button
                className="btn btn-primary  px-8 font-normal text-sm normal-case"
                onClick={() => handleFilter({ closeModal: true })}>
                Apply Filters
              </button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default FilterModal;
