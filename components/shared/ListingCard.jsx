import React from "react";
import Link from "next/link";
import { ArchiveIcon, ClockIcon, LocationMarkerIcon, MapIcon, TruckIcon } from "@heroicons/react/outline";
import { formatMoney } from "../../helpers/utils";
import { storageFeatures } from "../../helpers/data";
import { DuplicateIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

const ListingCard = ({ item }) => {
  const getFeatures = () => {
    const filter = storageFeatures.filter((p) => item?.storageFeatures?.includes(p.value));
    return filter;
  };

  return (
    <Link href={`/book/${item?._id}`}>
      <a className="bg-white w-full sm:w-[375px] rounded-lg p-5 hover:shadow transition-shadow duration-500 h-full">
        <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
          <Image
            src={item?.media?.[0]}
            alt="Listing"
            className="rounded-lg hover:shadow-md transition-all duration-300 hover:scale-110"
            placeholder="blur"
            blurDataURL="/dummyListing.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {item?.media?.length > 1 && (
            <DuplicateIcon className="w-7 rotate-180 fill-[#e2e1e1] absolute top-3 right-3 drop-shado" />
          )}
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
                <span className="text-[#222222] text-[12px] uppercase">{`${item?.storageSize?.name} SQ. FT`}</span>
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
            {/* <div className="flex items-center">
              <StarIcon className="w-5 text-accent" /> <p className="text-sm">4.76</p>
            </div> */}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ListingCard;
