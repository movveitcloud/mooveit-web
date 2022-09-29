import React, { useState } from "react";
import Dimensions from "./Dimension";
import StreetView from "./Street";
import Media from "./Media";
import Description from "./Description";

const SpaceDetailsStepper = () => {
  const [formDetails, setFormDetails] = useState({
    streetView: false,
    storageSize: "",
    storageFloor: "",
    storageTitle: "",
    description: "",
    storageFeatures: [],
  });

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
      <Dimensions formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
      <StreetView formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
      <Media formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
      <Description formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
    </>
  );
};

export default SpaceDetailsStepper;
