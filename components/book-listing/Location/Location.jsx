import React, { useState } from "react";
import { LocationMarkerIcon, MapIcon } from "@heroicons/react/outline";
import GoogleMap from "./GoogleMap";
import { useDispatch, useSelector } from "react-redux";
import BookContainer from "../BookContainer";
import GoogleMapReact from "google-map-react";
import { CalendarIcon, TruckIcon } from "@heroicons/react/outline";
import { useEffect } from "react";

const Location = () => {
  const Landmarks = ["Westfield Park", "easyGuide", "Crosby Moran Hall", "Lots Road Power Station"];
  const { userListing, userListingLoading } = useSelector((state) => state.listing);

  const defaultProps = {
    center: {
      lat: 57.1498891,
      lng: -2.0937528,
    },
    zoom: 15,
  };

  const Marker = () => <LocationMarkerIcon className="w-8 text-red-500" />;

  return (
    <BookContainer>
      {/* <h2 className="text-md font-semibold">Location</h2> */}
      {/* <div className="mt-6 justify-between gap-5  align-top md:flex"> */}
      <div className="mt-6   ">
        {/* <div className="rounded-md bg-[#EEEEEE] p-6  md:w-1/3">
          <h3 className="text-[14px] font-bold">Need Directions?</h3>
          <div className="mb-2 mt-4 mb-4 flex flex-grow flex-row items-center rounded-md bg-[#E7E7E7] p-4 md:mb-0 md:gap-4">
            <MapIcon className="mr-1 w-5 text-primary md:w-6" />
            <input
              type="text"
              // value={""}
              // onChange={""}
              placeholder="Enter postcode or location"
              className="h-full w-full bg-transparent pr-6  text-base text-[#959595] outline-none placeholder:text-[10px] placeholder:text-[#959595] md:placeholder:text-[14px]"
            />
            <div className="w-8">
              <img src="/search-status.png" className="w-full" />
            </div>
          </div>

          <h3 className="mt-6 mb-4 text-[14px] font-bold">Nearest Landmarks</h3>
          {Landmarks.map((landmark, i) => (
            <div className="mb-4 flex" key={i}>
              <LocationMarkerIcon className="mr-1 w-5 text-primary md:w-6 " />
              <p className="text-[12px] text-[#959595]">{landmark}</p>
            </div>
          ))}
        </div> */}
        {/* <div className="mt-5 rounded-md md:mt-0 md:w-2/3  "> */}
        <div className=" w-full rounded-md  md:mt-0 ">
          {/* <GoogleMap /> */}

          {userListing?.coordinates?.lat && (
            <div className="mt-8 h-[250px] w-full overflow-hidden  rounded-md">
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.PLACES_KEY }}
                defaultCenter={{ lat: +userListing?.coordinates?.lat, lng: +userListing?.coordinates?.lng }}
                defaultZoom={defaultProps.zoom}>
                {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
                <Marker lat={+userListing?.coordinates?.lat} lng={+userListing?.coordinates?.lng} />
              </GoogleMapReact>
            </div>
          )}
        </div>
      </div>
    </BookContainer>
  );
};

export default Location;
