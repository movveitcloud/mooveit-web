import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ArchiveIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  LocationMarkerIcon,
  MapIcon,
  TruckIcon,
} from "@heroicons/react/outline";

import { storageFeatures } from "../../helpers/data";
import { formatMoney } from "../../helpers/utils";
import BookContainer from "./BookContainer";

const BookListingMainCard = () => {
  const { userListing, userListingLoading } = useSelector((state) => state.listing);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/listingdummy.png", "/listingdummy2.png", "/listingdummy3.png"];

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const getFeatures = () => {
    const filter = storageFeatures.filter((p) => userListing?.storageFeatures?.includes(p.value));
    return filter;
  };

  return (
    <BookContainer>
      <div className="w-full h-[200px] md:h-[400px] relative overflow-hidden flex rounded-lg">
        {userListing?.media?.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={img}
            className="object-cover min-w-full w-full h-full transition-all duration-700 select-none"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
          />
        ))}
        {currentIndex > 0 && (
          <div
            className="absolute left-3 md:left-5 -translate-y-[50%] top-[50%] w-6 h-6 flex justify-center items-center rounded-full bg-[#DDDDDD99] hover:bg-[#ddddddaf] shadow text-white cursor-pointer select-none active:scale-90 transition-all duration-200"
            onClick={prevImage}>
            <ChevronLeftIcon className="w-4" />
          </div>
        )}
        {currentIndex < userListing?.media?.length - 1 && (
          <div
            className="absolute right-3 md:right-5 -translate-y-[50%] top-[50%] w-6 h-6 flex justify-center items-center rounded-full bg-[#DDDDDD99] hover:bg-[#ddddddaf] shadow text-white cursor-pointer select-none active:scale-90 transition-all duration-200"
            onClick={nextImage}>
            <ChevronRightIcon className="w-4" />
          </div>
        )}
      </div>

      <div className="">
        <h3 className="md:text-lg font-bold my-3 capitalize">{userListing?.storageTitle}</h3>
        <p className="flex flex-row items-start gap-1 md:gap-2 text-primary">
          <LocationMarkerIcon className="w-4 min-w-[16px]" />
          <span className="uppercase font-light text-sm md:text-base">{userListing?.address}</span>
        </p>

        <div className="py-3 space-y-4 md:space-y-5">
          {userListing?.description && <p className="text-sm text-[#959595]">{userListing?.description}</p>}
          <div className="flex flex-row gap-3">
            <p className="flex flex-row items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-[12px] uppercase">24 HR ACCESS</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <MapIcon className="w-4" />
              <span className="text-[12px] uppercase">{`${userListing?.storageSize?.name} SQ. FT`}</span>
            </p>
          </div>

          {/*storage features */}
          <div className="flex flex-row items-center gap-2">
            {getFeatures()?.map(({ label, value, icon }) => (
              <span key={value} className="tooltip tooltip-primary cursor-pointer" data-tip={label}>
                {icon}
              </span>
            ))}
          </div>

          {(userListing?.delivery || userListing?.packing) && (
            <div className="flex flex-row gap-6">
              {userListing?.delivery && (
                <p className="flex flex-row items-center gap-2">
                  <span className="rounded-full p-[6px] bg-accent">
                    <TruckIcon className="text-primary w-4" />
                  </span>
                  <span className="text-[12px]">Delivery</span>
                </p>
              )}
              {userListing?.packing && (
                <p className="flex flex-row items-center gap-2">
                  <span className="rounded-full p-[6px] bg-accent">
                    <ArchiveIcon className="text-primary w-4" />
                  </span>
                  <span className="text-[12px]">Pack & Move</span>
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-row space-x-6 items-center mt-2">
          {userListing?.monthlyRate && (
            <p className="text-primary font-semibold text-xl">
              {formatMoney(userListing?.monthlyRate)} <span className="text-[#959595] font-normal text-sm">/month</span>
            </p>
          )}
          {userListing?.hourlyRate && (
            <p className="text-primary font-semibold text-xl">
              {formatMoney(userListing?.hourlyRate)} <span className="text-[#959595] font-normal text-sm">/hour</span>
            </p>
          )}
        </div>
      </div>
    </BookContainer>
  );
};

export default BookListingMainCard;
