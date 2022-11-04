import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createListing, saveExit, updateListing } from "../../redux/features/listings.slice";
import { ListingInputContext } from "../../context";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";

const StepperControls = ({ disabled, payload, publishModal }) => {
  const { activeStepper, setActiveStepper, setFormDetails, initialState } = useContext(ListingInputContext);
  const { loading, exitLoading, data } = useSelector((state) => state.listing);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSaveExit = () => {
    dispatch(saveExit({ payload, id: data._id, router, setFormDetails, initialState, setActiveStepper }));
  };

  const handleNextBtn = () => {
    if ((activeStepper === 0 && !data) || !data.started) {
      dispatch(createListing({ payload, activeStepper, setActiveStepper }));
    }
    if (activeStepper === 0 && data && data.started) {
      dispatch(updateListing({ payload, activeStepper, setActiveStepper, id: data._id }));
    }
    if (activeStepper > 0 && activeStepper < 3) {
      dispatch(updateListing({ payload, activeStepper, setActiveStepper, id: data._id }));
    }
    if (activeStepper === 3) {
      dispatch(updateListing({ payload, activeStepper, setActiveStepper, id: data._id, publishModal }));
    }
  };

  return (
    <div className={`flex ${activeStepper > 0 ? "justify-between" : "justify-end"} `}>
      {activeStepper > 0 && (
        <button className="gap-2 btn btn-link hover:no-underline" onClick={() => setActiveStepper(activeStepper - 1)}>
          <ArrowNarrowLeftIcon className="w-4" />
          Back
        </button>
      )}

      <div className="flex gap-4">
        {activeStepper > 0 && (
          <button
            className={`${exitLoading && "loading"} btn btn-outline btn-primary hover:btn-accent w-[175px]`}
            onClick={handleSaveExit}>
            {exitLoading ? "" : "Save & Exit"}
          </button>
        )}
        <button
          disabled={disabled}
          className={`${loading && "loading"} btn btn-primary w-[175px] disabled:bg-[#ccc] disabled:text-primary`}
          onClick={handleNextBtn}>
          {loading ? "" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default StepperControls;
