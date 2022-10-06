import { EyeIcon } from "@heroicons/react/outline";
import React, { useContext, useState } from "react";
import {
  AvailabilityStepper,
  BasicInformationStepper,
  NewListingLayout,
  PricingStepper,
  SpaceDetailsStepper,
  StepperControls,
  Steppers,
} from "../../components";
import ListingInputContext from "../../context/listingInputContext";

const NewListing = () => {
  const { activeStepper } = useContext(ListingInputContext);

  return (
    <NewListingLayout>
      <div className="">
        <div className="py-5">
          <div className="sticky top-0 bg-[#F9F9F9]">
            <div className="w-[60%] mx-auto">
              <Steppers />
            </div>
            <div className="absolute right-10 top-5 border border-primary text-primary text-sm hover:bg-primary hover:text-white p-4 rounded-md cursor-pointer">
              <EyeIcon className="w-4 mx-auto" />
              <p>Preview</p>
            </div>
          </div>

          <div className="w-[60%] mx-auto">
            {activeStepper == 0 && <BasicInformationStepper />}
            {activeStepper == 1 && <SpaceDetailsStepper />}
            {activeStepper == 2 && <AvailabilityStepper />}
            {activeStepper == 3 && <PricingStepper />}
          </div>
        </div>
      </div>
    </NewListingLayout>
  );
};

export default NewListing;
