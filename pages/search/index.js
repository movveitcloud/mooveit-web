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
import { getBooking } from "../../redux/features/bookings.slice";

const Search = () => {
  const { geolocation } = useContext(ListingInputContext);
  const { searchListings, searchLoading, listings } = useSelector((state) => state.listing);
  const { bookings } = useSelector((state) => state.bookings);
  const [showMap, setShowMap] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [packing, setPacking] = useState(false);
  const [count, setCount] = useState(9);
  const [viewArr, setViewArr] = useState([]);
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

  useEffect(() => {
    //if (query) {
    dispatch(getSearchListings({ payload: { area: query ? query.toLowerCase() : "" } }));
    // searchListings.map(
    //   (item) => item?.services?.length == 2 && item?.services?.map((val) => val == "packing" && setViewArr([item]))
    // );

    //console.log(searchListings);
    // console.log(viewArr);
    //}
  }, [query]);
  useEffect(() => {
    setViewArr(searchListings);
  }, [searchListings]);

  let viewService = [];
  let viewDelivery = [];
  let viewPacking = [];
  let view = searchListings;
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

  console.log(viewArr);
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
  if (serviceProvided.packing == true && serviceProvided.delivery) {
    view = viewService;
  }

  // useEffect(() => {
  //   dispatch(getBooking());
  // }, []);
  // const chosenBookings = bookings?.map(({ storageListing }) => storageListing?._id);
  //console.log(searchListings);

  //console.log(geolocation, "geo");
  const Marker = () => <LocationMarkerIcon className="w-8 text-red-500" />;
  const defaultProps = {
    center: {
      lat: 50.9105468,
      lng: -1.4049018,
    },
    zoom: 15,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };
  const markers = [
    { lat: 59.955413, lng: 30.337844 },
    {
      lat: 51.43186499999999,
      lng: -1.0104255,
    },
    { lat: 49.955413, lng: 20.337844 },
    // { lat: 39.955413, lng: 10.337844 },
  ];
  {
    markers.map((val) => {
      //console.log(typeof val.lat);
      return <Marker lat={+val.lat} lng={+val.lng} />;
    });
  }
  const ModelsMap = (map, maps) => {
    //instantiate array that will hold your Json Data
    let dataArray = [
      { lat: 59.955413, lng: 30.337844, id: 1 },
      {
        lat: 51.43186499999999,
        lng: -1.0104255,
        id: 2,
      },
      { lat: 49.955413, lng: 20.337844, id: 3 },
      // { lat: 39.955413, lng: 10.337844 },
    ];
    //push your Json Data in the array
    // {
    //   data.map((markerJson) => dataArray.push(markerJson));
    // }

    //Loop through the dataArray to create a marker per data using the coordinates in the json
    for (let i = 0; i < dataArray.length; i++) {
      let marker = new maps.Marker({
        position: { lat: dataArray[i].lat, lng: dataArray[i].lng },
        map,
        label: dataArray[i].id,
      });
    }
  };

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
          // <GoogleMap>

          // </GoogleMap>
          // <div className="mt-8 h-[500px] w-full overflow-hidden  rounded-md">
          //   <GoogleMapReact
          //     bootstrapURLKeys={{ key: process.env.PLACES_KEY }}
          //     defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
          //     defaultZoom={10}
          //     yesIWantToUseGoogleMapApiInternals
          //     onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}></GoogleMapReact>
          // </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-16">
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.PLACES_KEY }}
                //defaultCenter={{ lat: 59.955413, lng: 30.337844 }}
                //defaultCenter={[59.955413, 30.337844]}
                defaultCenter={markers.map((val) => {
                  //return { lat: 59.955413, lng: 30.337844 };
                  return { lat: +val.lat, lng: +val.lng };
                })}
                defaultZoom={defaultProps.zoom}>
                {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
                {markers.map((val) => {
                  //return <Marker lat={59.955413} lng={30.337844} />;
                  return <Marker lat={+val.lat} lng={+val.lng} />;

                  //return <Marker {...defaultProps.greatPlaceCoords} />;
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
              {searchLoading ? (
                <div className="grid place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
                  <ListingSkelenton />
                  <ListingSkelenton />
                  <ListingSkelenton />
                </div>
              ) : // ) : searchListings.length === 0 ? (
              view.length === 0 ? (
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
                  {/* {[...searchListings] */}
                  {[...view]
                    ?.reverse()
                    .slice(0, count)
                    ?.map((item, i) => (
                      <ListingCard item={item} key={i} />
                    ))}
                </div>
                // <div className="grid place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
                //   {[...searchListings]
                //     ?.reverse()
                //     .slice(0, count)
                //     ?.filter((items) => !chosenBookings.includes(items._id))
                //     .map((item, i) => (
                //       <ListingCard item={item} key={i} />
                //     ))}
                // </div>
              )}
            </motion.div>

            {searchLoading
              ? ""
              : searchListings?.length > 5 &&
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
