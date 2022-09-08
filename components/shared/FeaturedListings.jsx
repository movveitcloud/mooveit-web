import React from "react";
import ListingCard from "./ListingCard";

const FeaturedListings = () => {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto">
        <h2 className="text-center text-[#222222] text-2xl font-semibold">Featured Listings</h2>
        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
