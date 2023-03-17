import React from "react";
import { useRouter } from "next/router";
import { PencilIcon, LocationMarkerIcon } from "@heroicons/react/outline";

const YourstorageLayout = ({ storageStatus, bookings }) => {
  const router = useRouter();
  const viewStorage = (_id) => router.push(`/your-storage/${_id}`);

  return (
    <div className="mt-12 flex w-full flex-wrap gap-5">
      {bookings?.map(({ storageListing, user, approvalStatus, _id, name, paymentStatus }, i) =>
        // storageStatus === approvalStatus && (
        paymentStatus === "successful" && storageStatus === "active" ? (
          <div
            className="mb-5  w-full items-center rounded-md bg-white p-4 transition-transform duration-500 hover:scale-105 hover:shadow md:w-[48%] lg:w-[31%]"
            key={i}>
            <div className="rounnded-md h-[120px]">
              <img
                src={storageListing?.media[0] || "/listing.png"}
                alt="listing view"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className=" mt-3 flex text-[#959595]">
              <LocationMarkerIcon className="mr-2 w-4" />
              <h4 className="text-[.6rem] lg:text-[.7rem]">{storageListing.address}</h4>
            </div>

            <div className="float-right mt-2 cursor-pointer md:mt-4 " onClick={() => viewStorage(_id)}>
              <div className=" flex">
                <PencilIcon className="mr-2 w-4 text-[#4543A5] " />
                <p className="cursor-pointer text-[.7rem] text-[#4543A5] lg:text-[.8rem]">MANAGE</p>
              </div>
            </div>
          </div>
        ) : (paymentStatus === null || paymentStatus === "error") && storageStatus === approvalStatus ? (
          <div
            className="mb-5  w-full items-center rounded-md bg-white p-4 transition-transform duration-500 hover:scale-105 hover:shadow md:w-[48%] lg:w-[31%]"
            key={i}>
            <div className="rounnded-md h-[120px]">
              <img
                src={storageListing?.media[0] || "/listing.png"}
                alt="listing view"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className=" mt-3 flex text-[#959595]">
              <LocationMarkerIcon className="mr-2 w-4" />
              <h4 className="text-[.6rem] lg:text-[.7rem]">{storageListing.address}</h4>
            </div>

            <div className="float-right mt-2 cursor-pointer md:mt-4 " onClick={() => viewStorage(_id)}>
              <div className=" flex">
                <PencilIcon className="mr-2 w-4 text-[#4543A5] " />
                <p className="cursor-pointer text-[.7rem] text-[#4543A5] lg:text-[.8rem]">MANAGE</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default YourstorageLayout;
