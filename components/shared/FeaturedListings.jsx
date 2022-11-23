import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedListings } from "../../redux/features/listings.slice";
import ListingCard from "./ListingCard";
import ListingSkelenton from "./ListingSkelenton";

const FeaturedListings = () => {
  const { featuredListings, featuredLoading } = useSelector((state) => state.listing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedListings());
  }, []);

  return (
    featuredListings.length > 0 && (
      <section className=" mt-8 md:py-16 bg-[#f9f9f9]">
        <div className="max-w-[90%] lg:max-w-[85%] mx-auto">
          <h2 className="text-center text-[#222222] text-2xl font-semibold">Featured Listings</h2>
          <div className="mt-12 md:mt-24 grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
            {featuredLoading ? (
              <>
                <ListingSkelenton />
                <ListingSkelenton />
                <ListingSkelenton />
              </>
            ) : (
              featuredListings?.slice(0, 3).map((item, i) => <ListingCard key={i} item={item} />)
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default FeaturedListings;
