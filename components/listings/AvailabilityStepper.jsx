import React, { useContext } from "react";
import { ListingInputContext } from "../../context";
import { Calendar, Access, BookingDetails, StepperControls } from "../index";

const AvailabilityStepper = () => {
  const { formDetails } = useContext(ListingInputContext);
  const { whenAccessListing, howAccessListing, packingPermit, packingInstruction, bookingDuration, bookingNotice } =
    formDetails;
  const disableBtn = !whenAccessListing || !howAccessListing || !bookingDuration || !bookingNotice;
  const payload = {
    whenAccessListing,
    howAccessListing,
    packingPermit,
    packingInstruction,
    bookingDuration,
    bookingNotice,
  };

  return (
    <>
      <Calendar />
      <Access />
      <BookingDetails />
      <div className="my-16">
        <StepperControls disabled={disableBtn} payload={payload} />
      </div>
    </>
  );
};

export default AvailabilityStepper;
