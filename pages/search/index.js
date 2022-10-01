import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ListingCard, PageLayout, SearchBar } from "../../components";

const Search = () => {
  const [showMap, setShowMap] = useState(true);
  const router = useRouter();
  const query = router.query.s;
  // console.log(router);
  return (
    <PageLayout>
      <div>
        <SearchBar showMap={showMap} setShowMap={setShowMap} />
        {showMap && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-16">
            <img src="dummyMap.png" alt="map view" className="w-full " />
          </motion.div>
        )}
        {!showMap && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-[90%] lg:max-w-[85%] mx-auto my-16 grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
            </motion.div>
            <div className="flex justify-center my-16">
              <button className="btn btn-outline btn-primary px-12 font-normal text-sm">Show More</button>
            </div>
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Search;
