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
      <label htmlFor="preview" className="modal">
        <label className="modal-box relative z-20 w-[80%] max-w-[600px] rounded-xl bg-[#F9F9F9] p-8 md:w-[60%]">
          {/* {success ? ( */}
          <div className="flex flex-grow flex-col items-center justify-center px-5 text-center">
            <div className="mb-10 flex w-fit items-center justify-center rounded-full bg-accent p-8">
              <p className="text-center text-6xl">🎉</p>
            </div>
            <h2 className="text-2xl font-semibold text-black md:text-3xl">Your listing is almost live!</h2>
            <p className="mt-1 text-[#959595]">Please wait up to 24 hours for your liting to be approved.</p>
            <div className="mt-5 w-[256px] space-y-2">
              <a
                href={`/book/${data?._id}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-primary w-full hover:btn-accent">
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
