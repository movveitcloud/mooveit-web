import React, { useContext, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { ListingInputContext } from "../../context";

const PendingModal = () => {
  const { setFormDetails, initialState } = useContext(ListingInputContext);
  const router = useRouter();

  const handleProceed = () => {
    router.push("/listings");
    setFormDetails(initialState);
  };

  return (
    <>
      <input type="checkbox" id="pending" className="modal-toggle" />
      <label htmlFor="" className="modal">
        <label className="modal-box p-8 relative w-[80%] md:w-[60%] max-w-[600px] rounded-xl z-20 bg-[#F9F9F9]">
          {/* {success ? ( */}
          <div className="flex flex-col flex-grow items-center justify-center text-center px-5">
            <div className="bg-accent rounded-full w-fit flex justify-center p-8 items-center mb-10">
              <p className="text-6xl text-center">🎉</p>
            </div>
            <h2 className="text-2xl md:text-3xl text-black font-semibold">Your listing is now pending!</h2>
            <p className="text-[#959595] mt-1">Please wait up to 24 hours for your listing to be approved.</p>
            <div className="w-[256px] mt-5 space-y-2">
              <button className="btn btn-primary w-full" onClick={handleProceed}>
                proceed to listings
              </button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default PendingModal;
