import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { getSearchListings } from "../../redux/features/listings.slice";
import { useDispatch, useSelector } from "react-redux";
import { ListingInputContext } from "../../context";
import { ListingCard, PageLayout, SearchBar } from "../../components";
import ListingSkelenton from "../../components/shared/ListingSkelenton";
import { getBooking } from "../../redux/features/bookings.slice";

const Search = () => {
  const { geolocation } = useContext(ListingInputContext);
  const { searchListings, searchLoading } = useSelector((state) => state.listing);
  const { bookings } = useSelector((state) => state.bookings);
  const [showMap, setShowMap] = useState(false);
  const [count, setCount] = useState(9);
  const dispatch = useDispatch();
  const router = useRouter();
  const query = router.query.s;

  const handleShowMore = () => {
    setCount(count + 9);
  };

  useEffect(() => {
    // if (query) {
    dispatch(getSearchListings({ payload: { area: query ? query.toLowerCase() : "" } }));
    // }
  }, [query]);
  useEffect(() => {
    dispatch(getBooking());
  }, []);
  const chosenBookings = bookings?.map(({ storageListing }) => storageListing._id);
  console.log(searchListings);

  //console.log(geolocation, "geo");

  return (
    <PageLayout>
      <div>
        <SearchBar showMap={showMap} setShowMap={setShowMap} />
        {showMap && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-16">
            <img src="mapview.png" alt="map view" className="w-full " />
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
              ) : searchListings.length === 0 ? (
                <div className="flex justify-center">
                  <div className="mt-8 flex w-full justify-center rounded-lg bg-white md:w-[60%]">
                    <div className="flex flex-col items-center space-y-4 px-4 py-24">
                      <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
                      <p className="text-center text-[#AAAAAA]">Oops we couldn't find any listing</p>
                    </div>
                  </div>
                </div>
              ) : (
                // <div className="grid place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
                //   {[...searchListings]
                //     ?.reverse()
                //     .slice(0, count)
                //     ?.map((item, i) => (
                //       <ListingCard item={item} key={i} />
                //     ))}
                // </div>
                <div className="grid place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
                  {[...searchListings]
                    ?.reverse()
                    .slice(0, count)
                    ?.filter((items) => !chosenBookings.includes(items._id))
                    .map((item, i) => (
                      <ListingCard item={item} key={i} />
                    ))}
                </div>
              )}
            </motion.div>

            {searchListings?.length > 5 && count < searchListings?.length && (
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
