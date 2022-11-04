import React from "react";
import Link from "next/link";
import { ArchiveIcon, ClockIcon, LocationMarkerIcon, MapIcon, TruckIcon } from "@heroicons/react/outline";
import { formatMoney } from "../../helpers/utils";
import { storageFeats, storageFeatures } from "../../helpers/data";
import { StarIcon } from "@heroicons/react/solid";

const ListingCard = ({ item, preview }) => {
  const getFeatures = () => {
    const filter = storageFeatures.filter((p) => item?.storageFeatures.includes(p.value));
    return filter;
  };

  return (
    <Link href={preview ? "" : `/book/${item?._id}`}>
      <a className="bg-white w-full sm:w-[375px] rounded-lg p-5 hover:shadow transition-shadow duration-500 h-full">
        <div className="w-full h-[200px]">
          <img
            src="/listingdummy.png"
            alt="Listing"
            className="object-cover w-full h-full rounded-lg hover:shadow-md transition-all duration-200"
          />
        </div>
        <div className="">
          <h3 className="text-[#222222] font-bold py-3">{`${item?.storageTitle?.slice(0, 38)}${
            item?.storageTitle?.length > 38 ? "..." : ""
          }`}</h3>
          <p className="flex flex-row items-center gap-2 text-primary">
            <LocationMarkerIcon className="w-4" />
            <span
              className="text-sm uppercase tooltip tooltip-primary"
              data-tip={item?.address}>{`${item?.address?.slice(0, 38)}${
              item?.address?.length > 38 ? "..." : ""
            }`}</span>
          </p>

          <div className="py-3 space-y-4">
            <div className="flex flex-row gap-3">
              <p className="flex flex-row items-center gap-2 text-[#107E7E]">
                <ClockIcon className="text-[#222222] w-4" />
                <span className="text-[#222222] text-[12px] uppercase">24 HR ACCESS</span>
              </p>
              <p className="flex flex-row items-center gap-2 text-[#107E7E]">
                <MapIcon className="text-[#222222] w-4" />
                <span className="text-[#222222] text-[12px] uppercase">{`${item?.storageSize} SQ. FT`}</span>
              </p>
            </div>

            {/*storage features */}
            <div className="flex flex-row items-center gap-2">
              {getFeatures()?.map(({ value, label, icon }) => (
                <span key={value} className="tooltip tooltip-primary" data-tip={label}>
                  {icon}
                </span>
              ))}
            </div>

            {(item?.delivery || item?.packing) && (
              <div className="flex flex-row gap-3">
                {item?.delivery && (
                  <p className="flex flex-row items-center gap-2 text-[#107E7E]">
                    <span className="rounded-full p-[6px] bg-accent">
                      <TruckIcon className="text-primary w-4" />
                    </span>
                    <span className="text-[#222222] text-[12px]">Delivery</span>
                  </p>
                )}
                {item?.packing && (
                  <p className="flex flex-row items-center gap-2 text-[#107E7E]">
                    <span className="rounded-full p-[6px] bg-accent">
                      <ArchiveIcon className="text-primary w-4" />
                    </span>
                    <span className="text-[#222222] text-[12px]">Pack & Move</span>
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-row justify-between items-center mt-2">
            <p className="text-primary font-semibold text-xl">
              {formatMoney(item?.monthlyRate)} <span className="text-[#959595] font-normal text-xs">/month</span>
            </p>
            <div className="flex items-center">
              <StarIcon className="w-5 text-accent" /> <p className="text-sm">4.76</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ListingCard;
