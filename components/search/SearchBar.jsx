import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListingInputContext } from "../../context";
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
import PlacesAutocomplete from "react-places-autocomplete";
import { useRouter } from "next/router";
import { clearFilteredListings, filterListings } from "../../redux/features/listings.slice";

const initialState = {
  address: "",
  delivery: false,
  packing: false,
  type: "hour",
  storageType: "",
  storageSize: "",
  minPrice: "",
  maxPrice: "",
  area: "",
};

const SearchBar = ({ showMap, setShowMap }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [formDetails, setFormDetails] = useState(initialState);
  const { serviceProvided, setServiceProvided, initialService } = useContext(ListingInputContext);
  const { searchListings, searchLoading, listings, filteredListings } = useSelector((state) => state.listing);

  const handleAddressChange = (address) => {
    setFormDetails({ ...formDetails, address });
    setSearchTerm(address);
  };
  const handleSelect = (address) => {
    setFormDetails({ ...formDetails, address });
    setSearchTerm(address);
  };

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormDetails({
      ...formDetails,
      [name]: val,
    });
    setServiceProvided({ ...serviceProvided, [name]: val });
    //console.log(serviceProvided);
  };
  useEffect(() => {
    setServiceProvided(initialService);
  }, []);

  const toggleView = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMap(!showMap);
  };

  const router = useRouter();

  const handleSearch = (e) => {
    if (!searchTerm) return errorPopUp({ msg: "Please enter a location" });
    router.push({ pathname: "/search", query: { s: searchTerm.toLowerCase() } });
  };
  //console.log(serviceProvided);

  return (
    <div className="sticky top-0 z-40 text-sm">
      <div className="flex bg-primary">
        <div className="mx-auto max-w-full justify-center  p-5 md:max-w-[90%] lg:max-w-[85%] ">
          <div className="flex w-full flex-col items-center  rounded-lg bg-white  px-10  py-4 md:flex-row md:gap-2">
            <div className="mb-2 mr-20 flex items-start   gap-1 md:mb-0 md:gap-3">
              <div className="flex items-center   md:gap-2">
                <LocationMarkerIcon className="mr-1 w-5 md:mr-0" />
                {/* <input
                  type="text"
                  className="bg-transparent text-[0.6rem] md:text-[0.9em]  outline-none w-full"
                  placeholder="LONDON, UK"
                /> */}
                <div className="w-full ">
                  <PlacesAutocomplete
                    value={formDetails.address}
                    //value={address}
                    onChange={handleAddressChange}
                    onSelect={handleSelect}
                    debounce={400}
                    searchOptions={{ types: ["locality", "country"] }}
                    shouldFetchSuggestions={formDetails?.address?.length > 5}>
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                      <div className="relative ">
                        <input
                          {...getInputProps({
                            placeholder: "Enter location",
                            className: "w-full border-none outline-none",
                          })}
                        />
                        <div className="absolute left-0 right-0 top-7 z-50">
                          {loading && <div>Loading...</div>}
                          {suggestions.map((suggestion) => {
                            const className = suggestion.active ? "suggestion-item--active p-2" : "suggestion-item p-2";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? { backgroundColor: "#fafafa", cursor: "pointer" }
                              : { backgroundColor: "#ffffff", cursor: "pointer" };
                            return (
                              <div
                                key={suggestion.description}
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style,
                                })}>
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </div>
              </div>
              {/* <div className="flex items-center  md:gap-2 border-r">
                <ClockIcon className="w-5 mr-1 md:mr-0" />
                <input
                  type="text"
                  className="bg-transparent text-[0.6rem] md:text-[0.9em] outline-none w-full"
                  placeholder="ANY TIME"
                />
              </div> */}
              {/* <div className="flex items-center  md:gap-2">
                <UserIcon className="mr-1 w-5 md:mr-0" />
                <input
                  type="text"
                  className="w-full bg-transparent text-[0.6rem] outline-none md:text-[0.9em]"
                  placeholder="ANY PARTNER"
                />
              </div> */}
            </div>
            <div className="w-full md:w-auto  " onClick={handleSearch}>
              <button className=" btn btn-accent btn-sm flex h-8 w-full flex-nowrap items-center gap-2 px-5 text-sm text-[0.7rem] font-normal normal-case md:w-auto md:text-[0.9em]">
                <SearchIcon className="w-4" /> Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex max-w-[90%] justify-between p-5 lg:max-w-[85%]">
          <div className="hidden gap-8 md:flex">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <TruckIcon className="w-6 text-[#222222]" />
                <p className="font-[500]">Delivery</p>
              </div>
              <Switch name="delivery" handleChange={handleChange} formDetails={formDetails} />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CubeIcon className="w-6 text-[#222222]" />
                <p className="font-[500]">Packing</p>
              </div>
              <Switch name="packing" handleChange={handleChange} formDetails={formDetails} />
            </div>
          </div>

          <div className="mx-auto md:m-0">
            <div className="flex justify-center md:gap-8">
              <button
                className="btn btn-primary mr-8 flex items-center px-6 text-sm text-[0.8rem] font-normal normal-case md:mr-0 md:gap-2 md:text-[1em]"
                onClick={toggleView}>
                <MapIcon className="mr-2 w-4 md:mr-0 " />
                {showMap ? "Hide Map" : "Show Map"}
              </button>
              <label
                htmlFor="filter"
                className="btn btn-outline btn-primary flex items-center px-6 text-sm text-[0.8rem] font-normal normal-case hover:btn-accent md:gap-2 md:text-[1em]">
                <FilterIcon className="mr-2 w-4 md:mr-0" />
                Filters
              </label>
            </div>
          </div>
          <FilterModal
            formDetails={formDetails}
            initialState={initialState}
            setFormDetails={setFormDetails}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center gap-8  bg-primary  md:hidden">
        <div className="mx-auto flex  max-w-[90%] justify-between p-5 text-white lg:max-w-[85%]">
          <div className="mr-8  flex items-center">
            <div className="mr-4 flex items-center ">
              <TruckIcon className="mr-2 w-6 text-[#222222]" />
              <p className="font-[500]">Moving</p>
            </div>
            <Switch name="delivery" handleChange={handleChange} formDetails={formDetails} />
          </div>
          <div className="flex  items-center">
            <div className="mr-4 flex items-center ">
              <CubeIcon className="mr-2 w-6 text-[#222222]" />
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
