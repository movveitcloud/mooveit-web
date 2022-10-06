import React, { useContext } from "react";
import ListingInputContext from "../../context/listingInputContext";
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
      <div className="w-full h-48 bg-[#eeeeee] rounded"></div>
      <UnavailabilityModal />
    </Accordion>
  );
};

export default Calendar;
