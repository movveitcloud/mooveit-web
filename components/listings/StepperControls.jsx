import React from "react";

const StepperControls = ({ activeStepper }) => {
  return (
    <div className="flex justify-end">
      <div className="flex gap-4">
        <button className="btn btn-outline btn-primary hover:btn-accent w-[175px]">Save & Exit</button>
        <button className="btn btn-primary w-[175px]">Next</button>
      </div>
    </div>
  );
};

export default StepperControls;
