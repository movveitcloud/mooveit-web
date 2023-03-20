import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { LocationMarkerIcon, MapIcon, SearchIcon } from "@heroicons/react/outline";
import { errorPopUp } from "../../helpers/toastify";
import PlacesAutocomplete from "react-places-autocomplete";
import Image from "next/image";

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
    <main className="mb-[10%] bg-[#f9f9f9]">
      <div className="relative mx-auto flex h-[600px] max-w-[90%] justify-center rounded-2xl bg-primary  lg:max-w-[85%]">
        <Image
          src="/hero-bg.png"
          alt="movveit"
          // placeholder="blur"
          // blurDataURL="/fallback.png"
          className="z-0 rounded-2xl"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="z-10 my-24 mx-auto max-w-[80%] space-y-3 text-center sm:space-y-5 md:max-w-2xl">
          <h1 className="text-2xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Find Storage Around <span className="block sm:mt-3">You Easily</span>
          </h1>
          <p className="mx-auto text-sm text-white sm:max-w-[85%] md:text-base">
            Get access to a pool of prospective customers when you list your storage with us.
          </p>
          <Link href="/signup">
            <a className="btn btn-primary w-[150px] text-sm font-normal">Get Started</a>
          </Link>
        </div>

        <div className="absolute -bottom-[19%] mx-auto w-[80%] rounded-2xl  bg-white  p-8 sm:-bottom-[25%] sm:w-[90%]">
          <h2 className="mb-4 text-base text-[#222222]">Find a Storage Unit Near You</h2>
          <div className="space-y-5 text-center text-sm text-[#222222]">
            <div className="flex flex-col rounded-2xl bg-[#DDDDDD66] p-6 md:flex-row md:gap-4">
              <div className="mb-2 flex flex-grow flex-row  items-center md:mb-0 md:gap-4">
                <MapIcon className="mr-1 w-5 text-primary md:w-6" />
                {/* <input
                  type="text"
                  value={searchTerm}
                  onChange={handleChange}
                  placeholder="Enter postcode or location"
                  
                  className="w-full bg-transparent h-full pr-6 outline-none text-base placeholder:text-[#959595] placeholder:text-[8px] md:placeholder:text-base"
                /> */}
                <div className="h-full w-full text-left text-base">
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
                        <div className="p- absolute left-0 right-0 top-10 z-50">
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
                className="btn btn-primary flex w-full flex-row flex-nowrap text-[0.6rem] font-normal  md:w-[220px]  md:gap-2 md:text-[0.9rem]"
                onClick={handleSearch}>
                <SearchIcon className="mr-1 w-4 md:w-5" />
                <span className="leading-5">Search Listings</span>
              </button>
            </div>

            {/* <p className="text-base text-[#959595]">OR</p> */}

            {/* <button className="flex w-full flex-row justify-center rounded-2xl  bg-accent p-6 transition-transform active:scale-[95%] ">
              <div className="flex flex-row  items-center md:gap-4">
                <LocationMarkerIcon className="mr-1 w-5 text-primary md:w-6" />
                <p className="text-base text-[0.8rem] text-primary md:text-base">Use Live Location</p>
              </div>
            </button> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
