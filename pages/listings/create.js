import React, { useContext } from "react";
import {
  AvailabilityStepper,
  BasicInformationStepper,
  NewListingLayout,
  PricingStepper,
  SpaceDetailsStepper,
  Steppers,
} from "../../components";
import { ListingInputContext } from "../../context";

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
