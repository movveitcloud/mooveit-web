import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedListings } from "../../redux/features/listings.slice";
import ListingCard from "../shared/ListingCard";
import ListingSkelenton from "../shared/ListingSkelenton";

const SimilarListings = () => {
  const { featuredListings, featuredLoading } = useSelector((state) => state.listing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedListings());
  }, []);

  return (
    <section className="py-5 md:py-8 bg-[#f9f9f9]">
      <h2 className="text-center text-[#222222] text-2xl font-bold">Similar Listings</h2>
      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
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
    </section>
  );
};

export default SimilarListings;
