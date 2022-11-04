import React, { useContext, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ListingInputContext } from "../../context";
import ListingCard from "../shared/ListingCard";

const PreviewModal = () => {
  const { setFormDetails, initialState, setActiveStepper } = useContext(ListingInputContext);
  const { data } = useSelector((state) => state.listing);
  const [success, setSuccess] = useState(true);
  const router = useRouter();

  const handleProceed = () => {
    router.push("/listings");
    setFormDetails(initialState);
    setActiveStepper(0);
  };

  return (
    <>
      <input type="checkbox" id="preview" className="modal-toggle" />
      <label htmlFor="previe" className="modal">
        <label className="modal-box p-8 relative w-[80%] md:w-[60%] max-w-[600px] rounded-xl z-20 bg-[#F9F9F9]">
          {/* {success ? ( */}
          <div className="flex flex-col flex-grow items-center justify-center text-center px-5">
            <div className="bg-accent rounded-full w-fit flex justify-center p-8 items-center mb-10">
              <p className="text-6xl text-center">🎉</p>
            </div>
            <h2 className="text-2xl md:text-3xl text-black font-semibold">Your listing is almost live!</h2>
            <p className="text-[#959595] mt-1">Please wait up to 24 hours for your details to be verified.</p>
            <div className="w-[256px] mt-5 space-y-2">
              <a
                href={`/book/${data?._id}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-primary hover:btn-accent w-full">
                preview
              </a>
              <button className="btn btn-primary w-full" onClick={handleProceed}>
                proceed to dashboard
              </button>
            </div>
          </div>
          {/* ) : (
            <>
              <h2 className="font-semibold text-xl text-primary">You're Almost There!</h2>
              <label
                htmlFor="preview"
                className="btn btn-sm btn-circle bg-accent text-primary hover:text-white border-accent hover:bg-primary hover:border-none absolute right-6 top-6">
                <XIcon className="w-4" />
              </label>
              <div className="my-8 flex justify-center">
                <ListingCard />
              </div>
              <button className="btn btn-primary w-full font-normal">Publish Listing</button>
            </>
          )} */}
        </label>
      </label>
    </>
  );
};

export default PreviewModal;
