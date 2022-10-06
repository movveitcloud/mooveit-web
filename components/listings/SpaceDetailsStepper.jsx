import React, { useContext } from "react";
import Dimensions from "./Dimension";
import StreetView from "./Street";
import Media from "./Media";
import Description from "./Description";
import StepperControls from "./StepperControls";
import ListingInputContext from "../../context/listingInputContext";

const SpaceDetailsStepper = () => {
  const { formDetails } = useContext(ListingInputContext);
  const { storageSize, storageTitle, description, calendar } = formDetails;
  const disableBtn = !storageSize || !storageTitle || !description;

  return (
    <>
      <Dimensions />
      <StreetView />
      <Media />
      <Description />
      <div className="my-16">
        <StepperControls disabled={disableBtn} />
      </div>
    </>
  );
};

export default SpaceDetailsStepper;
