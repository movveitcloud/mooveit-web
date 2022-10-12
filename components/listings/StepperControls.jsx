import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createListing, updateListing } from "../../redux/features/listings.slice";
import { ListingInputContext } from "../../context";

const StepperControls = ({ disabled, payload, publishModal }) => {
  const { activeStepper, setActiveStepper, data } = useContext(ListingInputContext);
  const { loading } = useSelector((state) => state.listing);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSaveExit = () => {
    router.replace("/listings");
  };
  const handleNextBtn = () => {
    if (activeStepper === 0) {
      // dispatch(createListing({ payload, activeStepper, setActiveStepper }));
    }
    if (activeStepper > 0 && activeStepper < 3) {
      //dispatch(updateListing({ payload, activeStepper, setActiveStepper, id: data._id }));
    }
    if (activeStepper === 3) {
      //dispatch(updateListing({ payload, activeStepper, setActiveStepper, id: data._id }));
      publishModal.current.click(); //launch snippet/publish modal
    }
  };

  return (
    <div className="flex justify-end">
      <div className="flex gap-4">
        {activeStepper > 0 && (
          <button className="btn btn-outline btn-primary hover:btn-accent w-[175px]" onClick={handleSaveExit}>
            Save & Exit
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
