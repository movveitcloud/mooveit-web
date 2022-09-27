import React from "react";

const StepperControls = ({ activeStepper, setActveStepper }) => {
  const handleNextBtn = () => {
    if (activeStepper < 3) setActveStepper(activeStepper + 1);
  };
  return (
    <div className="flex justify-end">
      <div className="flex gap-4">
        {activeStepper > 0 && (
          <button className="btn btn-outline btn-primary hover:btn-accent w-[175px]">Save & Exit</button>
        )}
        <button className="btn btn-primary w-[175px]" onClick={handleNextBtn}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperControls;
