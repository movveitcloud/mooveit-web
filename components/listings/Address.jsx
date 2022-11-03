import { MapIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import React from "react";
import { useContext } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import GoogleMapReact from "google-map-react";
import { ListingInputContext } from "../../context";
import Accordion from "../shared/Accordion";

const Marker = () => <LocationMarkerIcon className="w-8 text-red-500" />;

const Address = () => {
  const { formDetails, setFormDetails } = useContext(ListingInputContext);

  const handleChange = (address) => {
    setFormDetails({ ...formDetails, address });
  };

  const handleSelect = (address, placeId, suggestion) => {
    const formattedAddress = {
      street: suggestion.formattedSuggestion.mainText,
      area: suggestion.formattedSuggestion.secondaryText,
    };
    setFormDetails({ ...formDetails, address, formattedAddress });

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setFormDetails({ ...formDetails, coordinates: latLng, address, formattedAddress }))
      .catch((error) => console.error("Error", error));
  };

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 15,
  };

  console.log(formDetails);

  return (
    <Accordion title="address">
      <div className="flex flex-row flex-grow gap-4 items-center border border-[#959595] rounded-lg px-4 py-3">
        <MapIcon className="text-[#959595] w-6" />
        <div className="w-full">
          <PlacesAutocomplete
            value={formDetails.address}
            onChange={handleChange}
            onSelect={handleSelect}
            debounce={400}
            shouldFetchSuggestions={formDetails.address.length > 5}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className="relative">
                <input
                  {...getInputProps({
                    placeholder: "Enter postcode or location",
                    className: "w-full border-none outline-none",
                  })}
                />
                <div className="absolute left-0 right-0 top-10 p-3 z-50 bg-white">
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
        </div>
      </div>

      {/* map */}
      <div className="w-full h-[250px] mt-8">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.PLACES_KEY }}
          defaultCenter={defaultProps.center}
          center={formDetails.coordinates}
          defaultZoom={defaultProps.zoom}>
          {formDetails.coordinates.lat && (
            <Marker lat={formDetails.coordinates.lat} lng={formDetails.coordinates.lng} />
          )}
        </GoogleMapReact>
      </div>
    </Accordion>
  );
};

export default Address;
