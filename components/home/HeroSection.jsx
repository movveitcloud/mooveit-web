import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { LocationMarkerIcon, MapIcon, SearchIcon } from "@heroicons/react/outline";
import { errorPopUp } from "../../helpers/toastify";
import PlacesAutocomplete from "react-places-autocomplete";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (address) => {
    setSearchTerm(address);
  };

  const handleSelect = (address) => {
    setSearchTerm(address);
    // geocodeByAddress(address)
    //   .then((results) => getLatLng(results[0]))
    //   .then((latLng) => setFormDetails({ ...formDetails, coordinates: latLng, address }))
    //   .catch((error) => console.error("Error", error));
  };
  const handleSearch = (e) => {
    if (!searchTerm) return errorPopUp({ msg: "Please enter a location" });
    router.push({ pathname: "/search", query: { s: searchTerm.toLowerCase() } });
  };

  return (
    <main className="bg-[#f9f9f9] mb-[10%]">
      <div className="flex justify-center h-[600px] rounded-2xl max-w-[90%] lg:max-w-[85%] mx-auto bg-[url('/hero-bg.png')] bg-cover relative">
        <div className="text-center space-y-3 sm:space-y-5 my-24 max-w-[80%] md:max-w-2xl mx-auto">
          <h1 className="font-semibold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Find Storage Around <span className="sm:mt-3 block">You Easily</span>
          </h1>
          <p className="sm:max-w-[85%] mx-auto text-sm md:text-base text-white">
            Get access to a pool of prospective customers when you list your storage with us.
          </p>
          <Link href="/get-started">
            <a className="btn btn-primary text-sm w-[150px] font-normal">Get Started</a>
          </Link>
        </div>

        <div className="p-8 w-[80%] sm:w-[90%] absolute -bottom-[19%]  sm:-bottom-[25%]  mx-auto rounded-2xl bg-white">
          <h2 className="text-[#222222] text-base mb-4">Find a Storage Unit Near You</h2>
          <div className="space-y-5 text-center text-sm text-[#222222]">
            <div className="p-6 bg-[#DDDDDD66] flex flex-col md:flex-row md:gap-4 rounded-2xl">
              <div className="flex flex-row flex-grow md:gap-4  items-center mb-2 md:mb-0">
                <MapIcon className="text-primary w-5 md:w-6 mr-1" />
                {/* <input
                  type="text"
                  value={searchTerm}
                  onChange={handleChange}
                  placeholder="Enter postcode or location"
                  
                  className="w-full bg-transparent h-full pr-6 outline-none text-base placeholder:text-[#959595] placeholder:text-[8px] md:placeholder:text-base"
                /> */}
                <div className="w-full h-full text-left text-base">
                  <PlacesAutocomplete
                    value={searchTerm}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    debounce={400}
                    searchOptions={{ types: ["locality", "country"] }}
                    shouldFetchSuggestions={searchTerm.length > 3}>
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                      <div className="relative h-full">
                        <input
                          {...getInputProps({
                            placeholder: "Enter location",
                            className: "w-full h-full border-none outline-none bg-transparent",
                          })}
                        />
                        <div className="absolute left-0 right-0 top-10 p- z-50">
                          {/* {loading && <div>Loading...</div>} */}
                          {suggestions.map((suggestion) => {
                            const className = suggestion.active
                              ? "suggestion-item--active py-2"
                              : "suggestion-item py-2";
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
              <button
                className="btn btn-primary w-full md:w-[220px] text-[0.6rem] md:text-[0.9rem] font-normal flex  flex-nowrap  flex-row md:gap-2"
                onClick={handleSearch}>
                <SearchIcon className="w-4 md:w-5 mr-1" />
                <span className="leading-5">Search Listings</span>
              </button>
            </div>

            <p className="text-[#959595] text-base">OR</p>

            <button className="w-full p-6 bg-accent flex flex-row  justify-center rounded-2xl active:scale-[95%] transition-transform ">
              <div className="flex flex-row  md:gap-4 items-center">
                <LocationMarkerIcon className="text-primary w-5 md:w-6 mr-1" />
                <p className="text-primary text-base text-[0.8rem] md:text-base">Use Live Location</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
