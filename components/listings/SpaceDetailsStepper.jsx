import React, { useContext } from "react";
import Dimensions from "./Dimension";
import StreetView from "./Street";
import Media from "./Media";
import Description from "./Description";
import StepperControls from "./StepperControls";
import ListingInputContext from "../../context/listingInputContext";

const SpaceDetailsStepper = () => {
  const { formDetails } = useContext(ListingInputContext);
  const { streetView, storageSize, storageTitle, description, calendar } = formDetails;

  return (
    <>
      <Dimensions />
      <StreetView />
      <Media />
      <Description />
      <div className="my-16">
        <StepperControls />
      </div>
    </>
  );
};

export default SpaceDetailsStepper;
