import React, { useContext, useRef } from "react";
import Link from "next/link";
import Pricing from "./Pricing";
import StepperControls from "./StepperControls";
import { ListingInputContext } from "../../context";
import PreviewModal from "../modals/PreviewModal";

const PricingStepper = () => {
  const { formDetails, handleChange } = useContext(ListingInputContext);
  const { monthlyRate, hourlyRate, consent } = formDetails;
  const publishModal = useRef(null);

  const disableBtn = (!monthlyRate && !hourlyRate) || !consent;
  const payload = { monthlyRate, hourlyRate, consent };

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
      <label htmlFor="preview" className="hidden" ref={publishModal} />
      <PreviewModal />
      <div className="my-16">
        <StepperControls disabled={disableBtn} payload={payload} publishModal={publishModal} />
      </div>
    </>
  );
};

export default PricingStepper;
