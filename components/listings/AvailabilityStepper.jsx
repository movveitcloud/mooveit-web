import React from "react";
import { Calendar, Access, BookingDetails, StepperControls } from "../index";

const AvailabilityStepper = () => {
  return (
    <>
      <Calendar />
      <Access />
      <BookingDetails />
      <div className="my-16">
        <StepperControls />
      </div>
    </>
  );
};

export default AvailabilityStepper;
