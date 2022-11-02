import React from "react";
import ListingCard from "../shared/ListingCard";

const SimilarListings = () => {
  return (
    <section className="py-5 md:py-8 bg-[#f9f9f9]">
      <h2 className="text-center text-[#222222] text-2xl font-bold">Similar Listings</h2>
      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </section>
  );
};

export default SimilarListings;
