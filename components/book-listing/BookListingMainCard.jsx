import React, { useState } from "react";
import {
  ArchiveIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  LocationMarkerIcon,
  MapIcon,
  TruckIcon,
} from "@heroicons/react/outline";
import { storageFeats } from "../../helpers/data";
import { formatMoney } from "../../helpers/utils";
import BookContainer from "./BookContainer";

const BookListingMainCard = () => {
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

  return (
    <BookContainer>
      <div className="w-full h-[200px] md:h-[400px] relative overflow-hidden flex rounded-lg">
        {images.map((img, i) => (
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
            className="absolute left-3 md:left-5 -translate-y-[50%] top-[50%] w-6 h-6 flex justify-center items-center rounded-full bg-[#DDDDDD99] shadow text-white cursor-pointer select-none"
            onClick={prevImage}>
            <ChevronLeftIcon className="w-4" />
          </div>
        )}
        {currentIndex < images.length - 1 && (
          <div
            className="absolute right-3 md:right-5 -translate-y-[50%] top-[50%] w-6 h-6 flex justify-center items-center rounded-full bg-[#DDDDDD99] shadow text-white cursor-pointer select-none"
            onClick={nextImage}>
            <ChevronRightIcon className="w-4" />
          </div>
        )}
      </div>

      <div className="">
        <h3 className="md:text-lg font-bold my-3">Access Self Storage - Chelsea</h3>
        <p className="flex flex-row items-center gap-1 md:gap-2 text-primary">
          <LocationMarkerIcon className="w-4" />
          <span className="uppercase font-light text-sm md:text-base">65-69 Lots Road, Chelsea, SW10 0RN</span>
        </p>

        <div className="py-3 space-y-4 md:space-y-5">
          <p className="text-sm text-[#959595]">
            Whether you're moving house, making space at home or storing furniture while you decorate, renting a storage
            unit with Access Self Storage is flexible and easy.
          </p>
          <div className="flex flex-row gap-3">
            <p className="flex flex-row items-center gap-2">
              <ClockIcon className="w-4" />
              <span className="text-[12px] uppercase">24 HR ACCESS</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <MapIcon className="w-4" />
              <span className="text-[12px] uppercase">72 SQ. FT</span>
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

          <div className="flex flex-row gap-6">
            <p className="flex flex-row items-center gap-2">
              <span className="rounded-full p-[6px] bg-accent">
                <TruckIcon className="text-primary w-4" />
              </span>
              <span className="text-[12px]">Delivery</span>
            </p>
            <p className="flex flex-row items-center gap-2">
              <span className="rounded-full p-[6px] bg-accent">
                <ArchiveIcon className="text-primary w-4" />
              </span>
              <span className="text-[12px]">Pack & Move</span>
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-6 items-center mt-2">
          <p className="text-primary font-semibold text-xl">
            {formatMoney(1200)} <span className="text-[#959595] font-normal text-sm">/month</span>
          </p>
          <p className="text-primary font-semibold text-xl">
            {formatMoney(2.56)} <span className="text-[#959595] font-normal text-sm">/hour</span>
          </p>
        </div>
      </div>
    </BookContainer>
  );
};

export default BookListingMainCard;
