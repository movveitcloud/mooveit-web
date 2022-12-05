import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ListingCard, PageLayout, SearchBar } from "../../components";
import { getSearchListings } from "../../redux/features/listings.slice";
import { useDispatch, useSelector } from "react-redux";
import ListingSkelenton from "../../components/shared/ListingSkelenton";

const Search = () => {
  const { searchListings, searchLoading } = useSelector((state) => state.listing);
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
              className="max-w-[90%] lg:max-w-[85%] mx-auto my-16">
              {searchLoading ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
                  <ListingSkelenton />
                  <ListingSkelenton />
                  <ListingSkelenton />
                </div>
              ) : searchListings.length === 0 ? (
                <div className="flex justify-center">
                  <div className="bg-white rounded-lg w-full md:w-[60%] flex justify-center mt-8">
                    <div className="px-4 py-24 flex flex-col space-y-4 items-center">
                      <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
                      <p className="text-center text-[#AAAAAA]">Oops we couldn't find any listing</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
                  {[...searchListings]
                    ?.reverse()
                    .slice(0, count)
                    ?.map((item, i) => (
                      <ListingCard item={item} key={i} />
                    ))}
                </div>
              )}
            </motion.div>

            {searchListings?.length > 5 && count < searchListings?.length && (
              <div className="flex justify-center my-16" onClick={handleShowMore}>
                <button className="btn btn-outline btn-primary px-12 font-normal text-sm">Show More</button>
              </div>
            )}
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Search;
