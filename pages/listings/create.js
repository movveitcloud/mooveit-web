import { EyeIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import {
  AvailabilityStepper,
  BasicInformationStepper,
  NewListingLayout,
  PricingStepper,
  SpaceDetailsStepper,
  StepperControls,
  Steppers,
} from "../../components";

const NewListing = () => {
  const [activeStepper, setActiveStepper] = useState(0);

  return (
    <NewListingLayout>
      <div className="relative">
        <div className="w-[60%] mx-auto relative py-5">
          <div className="sticky top-0 bg-[#F9F9F9]">
            <Steppers activeStepper={activeStepper} setActiveStepper={setActiveStepper} />
          </div>
          {/* <div className="absolute right-0 border p-8 rounded-md">
            <EyeIcon className="w-4" />
            <p>Preview</p>
          </div> */}
          <div>
            {activeStepper == 0 && <BasicInformationStepper />}
            {activeStepper == 1 && <SpaceDetailsStepper />}
            {activeStepper == 2 && <AvailabilityStepper />}
            {activeStepper == 3 && <PricingStepper />}
          </div>
          <div className="my-16">
            <StepperControls activeStepper={activeStepper} />
          </div>
        </div>
      </div>
    </NewListingLayout>
  );
};

export default NewListing;
