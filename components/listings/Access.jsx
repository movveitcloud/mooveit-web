import React, { useContext } from "react";
import ListingInputContext from "../../context/listingInputContext";
import { howAccessListing, whenAccessListing } from "../../helpers/data";
import Accordion from "../shared/Accordion";

const Access = () => {
  const { formDetails, handleChange } = useContext(ListingInputContext);

  return (
    <Accordion title="access">
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">When can your customers access your listing??</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <select
              name="whenAccessListing"
              value={formDetails.whenAccessListing}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select access
              </option>
              {whenAccessListing.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className="mb-3">How can customers access your listing?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <select
              name="howAccessListing"
              value={formDetails.howAccessListing}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select mode
              </option>
              {howAccessListing.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <p className="font-semibold">Packing Permit Required</p>
          <input
            type="checkbox"
            name="packingPermit"
            onChange={handleChange}
            checked={formDetails.parkingPermit}
            className="toggle toggle-primary toggle-sm bg-[#cccccc] h-4 w-7"
          />
        </div>

        <div>
          <h3 className="mb-3">Parking Instructions</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <textarea
              name="packingInstructions"
              onChange={handleChange}
              placeholder="Include any details your customer has to know about parking here"
              className="w-full outline-none rounded"
              rows={6}
            />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Access;
