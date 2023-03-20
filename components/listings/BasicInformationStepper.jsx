import React, { useContext } from "react";
import { ListingInputContext } from "../../context";
import { Address, Type, Services, StepperControls } from "../index";

const BasicInformationStepper = () => {
  const { formDetails } = useContext(ListingInputContext);
  const {
    address,
    formattedAddress,
    coordinates,
    storageType,
    storageFloor,
    services,
    storageFeatures,
    vehicleType,
    costPerKm,
    packagingSize,
    costPerSize,
  } = formDetails;
  
  const disableBtn = !address || !storageType || !storageFloor || storageFeatures.length == 0;

  const payload = {
    address,
    formattedAddress: {
      street: formattedAddress?.street?.toLowerCase(),
      area: formattedAddress?.area?.toLowerCase(),
    },
    coordinates,
    storageType,
    storageFloor,
    storageFeatures,
    services,
    vehicleType,
    costPerKm,
    packagingSize,
    costPerSize,
  };

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
