import React from "react";
import Dimensions from "./Dimension";
import StreetView from "./Street";
import Media from "./Media";
import Description from "./Description";

const SpaceDetailsStepper = () => {
  return (
    <>
      <Dimensions />
      <StreetView />
      <Media />
      <Description />
    </>
  );
};

export default SpaceDetailsStepper;
