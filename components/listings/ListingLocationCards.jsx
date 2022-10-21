import React, { useState } from "react";
import { useRouter } from "next/router";
import { EyeIcon, LocationMarkerIcon, PencilAltIcon, PencilIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import { TrashIcon } from "@heroicons/react/solid";
import DeleteListingModal from "../modals/DeleteListingModal";

const ListingLocationCard = ({ data }) => {
  const router = useRouter();

  return (
    <AnimatePresence key={data?._id} exitBeforeEnter initial={true}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="p-4 bg-white rounded-md w-full hover:shadow">
        <div className="w-full h-[200px]">
          <img src="/listing.png" alt="listing view" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="flex mt-4 justify-between">
          <div className="flex gap-2 items-center text-[#959595] cursor-pointer">
            <LocationMarkerIcon className="w-4" />
            <h4 className="capitalize text-sm">{data?.address}</h4>
          </div>
          <div className="flex gap-4 items-center text-primary">
            <a
              href={`/book/${data._id}`}
              target="_blank"
              rel="noreferrer"
              className="tooltip tooltip-primary cursor-pointer"
              data-tip="View">
              <EyeIcon className="w-5 tooltip tooltip-primary" />
            </a>
            <span
              className="tooltip tooltip-primary cursor-pointer"
              data-tip="Edit"
              onClick={() => router.push(`/listings/edit/${data._id}`)}>
              <PencilAltIcon className="w-5 tooltip tooltip-primary" />
            </span>
            <label htmlFor={data._id} className="tooltip tooltip-error text-white cursor-pointer" data-tip="Delete">
              <TrashIcon className="w-5 text-red-500 tooltip tooltip-info" />
            </label>
            {/* <p className="text-sm">Edit</p> */}
          </div>
        </div>
        <DeleteListingModal id={data._id} />
      </motion.div>
    </AnimatePresence>
  );
};

export default ListingLocationCard;
