import React from "react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import FindStorageCard from "./FindStorageCard";
import { ListingCardHome } from "../../components";
import { getSearchListings } from "../../redux/features/listings.slice";
import { useDispatch, useSelector } from "react-redux";
import ListingSkelenton from "../shared/ListingSkelenton";

const FindStorage = () => {
  const [count, setCount] = useState(4);
  const { searchListings, searchLoading, listings } = useSelector((state) => state.listing);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (query) {
    dispatch(getSearchListings({ payload: { area: "" } }));
    // }
  }, []);
  console.log(searchListings.length);
  return (
    searchListings.length > 0 && (
      <section className="w-full bg-[#f9f9f9]">
        <div className="mx-auto max-w-[90%] pt-[4rem] md:pt-[6rem] lg:max-w-[85%] ">
          <h2 className="mb-[4rem] text-center text-2xl  font-semibold text-[#222222] ">Find Storage Near You</h2>

          <div className="mb-[4rem] grid  place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {searchLoading ? (
              <>
                <ListingSkelenton />
                <ListingSkelenton />
                <ListingSkelenton />
                <ListingSkelenton />
              </>
            ) : (
              [...searchListings]
                ?.reverse()
                .slice(0, count)
                ?.map((item, i) => <ListingCardHome item={item} key={i} />)
            )}
            {/* {[...searchListings]
              ?.reverse()
              .slice(0, count)
              ?.map((item, i) => (
                <ListingCardHome item={item} key={i} />
              ))} */}
          </div>
          <div className="flex justify-center align-middle">
            <Link href="/search">
              <a className="btn btn-accent w-[175px] text-xs font-light">Show More</a>
            </Link>
          </div>
          {/* <div className="flex  flex-wrap justify-center md:justify-between">
          <FindStorageCard />
          <FindStorageCard />
          <FindStorageCard />
          <FindStorageCard />
          <FindStorageCard />
          <FindStorageCard />
        </div> */}
        </div>
      </section>
    )
  );
};

export default FindStorage;
