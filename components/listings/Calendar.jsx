import { MapIcon } from "@heroicons/react/outline";
import React from "react";
import UnavailabilityModal from "../modals/UnavailabilityModal";
import Accordion from "../shared/Accordion";

const Calendar = ({ formDetails, setFormDetails, handleChange }) => {
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
      <UnavailabilityModal formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
    </Accordion>
  );
};

export default Calendar;
