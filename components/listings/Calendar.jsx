import React, { useContext } from "react";
import { ListingInputContext } from "../../context";
import UnavailabilityModal from "../modals/UnavailabilityModal";
import Accordion from "../shared/Accordion";

const Calendar = () => {
  const { formDetails, setFormDetails, handleChange } = useContext(ListingInputContext);

  return (
    <Accordion title="calendar">
      <div className="flex justify-between items-center mb-8">
        <h3 className="">Add an unavailability period </h3>
        <label
          htmlFor="unavailability"
          className="btn btn-outline btn-primary border-accent text-primary font-normal w-[130px]">
          Add Period
        </label>
      </div>
      <div className="attention"></div>
      <div className="w-full rounded">
        {/* modify this in place of calendar for now */}
        {formDetails?.unavailabilityPeriods?.map(
          ({ unavailabilityReason, unavailabilityPeriodStart, unavailabilityPeriodEnd }) => (
            <p>
              {unavailabilityPeriodStart} - {unavailabilityPeriodEnd}
            </p>
          )
        )}
      </div>
      <UnavailabilityModal />
    </Accordion>
  );
};

export default Calendar;
