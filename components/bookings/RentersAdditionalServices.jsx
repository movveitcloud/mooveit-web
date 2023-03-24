import React from "react";
import { ArchiveIcon, ClockIcon, LocationMarkerIcon, MapIcon, TruckIcon } from "@heroicons/react/outline";
import Accordion from "../shared/Accordion";

const RentersAdditionalServices = ({ delivery, packing, pickupAddress }) => {
  return (
    <>
      <div className="mt-2 flex cursor-pointer justify-between   px-4  text-[#222222] md:px-6">
        <h2 className="text-left text-sm font-semibold capitalize md:text-base">Additional Services</h2>
      </div>
      <div className=" flex cursor-pointer justify-between   px-4 py-4 text-[#222222] md:px-6">
        <div className="flex flex-grow flex-row items-center gap-2    ">
          {!delivery && !packing ? (
            "N/A"
          ) : (
            <div className=" flex flex-col items-center ">
              <div className="flex items-center gap-5">
                {delivery == "true" && (
                  <div className="flex flex-row items-center gap-2 text-[#959595]">
                    <span className="rounded-full bg-accent p-[6px]">
                      <TruckIcon className="w-6 text-primary" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-base text-[#222222]">Pickup Address</span>
                      {/* <p>This listing offers moving services for an additional cost</p> */}
                      <p>{pickupAddress}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-5">
                {packing == "true" && (
                  <div className="flex flex-row items-center gap-2 text-[#959595]">
                    <span className="rounded-full bg-accent p-[6px]">
                      <ArchiveIcon className="w-6 text-primary" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-base text-[#222222]">Packing</span>
                      <p>This listing offers packing services for an additional cost</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RentersAdditionalServices;
