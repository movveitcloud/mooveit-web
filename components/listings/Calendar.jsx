import React, { useContext } from "react";
import { CalendarIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { ListingInputContext } from "../../context";
import UnavailabilityModal from "../modals/UnavailabilityModal";
import { format } from "date-fns";
import Accordion from "../shared/Accordion";

const Calendar = () => {
  const { formDetails, setFormDetails, handleChange } = useContext(ListingInputContext);

  const deleteReason = (reason) => {
    const filteredArray = formDetails?.unavailabilityPeriods.filter((p) => p.unavailabilityReason !== reason);
    setFormDetails({ ...formDetails, unavailabilityPeriods: filteredArray });
  };

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
      <div className="space-y-2 w-full">
        {formDetails?.unavailabilityPeriods?.map(
          ({ unavailabilityReason, unavailabilityPeriodStart, unavailabilityPeriodEnd }, i) => (
            <div
              key={i}
              className="bg-[#F9F9F9] border-l-4 border-accent rounded-lg px-6 py-4 flex justify-between items-center text-sm">
              <div className="flex gap-3 items-center">
                <span className="rounded-full w-10 h-10 flex justify-center items-center bg-accent bg-opacity-[25%]">
                  <CalendarIcon className="text-primary w-5" />
                </span>
                <div className="space-y-1">
                  {(unavailabilityPeriodStart || unavailabilityPeriodEnd) && (
                    <p>
                      {format(new Date(unavailabilityPeriodStart), "h:mmaaa, dd MMM, yyyy")} -{" "}
                      {format(new Date(unavailabilityPeriodEnd), "h:mmaaa, dd MMM, yyyy")}
                    </p>
                  )}
                  <p className="text-[#959595]">{unavailabilityReason}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <span className="tooltip tooltip-primary cursor-pointer" data-tip="Edit">
                  <PencilAltIcon className="w-4 tooltip tooltip-primary" />
                </span> */}
                <span
                  className="tooltip tooltip-error text-white cursor-pointer"
                  data-tip="Delete"
                  onClick={() => deleteReason(unavailabilityReason)}>
                  <TrashIcon className="w-4 text-red-500 tooltip tooltip-info" />
                </span>
              </div>
            </div>
          )
        )}
      </div>
      <UnavailabilityModal />
    </Accordion>
  );
};

export default Calendar;
