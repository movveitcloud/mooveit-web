import React, { useState } from "react";
import { Address, Type, Services } from "../index";

const initialState = {
  address: "",
  storageType: "",
  storageFloor: "",
  storageFeatures: [],
  delivery: false,
  packing: false,
};

const BasicInformationStepper = () => {
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
      <Address handle formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
      <Type formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
      <Services formDetails={formDetails} handleChange={handleChange} />
    </>
  );
};

export default BasicInformationStepper;
