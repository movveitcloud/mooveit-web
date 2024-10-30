import { useState, useEffect, useContext } from "react";
import { MapIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import GoogleMapReact from "google-map-react";
import { ListingInputContext } from "../../context";
import Accordion from "../shared/Accordion";
import GoogleMapProvider from "../providers/GoogleMapProvider";

const Marker = () => <LocationMarkerIcon className="w-8 text-red-500" />;

const Address = ({ incomplete, open }) => {
  const { formDetails, setFormDetails } = useContext(ListingInputContext);
  const [inputValue, setInputValue] = useState("");

  const handleSelect = (address, placeId, suggestion) => {
    const formattedAddress = {
      street: suggestion?.formattedSuggestion?.mainText,
      area: suggestion?.formattedSuggestion?.secondaryText,
    };
    setFormDetails({ ...formDetails, address, formattedAddress }); //you have to select from google options to set address and enforce coordinates
    setInputValue(address);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setFormDetails({ ...formDetails, coordinates: latLng, address, formattedAddress }))

      .catch((error) => console.error("Error", error));
  };
  const handleChange = (value, suggestion) => {
    //console.log(formDetails);
    setInputValue(value);
    setFormDetails({ ...formDetails, address: value });
  };

  const defaultProps = { center: { lat: 10.99835602, lng: 77.01502627 }, zoom: 15 };

  useEffect(() => {
    setInputValue(formDetails.address);
    console.log(formDetails);
  }, [formDetails]);

  return (
    <Accordion title="address" incomplete={incomplete} open={open}>
      <div className="flex flex-grow flex-row items-center gap-4 rounded-lg border border-[#959595] px-4 py-3">
        <MapIcon className="w-6 text-[#959595]" />
        <div className="h-full w-full text-left text-base">
          <GoogleMapProvider>
            <PlacesAutocomplete
              value={inputValue}
              onChange={handleChange}
              // onChange={(value) => setInputValue(value)}
              onSelect={handleSelect}
              debounce={400}
              searchOptions={{ types: ["locality", "country"] }}
              shouldFetchSuggestions={formDetails.address.length > 3}>
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
                      const className = suggestion.active ? "suggestion-item--active py-2" : "suggestion-item py-2";
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
          </GoogleMapProvider>
        </div>
        {/* <div className="w-full">
          <PlacesAutocomplete
            value={inputValue}
            onChange={(value) => setInputValue(value)}
            onSelect={handleSelect}
            debounce={400}
            shouldFetchSuggestions={formDetails.address.length > 3}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className="relative">
                <input
                  {...getInputProps({
                    placeholder: "Enter postcode or location",
                    className: "w-full border-none outline-none",
                  })}
                />
                <div className="absolute left-0 right-0 top-10 z-50 bg-white p-3">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active ? "suggestion-item--active py-2" : "suggestion-item py-2";
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
        </div> */}
      </div>

      {/* map */}
      <div className="mt-8 h-[250px] w-full overflow-hidden rounded-md">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.PLACES_KEY }}
          defaultCenter={defaultProps.center}
          center={formDetails?.coordinates}
          defaultZoom={defaultProps.zoom}>
          {formDetails?.coordinates?.lat && (
            <Marker lat={formDetails?.coordinates?.lat} lng={formDetails?.coordinates?.lng} />
          )}
        </GoogleMapReact>
      </div>
    </Accordion>
  );
};

export default Address;
