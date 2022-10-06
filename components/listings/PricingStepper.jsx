import React, { useContext } from "react";
import Link from "next/link";
import Pricing from "./Pricing";
import StepperControls from "./StepperControls";
import { ListingInputContext } from "../../context";

const PricingStepper = () => {
  const { formDetails, handleChange } = useContext(ListingInputContext);

  return (
    <>
      <div className="space-y-6">
        <Pricing />
        <div className="flex gap-5 items-center">
          <p className="">
            I agree with MovveIT's{" "}
            <Link href="#" className="font-semibold">
              <a className="font-semibold">terms & conditions</a>
            </Link>
          </p>
          <input
            type="checkbox"
            name="consent"
            onChange={handleChange}
            checked={formDetails.consent}
            className="toggle toggle-primary toggle-sm bg-[#cccccc] h-4 w-7"
          />
        </div>
      </div>
      <div className="my-16">
        <StepperControls />
      </div>
    </>
  );
};

export default PricingStepper;
