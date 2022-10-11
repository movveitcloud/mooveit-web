import React from "react";
import { ArchiveIcon, ClockIcon, LocationMarkerIcon, MapIcon, TruckIcon } from "@heroicons/react/outline";
import { formatMoney } from "../../helpers/utils";
import { storageFeats } from "../../helpers/data";

const ListingCard = () => {
  return (
    <a
      href="#"
      className="bg-white w-full sm:w-[375px] rounded-lg p-5 hover:shadow hover:scale-105 transition-transform duration-500">
      <div className="w-full h-[200px]">
        <img
          src="/listingdummy.png"
          alt="Listing"
          className="object-cover w-full h-full rounded-lg hover:shadow-md transition-all duration-200"
        />
      </div>
      <div className="">
        <h3 className="text-[#222222] font-bold py-3">Access Self Storage - Chelsea</h3>
        <p className="flex flex-row items-center gap-2 text-primary">
          <LocationMarkerIcon className="w-4" />
          <span className="text-sm uppercase">65-69 Lots Road, Chelsea, SW10 0RN</span>
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

          {/*storage features */}
          <div className="flex flex-row items-center gap-2">
            {storageFeats.map(({ name, icon }) => (
              <span key={name} className="tooltip tooltip-primary" data-tip={name}>
                {icon}
              </span>
            ))}
          </div>

          <div className="flex flex-row gap-3">
            <p className="flex flex-row items-center gap-2 text-[#107E7E]">
              <span className="rounded-full p-[6px] bg-accent">
                <TruckIcon className="text-primary w-4" />
              </span>
              <span className="text-[#222222] text-[12px]">Delivery</span>
            </p>
            <p className="flex flex-row items-center gap-2 text-[#107E7E]">
              <span className="rounded-full p-[6px] bg-accent">
                <ArchiveIcon className="text-primary w-4" />
              </span>
              <span className="text-[#222222] text-[12px]">Pack & Move</span>
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mt-2">
          <p className="text-primary font-semibold text-xl">
            {formatMoney(1200)} <span className="text-[#959595] font-normal text-xs">/month</span>
          </p>
          <div className="rating rating-sm">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ListingCard;
