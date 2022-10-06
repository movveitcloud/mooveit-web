import React, { useContext, useState } from "react";
import ListingInputContext from "../../context/listingInputContext";
import { Address, Type, Services, StepperControls } from "../index";

const BasicInformationStepper = () => {
  const { formDetails } = useContext(ListingInputContext);
  const { address, storageType, storageFloor, storageFeatures } = formDetails;
  const disableBtn = !address || !storageType || !storageFloor || storageFeatures.length == 0;
  const serviceOptions = ["delivery", "packing"];
  const services = [];
  serviceOptions.map((item) => formDetails[item] && services.push(item));
  const payload = { address, storageType, storageFloor, storageFeatures, services };

  return (
    <>
      <Address />
      <Type />
      <Services />
      <div className="my-16">
        <StepperControls disabled={disableBtn} payload={payload} />
      </div>
    </>
  );
};

export default BasicInformationStepper;
