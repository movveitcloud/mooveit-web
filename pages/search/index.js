import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { getSearchListings } from "../../redux/features/listings.slice";
import { useDispatch, useSelector } from "react-redux";
import { ListingInputContext } from "../../context";
import { ListingCard, PageLayout, SearchBar } from "../../components";
import ListingSkelenton from "../../components/shared/ListingSkelenton";
import { LocationMarkerIcon, MapIcon, OfficeBuildingIcon } from "@heroicons/react/outline";
import GoogleMapReact from "google-map-react";
//import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
//import { getBooking } from "../../redux/features/bookings.slice";
//import Google from "../../components/book-listing/Location/Google";
import { clearFilteredListings, filterListings } from "../../redux/features/listings.slice";
import { Tooltip } from "react-tooltip";
import Link from "next/link";

const Search = () => {
  const { geolocation, serviceProvided, setServiceProvided } = useContext(ListingInputContext);
  const { searchListings, searchLoading, listings, filteredListings } = useSelector((state) => state.listing);
  const { bookings } = useSelector((state) => state.bookings);
  const [showMap, setShowMap] = useState(false);
  const [delivery, setDelivery] = useState(filteredListings);
  const [packing, setPacking] = useState(false);
  const [count, setCount] = useState(9);
  const [viewArr, setViewArr] = useState([]);
  //const [formDetails, setFormDetails] = useState(initialState);

  //const [viewDelivery, setViewDelivery] = useState([]);
  //const [viewPacking, setViewPacking] = useState([]);
  //const [view, setView] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const query = router.query.s;
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const handleShowMore = () => {
    setCount(count + 9);
  };
  let view = searchListings;
  // console.log(searchListings);
  // console.log(filteredListings);
  useEffect(() => {
    //if (query) {
    dispatch(getSearchListings({ payload: { area: query ? query.toLowerCase() : "" } }));
    // }
  }, [query]);
  console.log(searchListings);

  useEffect(() => {
    setViewArr(searchListings);
    view = searchListings;
  }, [searchListings]);

  //console.log(filteredListings);
  let viewService = [];
  let viewDelivery = [];
  let viewPacking = [];

  viewArr?.map(
    (item) =>
      item?.services?.length == 1 &&
      item?.services?.map((val) => (val == "delivery" ? viewDelivery.push(item) : viewPacking.push(item)))
  );

  viewArr?.map(
    (item) =>
      item?.services?.length > 1 &&
      item?.services?.map((val) => val == "delivery" && "packing" && viewService.push(item))
  );

  //console.log(viewArr);
  //console.log(viewDelivery);
  //console.log(viewService);
  if (serviceProvided.delivery == false && serviceProvided.packing == false) {
    view = viewArr;
  }

  if (serviceProvided.delivery == true) {
    view = viewDelivery;
  }
  if (serviceProvided.packing == true) {
    view = viewPacking;
  }
  if (serviceProvided.packing == true && serviceProvided.delivery == true) {
    view = viewService;
  } else {
    dispatch(clearFilteredListings(searchListings));
  }
  useEffect(() => {
    dispatch(filterListings(view));
  }, [serviceProvided.packing, serviceProvided.delivery]);

  // useEffect(() => {
  //   dispatch(getBooking());
  // }, []);
  // const chosenBookings = bookings?.map(({ storageListing }) => storageListing?._id);
  //console.log(searchListings);

  //console.log(geolocation, "geo");
  // const Marker = () => <LocationMarkerIcon className="w-8 text-red-500" />;

  console.log(view, "viewww");

  //if (checked) {
  //   //   //alert("hi");
  //   //   //dispatch(filterListings(delivery));
  //   //   serviceProvided.delivery && serviceProvided.packing == true
  //   //     ? dispatch(filterListings(bothServices))
  //   //     : serviceProvided.packing == true
  //   //     ? dispatch(filterListings(packing))
  //   //     : dispatch(filterListings(delivery));
  //   //   // } else {
  //   //   //   dispatch(clearFilteredListings(searchListings));
  //   // }

  const handleApiLoaded = (map, maps) => {
    const bounds = new maps.LatLngBounds();
    view.forEach(({ coordinates }) => {
      bounds.extend(new maps.LatLng(+coordinates?.lat, +coordinates?.lng));
    });
    map.fitBounds(bounds);
  };

  const Marker = () => (
    <div className="flex flex-col items-center transition-all duration-300 hover:scale-110">
      <img src="/movveit-map.png" className="w-12" />
    </div>
  );

  const defaultCenter = { lat: 54.8, lng: -4.6 };

  return (
    <PageLayout>
      <div>
        <SearchBar showMap={showMap} setShowMap={setShowMap} />
        {/* {showMap && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-16">
            <img src="mapview.png" alt="map view" className="w-full " />
          </motion.div>
        )} */}
        {showMap && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-16">
            <div className="mt-8 h-[600px] w-full">
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.PLACES_KEY }}
                defaultCenter={defaultCenter}
                defaultZoom={6}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
                {view.map((listing, index) => (
                  <div
                    id={`listing-${listing._id}`}
                    key={index}
                    lat={+listing?.coordinates?.lat}
                    lng={+listing?.coordinates?.lng}>
                    <Marker />

                    <Tooltip
                      anchorSelect={`#listing-${listing._id}`}
                      offset={12}
                      clickable
                      style={{ backgroundColor: "white" }}>
                      <div className="w-[300px] p-2 text-primary">
                        <p className="text-xl font-bold">{listing?.storageTitle}</p>
                        <p className="mb-2 text-base capitalize">{listing?.address}</p>
                        <img src={listing?.media[0]} className="h-[150px] w-full object-cover" />
                        <p className="my-2 text-sm capitalize">{listing?.description}</p>
                        <p className="my-1 text-sm capitalize">
                          <strong> Storage Type:</strong> {listing?.storageType}
                        </p>
                        <p className="my-1 text-sm capitalize">
                          <strong>Storage Size: </strong>
                          {listing?.storageSize?.name}
                        </p>
                        <Link href={`/book/${listing?._id}`}>
                          <div className="text-sm text-blue-700 underline">View Listing</div>
                        </Link>
                      </div>
                    </Tooltip>
                  </div>
                ))}
              </GoogleMapReact>
            </div>
          </motion.div>
        )}
        {!showMap && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mx-auto my-16 max-w-[90%] lg:max-w-[85%]">
              {
                searchLoading ? (
                  <div className="grid place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
                    <ListingSkelenton />
                    <ListingSkelenton />
                    <ListingSkelenton />
                  </div>
                ) : (
                  <>
                    {view && view.length > 0 && (
                      <div className="grid place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
                        {[...view]
                          ?.reverse()
                          .slice(0, count)
                          ?.map((item, i) => (
                            <ListingCard item={item} key={i} />
                          ))}
                      </div>
                    )}

                    {view?.length === 0 && (
                      <div className="flex justify-center">
                        <div className="mt-8 flex w-full justify-center rounded-lg bg-white md:w-[60%]">
                          <div className="flex flex-col items-center space-y-4 px-4 py-24">
                            <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
                            <p className="text-center text-[#AAAAAA]">Oops we couldn't find any listing</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )

                // view.length === 0 ? (
                //   <div className="flex justify-center">
                //     <div className="mt-8 flex w-full justify-center rounded-lg bg-white md:w-[60%]">
                //       <div className="flex flex-col items-center space-y-4 px-4 py-24">
                //         <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
                //         <p className="text-center text-[#AAAAAA]">Oops we couldn't find any listing</p>
                //       </div>
                //     </div>
                //   </div>
                // ) : (
                //   <div className="grid place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
                //     {[...view]

                //       ?.reverse()
                //       .slice(0, count)
                //       ?.map((item, i) => (
                //         <ListingCard item={item} key={i} />
                //       ))}

                //   </div>
                // <div className="grid place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
                //   {[...searchListings]
                //     ?.reverse()
                //     .slice(0, count)
                //     ?.filter((items) => !chosenBookings.includes(items._id))
                //     .map((item, i) => (
                //       <ListingCard item={item} key={i} />
                //     ))}
                // </div>
                // )}
              }
            </motion.div>

            {searchLoading
              ? ""
              : // : searchListings?.length > 5 &&
                view?.length > 5 &&
                count < searchListings?.length && (
                  <div className="my-16 flex justify-center" onClick={handleShowMore}>
                    <button className="btn btn-outline btn-primary px-12 text-sm font-normal">Show More</button>
                  </div>
                )}
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Search;
