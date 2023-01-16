import React, { useContext } from "react";
import { ListingInputContext } from "../../context";
import { Calendar, Access, BookingDetails, StepperControls } from "../index";

const AvailabilityStepper = () => {
  const { formDetails } = useContext(ListingInputContext);
  const {
    unavailabilityPeriods,
    storageAccessPeriod,
    storageAccessType,
    parkingPermit,
    parkingInstruction,
    bookingDuration,
    bookingNotice,
  } = formDetails;
  const disableBtn = !storageAccessPeriod || !storageAccessType || !bookingDuration || !bookingNotice;
  const payload = {
    unavailabilityPeriods,
    storageAccessPeriod,
    storageAccessType,
    parkingPermit,
    parkingInstruction,
    bookingDuration,
    bookingNotice,
  };

  return (
    <>
      {/* <Calendar /> */}
      <Access />
      <BookingDetails />
      <div className="my-16">
        <StepperControls disabled={disableBtn} payload={payload} />
      </div>
    </>
  );
};

export default AvailabilityStepper;
