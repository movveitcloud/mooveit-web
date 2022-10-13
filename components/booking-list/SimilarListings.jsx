import React from "react";
import ListingCard from "../shared/ListingCard";

const SimilarListings = () => {
  return (
    <section className=" mt-8 md:py-16 bg-[#f9f9f9]">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto">
        <h2 className="text-center text-[#222222] text-2xl font-semibold">Similar Listings</h2>
        <div className="mt-12 md:mt-24 grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>
    </section>
  );
};

export default SimilarListings;