import React, { useContext } from "react";
import Dimensions from "./Dimension";
import StreetView from "./Street";
import Media from "./Media";
import Description from "./Description";
import StepperControls from "./StepperControls";
import { ListingInputContext } from "../../context";

const SpaceDetailsStepper = () => {
  const { formDetails } = useContext(ListingInputContext);
  const { storageSize, storageTitle, description, media } = formDetails;
  const disableBtn = !storageSize || !storageTitle || !description || media.length === 0;

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
