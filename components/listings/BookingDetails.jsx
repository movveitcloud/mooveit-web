import React, { useContext } from "react";
import ListingInputContext from "../../context/listingInputContext";
import { arrivalNoticeOpts, spaceDuration } from "../../helpers/data";
import Accordion from "../shared/Accordion";

const BookingDetails = () => {
  const { formDetails, handleChange } = useContext(ListingInputContext);

  return (
    <Accordion title="booking details">
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">What's the shortest period you're willing to rent a space for?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <select
              name="rentDuration"
              value={formDetails.rentDuration}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select duration
              </option>
              {spaceDuration.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className="mb-3">How much notice do you need before a customer arrives?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <select
              name="arrivalNotice"
              value={formDetails.arrivalNotice}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select notice period
              </option>
              {arrivalNoticeOpts.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default BookingDetails;
