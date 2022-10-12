import React, { useContext, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { ListingInputContext } from "../../context";

const initialState = { unavailabilityReason: "", unavailabilityPeriodStart: "", unavailabilityPeriodEnd: "" };

const UnavailabilityModal = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [period, setPeriod] = useState(initialState);
  // const { unavailabilityReason, unavailabilityPeriodStart, unavailabilityPeriodEnd } = period;
  const { formDetails, setFormDetails } = useContext(ListingInputContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPeriod({ ...period, [name]: value });
  };

  const addPeriod = () => {
    const newPeriod = period;
    setFormDetails({ ...formDetails, unavailabilityPeriods: [...formDetails.unavailabilityPeriods, newPeriod] });
    setPeriod(initialState);
  };

  return (
    <>
      <input type="checkbox" id="unavailability" className="modal-toggle" />
      <label htmlFor="unavailability" className="modal">
        <label className="modal-box p-8 relative w-[80%] md:w-[60%] max-w-[600px] rounded-xl z-20">
          <h2 className="font-semibold uppercase text-lg text-primary">Add an Unavailability Period</h2>{" "}
          <label
            htmlFor="unavailability"
            className="btn btn-sm btn-circle bg-accent text-primary hover:text-white border-accent hover:bg-primary hover:border-none absolute right-6 top-6">
            <XIcon className="w-4" />
          </label>
          <div className="mt-8 mb-10 space-y-5">
            <div>
              <h3 className="mb-3">Reason</h3>
              <div className="items-center border border-[#222222] rounded-lg px-4 py-3">
                <input
                  type="text"
                  name="unavailabilityReason"
                  value={period.unavailabilityReason}
                  onChange={handleChange}
                  placeholder="Holiday, using space e.t.c"
                  className="w-full bg-transparent h-full pr-6 outline-none placeholder:text-[#959595]"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-3">Date & Time</h3>
              <div className="items-center border border-[#222222] rounded-lg px-4 py-3">
                <input
                  type="text"
                  name="unavailabilityDate"
                  value={formDetails.unavailabilityDate}
                  onChange={handleChange}
                  placeholder="24/08/22 (4:15pm) -- 31/08/22 (4:15pm)"
                  className="w-full bg-transparent h-full pr-6 outline-none placeholder:text-[#959595]"
                />
              </div>
              <p className="text-xs text-[#959595] mt-3 text-justify">
                Making the listing unavailable means that Renters will not be able to book the space during this period.
                Any upcoming or ongoing bookings you may have for this space will not be impacted by this action. Please
                contact us if you can no longer honour these bookings
              </p>
            </div>
          </div>
          <button className="btn btn-primary w-full font-normal" onClick={addPeriod}>
            Save
          </button>
        </label>
      </label>
    </>
  );
};

export default UnavailabilityModal;
