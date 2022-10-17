import React from "react";
import { LocationMarkerIcon, MapIcon } from "@heroicons/react/outline";
import GoogleMap from "./GoogleMap";
import BookContainer from "../BookContainer";

const Location = () => {
  const Landmarks = ["Westfield Park", "easyGuide", "Crosby Moran Hall", "Lots Road Power Station"];
  return (
    <BookContainer>
      <h2 className="text-md font-semibold">Location</h2>
      <div className="md:flex justify-between align-top  gap-5 mt-6">
        <div className="bg-[#EEEEEE] md:w-1/3 p-6  rounded-md">
          <h3 className="text-[14px] font-bold">Need Directions?</h3>
          <div className="flex flex-row flex-grow md:gap-4 bg-[#E7E7E7] items-center mb-2 md:mb-0 p-4 mt-4 mb-4 rounded-md">
            <MapIcon className="text-primary w-5 md:w-6 mr-1" />
            <input
              type="text"
              // value={""}
              // onChange={""}
              placeholder="Enter postcode or location"
              className="w-full text-[#959595] bg-transparent h-full  pr-6 outline-none text-base placeholder:text-[#959595] placeholder:text-[10px] md:placeholder:text-[14px]"
            />
            <div className="w-8">
              <img src="/search-status.png" className="w-full" />
            </div>
          </div>

          <h3 className="text-[14px] mt-6 mb-4 font-bold">Nearest Landmarks</h3>
          {Landmarks.map((landmark, i) => (
            <div className="flex mb-4" key={i}>
              <LocationMarkerIcon className="text-primary w-5 md:w-6 mr-1 " />
              <p className="text-[12px] text-[#959595]">{landmark}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 md:w-2/3 md:mt-0 rounded-md  ">
          <GoogleMap />
        </div>
      </div>
    </BookContainer>
  );
};

export default Location;
