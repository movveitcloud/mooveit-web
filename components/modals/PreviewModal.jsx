import { XIcon } from "@heroicons/react/outline";
import React from "react";
import ListingCard from "../shared/ListingCard";

const PreviewModal = () => {
  return (
    <>
      <input type="checkbox" id="preview" className="modal-toggle" />
      <label htmlFor="previe" className="modal">
        <label className="modal-box p-8 relative w-[80%] md:w-[60%] max-w-[600px] rounded-xl z-20 bg-[#F9F9F9]">
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
        </label>
      </label>
    </>
  );
};

export default PreviewModal;
