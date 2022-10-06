import React, { useContext } from "react";
import { useRouter } from "next/router";
import ListingInputContext from "../../context/listingInputContext";

const StepperControls = () => {
  const { activeStepper, setActiveStepper } = useContext(ListingInputContext);
  const router = useRouter();

  const handleSaveExit = () => {
    router.replace("/listings");
  };
  const handleNextBtn = () => {
    if (activeStepper < 3) setActiveStepper(activeStepper + 1);
  };

  return (
    <div className="flex justify-end">
      <div className="flex gap-4">
        {activeStepper > 0 && (
          <button className="btn btn-outline btn-primary hover:btn-accent w-[175px]" onClick={handleSaveExit}>
            Save & Exit
          </button>
        )}
        <button className="btn btn-primary w-[175px]" onClick={handleNextBtn}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperControls;
