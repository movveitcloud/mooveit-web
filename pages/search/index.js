import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { getSearchListings } from "../../redux/features/listings.slice";
import { useDispatch, useSelector } from "react-redux";
import { ListingInputContext } from "../../context";
import { ListingCard, PageLayout, SearchBar } from "../../components";
import ListingSkelenton from "../../components/shared/ListingSkelenton";
import { LocationMarkerIcon, MapIcon } from "@heroicons/react/outline";
import GoogleMapReact from "google-map-react";
//import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
//import { getBooking } from "../../redux/features/bookings.slice";
//import Google from "../../components/book-listing/Location/Google";
import { clearFilteredListings, filterListings } from "../../redux/features/listings.slice";

const Search = () => {
  const { geolocation } = useContext(ListingInputContext);
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
  const { serviceProvided, setServiceProvided } = useContext(ListingInputContext);
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
    //dispatch(filterListings([]));
    console.log(viewDelivery);
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
    console.log(filteredListings);
  }, [serviceProvided.packing, serviceProvided.delivery]);

  // useEffect(() => {
  //   dispatch(getBooking());
  // }, []);
  // const chosenBookings = bookings?.map(({ storageListing }) => storageListing?._id);
  //console.log(searchListings);

  //console.log(geolocation, "geo");
  const Marker = () => <LocationMarkerIcon className="w-8 text-red-500" />;
  console.log(serviceProvided);
  console.log(filteredListings);

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
            <div className="mt-8 h-[500px] w-full overflow-hidden rounded-md">
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.PLACES_KEY }}
                defaultCenter={{
                  lat: +filteredListings[0]?.coordinates.lat,
                  lng: +filteredListings[0]?.coordinates.lng,
                }}
                defaultZoom={1}>
                {view?.map(({ coordinates, _id }) => {
                  console.log(coordinates);
                  return (
                    <Marker key={_id} lat={+coordinates?.lat} lng={+coordinates?.lng} />
                    // </div>
                  );
                })}
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
                ) : view.length === 0 ? (
                  <div className="flex justify-center">
                    <div className="mt-8 flex w-full justify-center rounded-lg bg-white md:w-[60%]">
                      <div className="flex flex-col items-center space-y-4 px-4 py-24">
                        <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
                        <p className="text-center text-[#AAAAAA]">Oops we couldn't find any listing</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {[...view]

                      ?.reverse()
                      .slice(0, count)
                      ?.map((item, i) => (
                        <ListingCard item={item} key={i} />
                      ))}
                  </div>
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
