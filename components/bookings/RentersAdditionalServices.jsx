import React from "react";
import { ArchiveIcon, ClockIcon, LocationMarkerIcon, MapIcon, TruckIcon } from "@heroicons/react/outline";
import Accordion from "../shared/Accordion";

const RentersAdditionalServices = ({ delivery, packing }) => {
  return (
    <Accordion title="Additional Services">
      <div className="flex flex-grow flex-row items-center gap-2    ">
        {!delivery && !packing ? (
          "N/A"
        ) : (
          <div className=" flex flex-col items-center gap-6">
            <div className="flex items-center gap-5">
              {delivery == "true" && (
                <div className="flex flex-row items-center gap-2 text-[#959595]">
                  <span className="rounded-full bg-accent p-[6px]">
                    <TruckIcon className="w-6 text-primary" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-base text-[#222222]">Moving</span>
                    <p>This listing offers moving services for an additional cost</p>
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
    </Accordion>
  );
};

export default RentersAdditionalServices;
