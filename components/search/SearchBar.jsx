import React, { useState } from "react";
import {
  ClockIcon,
  CubeIcon,
  FilterIcon,
  LocationMarkerIcon,
  MapIcon,
  SearchIcon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/outline";
import FilterModal from "../modals/FilterModal";
import Switch from "../shared/Switch";

const initialState = {
  moving: false,
  packing: false,
  priceRange: "hour",
  storageType: "",
  storageSize: "",
};

const SearchBar = ({ showMap, setShowMap, mapContainer, cardContainer }) => {
  const [formDetails, setFormDetails] = useState(initialState);

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormDetails({
      ...formDetails,
      [name]: val,
    });
  };

  const toggleView = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMap(!showMap);
  };

  return (
    <div className="sticky top-0 text-sm z-50">
      <div className="bg-primary flex">
        <div className="md:max-w-[90%] max-w-full lg:max-w-[85%] mx-auto justify-center p-5 ">
          <div className="flex flex-col md:flex-row items-center md:gap-2 px-10 py-4  bg-white rounded-lg w-full">
            <div className="flex  items-center gap-1 md:gap-3 mb-2 md:mb-0">
              <div className="flex items-center  md:gap-2 border-r">
                <LocationMarkerIcon className="w-5 mr-1 md:mr-0" />
                <input type="text" className="bg-transparent text-[0.6rem] md:text-[0.9em]  outline-none w-full" placeholder="LONDON, UK" />
              </div>
              <div className="flex items-center  md:gap-2 border-r">
                <ClockIcon className="w-5 mr-1 md:mr-0" />
                <input type="text" className="bg-transparent text-[0.6rem] md:text-[0.9em] outline-none w-full" placeholder="ANY TIME" />
              </div>
              <div className="flex items-center  md:gap-2">
                <UserIcon className="w-5 mr-1 md:mr-0" />
                <input type="text" className="bg-transparent outline-none w-full text-[0.6rem] md:text-[0.9em]" placeholder="ANY PARTNER" />
              </div>
            </div>
            <div className="w-full md:w-auto  ">
            <button className=" btn btn-accent btn-sm px-5 font-normal text-sm w-full md:w-auto h-8 flex flex-nowrap items-center gap-2 normal-case text-[0.7rem] md:text-[0.9em]">
              <SearchIcon className="w-4" /> Search
            </button>
            </div>
          </div>
        </div>
      </div>
      

      <div className="bg-white">
        <div className="max-w-[90%] lg:max-w-[85%] mx-auto flex justify-between p-5">
          <div className="md:flex gap-8 hidden ">
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <TruckIcon className="w-6 text-[#222222]" />
                <p className="font-[500]">Moving</p>
              </div>
              <Switch name="moving" handleChange={handleChange} formDetails={formDetails} />
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <CubeIcon className="w-6 text-[#222222]" />
                <p className="font-[500]">Packing</p>
              </div>
              <Switch name="packing" handleChange={handleChange} formDetails={formDetails} />
            </div>
          </div>


          <div className="mx-auto md:m-0">
          
            <div className="flex   justify-center md:gap-8  ">
              <button className="btn btn-primary px-5 font-normal text-sm flex  items-center md:gap-2 text-[0.8rem] md:text-[1em] mr-8 md:mr-0" onClick={toggleView}>
                <MapIcon className="w-4 mr-2 md:mr-0 " />
                {showMap ? "Hide Map" : "Show Map"}
              </button>
              <label
                htmlFor="filter"
                className="btn btn-outline btn-primary hover:btn-accent px-5 font-normal text-sm flex items-center md:gap-2 text-[0.8rem] md:text-[1em]">
                <FilterIcon className="w-4 mr-2 md:mr-0" />
                Apply Filters
              </label>
            </div>
          </div>
          <FilterModal formDetails={formDetails} handleChange={handleChange} />
        </div>
      </div>
      <div className="flex justify-center gap-8  bg-primary  md:hidden">
      <div className="max-w-[90%] lg:max-w-[85%]  mx-auto text-white flex justify-between p-5">
            <div className="flex  items-center mr-8">
              <div className="flex items-center mr-4 ">
                <TruckIcon className="w-6 text-[#222222] mr-2" />
                <p className="font-[500]">Moving</p>
              </div>
              <Switch name="moving" handleChange={handleChange} formDetails={formDetails} />
            </div>
            <div className="flex  items-center">
              <div className="flex items-center mr-4 ">
                <CubeIcon className="w-6 text-[#222222] mr-2" />
                <p className="font-[500]">Packing</p>
              </div>
              <Switch name="packing" handleChange={handleChange} formDetails={formDetails} />
            </div>
            </div>
          </div>

    </div>
  );
};

export default SearchBar;
