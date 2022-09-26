import React, { useState } from "react";
import { Calendar, Access, BookingDetails } from "../index";

const initialState = {
  calendar: "",
  unavailabilityReason: "",
  unavailabilityDate: "",
  whenAccessListing: "",
  howAccessListing: "",
  packingPermit: true,
  packingInstructions: "",
  rentDuration: "",
  arrivalNotice: "",
};

const AvailabilityStepper = () => {
  const [formDetails, setFormDetails] = useState(initialState);

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormDetails({
      ...formDetails,
      [name]: val,
    });
  };

  return (
    <>
      <Calendar formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
      <Access formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
      <BookingDetails formDetails={formDetails} handleChange={handleChange} />
    </>
  );
};

export default AvailabilityStepper;
