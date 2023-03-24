import { useContext, useEffect, useRef, useState } from "react";
import { CalendarIcon, LocationMarkerIcon, TruckIcon } from "@heroicons/react/outline";
import BookContainer from "../book-listing/BookContainer";
import { useRouter } from "next/router";
import { differenceInHours, differenceInMonths, format } from "date-fns";
import Switch from "../shared/Switch";
import { useDispatch, useSelector } from "react-redux";
import { bookListing } from "../../redux/features/booking.slice";
import { getSingleListing } from "../../redux/features/listings.slice";
import { authenticatedUser } from "../../redux/features/auth.slice";
import GoogleMapReact from "google-map-react";
import { getDistance } from "geolib";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { ListingInputContext } from "../../context";
import Accordion from "../shared/Accordion";
import { MapIcon } from "@heroicons/react/outline";

const YourBooking = ({ bookingInfo, setBookingInfo, handleServiceChange, userListing }) => {
  const Marker = () => <LocationMarkerIcon className="w-8 text-red-500" />;

  const { bookListingLoading } = useSelector((state) => state.booking);
  const dis = !bookingInfo.pickupAddress || !bookingInfo.pickupDistance || !bookingInfo.consent;
  const defaultProps = { center: { lat: 10.99835602, lng: 77.01502627 }, zoom: 15 };
  const disabled = bookingInfo?.moving
    ? !bookingInfo.pickupAddress || !bookingInfo.pickupDistance || !bookingInfo.consent
    : !bookingInfo.consent;
  const dispatch = useDispatch();

  const user = authenticatedUser();
  const storageLocation = userListing.coordinates;

  const router = useRouter();
  const query = router.query.listingId;

  const today = new Date();
  const min = format(new Date(), "yyyy-MM-dd hh:mm");

  const initialState = {
    type: "hourly",
    startDate: "",
    endDate: "",
    pickupAddress: "",
    moving: false,
    packing: false,
    consent: false,
  };

  const [bookingDetails, setBookingDetails] = useState(initialState);
  const [pageReady, setPageReady] = useState(false);
  const { type, startDate, endDate } = bookingDetails;
  const bookingStartDate = useRef();
  const bookingEndDate = useRef();
  const [searchLocation, setSearchLocation] = useState("");
  const [searchGeoLocation, setSearchGeoLocation] = useState("");

  const totalHours = differenceInHours(new Date(endDate), new Date(startDate));
  const totalMonths = differenceInMonths(new Date(endDate), new Date(startDate)) + 1;
  const isHourly = type == "hourly" ? true : false;
  const time = isHourly ? totalHours : totalMonths;

  // console.log(
  //   getDistance(
  //     { latitude: 6.434056139929536, longitude: 3.4148140177920734 },
  //     { latitude: 6.577647463588065, longitude: 3.342676759213575 }
  //   ) / 1000,
  //   "km"
  // );

  //console.log(geolocation, "geo");
  //console.log(bookingInfo);
  //console.log(userListing);
  //console.log(searchGeoLocation.lat);
  useEffect(() => {
    if (searchGeoLocation) {
      //console.log(getDistance(storageLocation, searchGeoLocation) / 1000, "km");
      setBookingInfo({ ...bookingInfo, pickupDistance: getDistance(storageLocation, searchGeoLocation) / 1000 });
    } else {
      setBookingInfo({ ...bookingInfo, pickupDistance: "" });
    }
  }, [searchGeoLocation]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setBookingDetails({ ...bookingDetails, [name]: val });
  };
  const handleLocation = (address) => {
    setSearchLocation(address);
    if (!address) {
      setBookingInfo({ ...bookingInfo, pickupAddress: "" });
    }
    if (address != bookingInfo.pickupAddress) {
      setBookingInfo({ ...bookingInfo, pickupAddress: "" });
    }
    //console.log(bookingInfo)
    //setBookingDetails({ ...bookingDetails, pickupAddress: address });
    //     console.log(address);
    //     console.log(searchLocation)
    //     if(address)
    //    { geocodeByAddress(address)
    //     .then((results) => getLatLng(results[0]))
    //     .then((latLng) => setSearchGeoLocation( latLng))

    //     .catch((error) => {console.error("This is Error", error),setSearchGeoLocation("")})
    //     console.log(searchGeoLocation)
    //  //console.log(searchGeoLocation);
    // }
  };
  
  const handleSuccess = () => {
    router.push(`${user.role == "customer" ? "/your-storage" : "/listings"}`);
  };

  const handleBooking = () => {
    const payload = {
      storageListing: bookingInfo.listingId,
      startDate,
      endDate,
      price: bookingInfo.total,
      pickupAddress: bookingDetails.pickupAddress,
      // moving: bookingDetails.moving,
      // packing: bookingDetails.packing,
      moving: bookingInfo.moving,
      packing: bookingInfo.packing,
      type,
    };
   
    dispatch(bookListing({ payload, handleSuccess }));
  };
  

  const handleSelect = (address) => {
    setSearchLocation(address);
    setBookingDetails({ ...bookingDetails, pickupAddress: address });
    
    if (address) {
      geocodeByAddress(address)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => setSearchGeoLocation(latLng))
        // .then((latLng) => setBookingInfo({ ...bookingInfo,pickupDistance:getDistance(
        //   storageLocation,
        //   searchGeoLocation
        //     ) / 1000}))
        .then((latLng) => setBookingInfo({ ...bookingInfo, pickupAddress: address }))
        .catch((error) => {
          console.error("This is Error", error), setSearchGeoLocation("");
        });
      //console.log(searchGeoLocation)
    } else {
      setBookingInfo({ ...bookingInfo, pickupAddress: "" });
    }
  };

  const { singleListing } = useSelector((state) => state.listing);
 
  useEffect(() => {
    setBookingDetails({ ...bookingDetails, ...JSON.parse(sessionStorage.getItem("booking")) });
    setPageReady(true);
  }, []);

  useEffect(() => {
    setBookingInfo({ ...bookingInfo, time, pickupAddress: bookingDetails.pickupAddress });
  }, [bookingDetails]);
  //console.log(storageLocation)

  return (
    pageReady && (
      <BookContainer>
        <div className="space-y-5 md:space-y-8">
          <h2 className="font-semibold capitalize">Your Booking</h2>

          <div>
            <p className="mb-3">Date & Time</p>
            <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-4 md:space-y-0">
              <div
                className="relative flex w-full cursor-pointer space-x-2 rounded-lg border-[0.5px] border-[#222222] p-2"
                onClick={() => bookingStartDate.current.showPicker()}>
                <CalendarIcon className="w-3 text-primary md:w-4" />
                <p className="text-xs text-[#959595] md:text-sm">
                  {startDate && format(new Date(startDate), isHourly ? "yyyy-MM-dd (h:mmaaa)" : "MMMM, yyyy")}
                </p>
                <div className="left-500 w-ful invisible absolute cursor-pointer rounded-lg border border-[#222222] px-4 py-3">
                  <input
                    ref={bookingStartDate}
                    type={isHourly ? "datetime-local" : "month"}
                    name="startDate"
                    min={min}
                    value={bookingDetails.startDate}
                    onChange={handleChange}
                    className="h-full w-full cursor-pointer bg-transparent outline-none placeholder:text-[#959595]"
                  />
                </div>
              </div>
              <p className="text-center">-</p>
              <div
                className="relative flex w-full cursor-pointer space-x-2 rounded-lg border-[0.5px] border-[#222222] p-2"
                onClick={() => bookingEndDate.current.showPicker()}>
                <CalendarIcon className="w-3 text-primary md:w-4" />
                <p className="text-xs text-[#959595] md:text-sm">
                  {" "}
                  {endDate && format(new Date(endDate), isHourly ? "yyyy-MM-dd (h:mmaaa)" : "MMMM, yyyy")}
                </p>
                <div className="left-500 w-ful invisible absolute cursor-pointer rounded-lg border border-[#222222] px-4 py-3">
                  <input
                    ref={bookingEndDate}
                    type={isHourly ? "datetime-local" : "month"}
                    name="endDate"
                    min={min}
                    value={bookingDetails.endDate}
                    onChange={handleChange}
                    className="h-full w-full cursor-pointer bg-transparent outline-none placeholder:text-[#959595]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center gap-2 text-[#107E7E]">
              <span className="rounded-full bg-accent p-2">
                <TruckIcon className="w-6 text-primary" />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-[#12181F]">Moving</h2>
                <p className="text-[12px] text-[#959595]">
                  Moving This listing offers moving services for an additional cost
                </p>
              </div>
            </div>

            <Switch name="moving" handleChange={handleServiceChange} formDetails={bookingInfo} />
          </div>

          {bookingInfo?.moving && (
            <>
              <div className="flex flex-row items-center gap-4">
                <div className="flex min-w-fit items-center gap-2">
                  <span className="rounded-full bg-accent p-2">
                    <LocationMarkerIcon className="w-6 text-primary" />
                  </span>
                  <h2 className="text-sm font-semibold text-[#12181F]">Pickup Address</h2>
                </div>
                {/* <input
                type="text"
                name="pickupAddress"
                value={bookingDetails.pickupAddress}
                onChange={handleChange}
                className="w-full rounded border border-[#959595] p-2 focus:border-primary"
                placeholder="Enter pickup address"
              /> */}

                <div className="flex flex-grow flex-row items-center gap-4 rounded-lg border border-[#959595] px-4 py-2">
                  <MapIcon className="w-6 text-[#959595]" />
                  <div className=" w-full outline-none">
                    <PlacesAutocomplete
                      value={searchLocation}
                      name="pickupAddress"
                      onChange={handleLocation}
                      onSelect={handleSelect}
                      debounce={400}
                      searchOptions={{ types: ["locality", "country"] }}
                      shouldFetchSuggestions={searchLocation.length > 3}>
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className="relative h-full">
                          <input
                            {...getInputProps({
                              placeholder: "Pickup Address",
                              className: "w-full outline-none border-none border-[#959595] focus:border-primary",
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
              </div>
              <div className="mt-8 h-[250px] w-full overflow-hidden rounded-md">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: process.env.PLACES_KEY }}
                  center={searchGeoLocation ? searchGeoLocation : 0}
                  defaultZoom={defaultProps.zoom}>
                  {searchGeoLocation?.lat && <Marker lat={searchGeoLocation?.lat} lng={searchGeoLocation?.lng} />}
                </GoogleMapReact>
              </div>
            </>
          )}
          {bookingInfo?.packing && (
            <>
              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-2 text-[#107E7E]">
                  <span className="rounded-full bg-accent p-2">
                    <TruckIcon className="w-6 text-primary" />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-[#12181F]">Packing</h2>
                    <p className="text-[12px] text-[#959595]">
                      Packing This listing offers packing services for an additional cost
                    </p>
                  </div>
                </div>

                <Switch name="packing" handleChange={handleServiceChange} formDetails={bookingInfo} />
              </div>
            </>
          )}
          <div className="flex items-center gap-5">
            <p className="text-[#959595]">
              I agree with MooveIT's{" "}
              <a href="#" target="_blank" rel="noreferrer" className="font-semibold text-primary">
                terms & conditions
              </a>
            </p>
            <Switch name="consent" handleChange={handleServiceChange} formDetails={bookingInfo} />
          </div>

          <button
            // disabled={!bookingInfo.consent}
            disabled={disabled}
            className={`${
              bookListingLoading ? "loading" : ""
            } btn btn-primary flex w-full gap-2 text-sm normal-case disabled:btn-accent disabled:bg-primary disabled:bg-opacity-50 disabled:text-[#ccc]`}
            onClick={handleBooking}>
            {bookListingLoading ? (
              ""
            ) : (
              <>
                <TruckIcon className="w-4" /> Book Now
              </>
            )}
          </button>
        </div>
      </BookContainer>
    )
  );
};

export default YourBooking;
