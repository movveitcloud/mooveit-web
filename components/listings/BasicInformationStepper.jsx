import React, { useState } from "react";
import { Address, Type, Services } from "../index";

const BasicInformationStepper = () => {
  return (
    <>
      <Address />
      <Type />
      <Services />
    </>
  );
};

export default BasicInformationStepper;
