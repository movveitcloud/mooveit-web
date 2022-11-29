import React, { useContext } from "react";
import Dimensions from "./Dimension";
import Media from "./Media";
import Description from "./Description";
import StepperControls from "./StepperControls";
import { ListingInputContext } from "../../context";

const SpaceDetailsStepper = () => {
  const { formDetails } = useContext(ListingInputContext);
  const { storageSize, streetView, storageTitle, storageNumber, description, image } = formDetails;
  const disableBtn = !storageSize?.name || !storageTitle || !description || image.length == 0;
  const payload = { streetView, storageSize: { name: storageSize }, storageNumber, image, storageTitle, description };

  return (
    <>
      <Dimensions />
      <Media />
      <Description />
      <div className="my-16">
        <StepperControls disabled={disableBtn} payload={payload} />
      </div>
    </>
  );
};

export default SpaceDetailsStepper;
