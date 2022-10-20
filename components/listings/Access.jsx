import React, { useContext } from "react";
import { ListingInputContext } from "../../context";
import { howAccessListing, whenAccessListing } from "../../helpers/data";
import Accordion from "../shared/Accordion";
import Switch from "../shared/Switch";

const Access = () => {
  const { formDetails, handleChange } = useContext(ListingInputContext);

  return (
    <Accordion title="access">
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">When can your customers access your listing??</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <select
              name="storageAccessPeriod"
              value={formDetails.storageAccessPeriod}
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
              name="storageAccessType"
              value={formDetails.storageAccessType}
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
          <p className="font-semibold">Parking Permit Required</p>
          <Switch name="parkingPermit" handleChange={handleChange} formDetails={formDetails} />
        </div>

        <div>
          <h3 className="mb-3">Parking Instructions</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <textarea
              name="parkingInstruction"
              value={formDetails.parkingInstruction}
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
