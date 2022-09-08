import {
  ArchiveIcon,
  ClockIcon,
  LightBulbIcon,
  LockClosedIcon,
  MapIcon,
  TruckIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import React from "react";
import { formatMoney } from "../../helpers/utils";

const ListingCard = () => {
  return (
    <div className="bg-white w-full rounded-lg p-5">
      <div className="w-full h-[200px]">
        <img src="/listingdummy.png" alt="Listing" className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="">
        <h3 className="text-[#222222] font-bold py-3">Access Self Storage - Chelsea</h3>
        <p className="flex flex-row items-center gap-2 text-[#107E7E]">
          <MapIcon className="text-[#959595] w-4" />
          <span className="text-[#959595] text-sm uppercase">65-69 Lots Road, Chelsea, SW10 0RN</span>
        </p>

        <div className="py-3 space-y-4">
          <div className="flex flex-row gap-3">
            <p className="flex flex-row items-center gap-2 text-[#107E7E]">
              <ClockIcon className="text-[#222222] w-4" />
              <span className="text-[#222222] text-[12px] uppercase">24 HR ACCESS</span>
            </p>
            <p className="flex flex-row items-center gap-2 text-[#107E7E]">
              <MapIcon className="text-[#222222] w-4" />
              <span className="text-[#222222] text-[12px] uppercase">72 SQ. FT</span>
            </p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <VideoCameraIcon className="text-[#222222] w-4" />
            <UserGroupIcon className="text-[#222222] w-4" />
            <LightBulbIcon className="text-[#222222] w-4" />
            <LockClosedIcon className="text-[#222222] w-4" />
          </div>

          <div className="flex flex-row gap-3">
            <p className="flex flex-row items-center gap-2 text-[#107E7E]">
              <span className="rounded-full p-[6px] bg-[#CFE8A9]">
                <TruckIcon className="text-[#222222] w-4" />
              </span>
              <span className="text-[#222222] text-[12px]">Delivery</span>
            </p>
            <p className="flex flex-row items-center gap-2 text-[#107E7E]">
              <span className="rounded-full p-[6px] bg-[#CFE8A9]">
                <ArchiveIcon className="text-[#222222] w-4" />
              </span>
              <span className="text-[#222222] text-[12px]">Pack & Move</span>
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mt-2">
          <p className="text-primary font-semibold text-xl">
            {formatMoney(1200)} <span className="text-[#959595] font-normal text-xs">/month</span>
          </p>
          <div>......</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
