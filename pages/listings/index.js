import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings } from "../../redux/features/listings.slice";
import Skeleton from "react-loading-skeleton";
import { DashboardLayout, ListingLocationCard } from "../../components";

const Listings = () => {
  const { listings, listingLoading } = useSelector((state) => state.listing);
  const dispatch = useDispatch();
  const [filteredArray, setFilteredArray] = useState([]);
  const [activeItem, setActive] = useState(0);
  const items = ["Published", "Pending", "Draft"];

  const filterItem = () => {
    const result =
      activeItem == 0
        ? listings?.filter((listing) => listing?.status == "approved")
        : activeItem == 1
        ? listings.filter((listing) => listing?.status == "pending" && listing.completed)
        : activeItem == 2
        ? listings.filter(
            (listing) => (listing?.status == "pending" && !listing.completed) || listing?.status == "disapproved"
          )
        : [];
    setFilteredArray(result);
  };

  useEffect(() => {
    filterItem();
  }, [activeItem, listings]);

  useEffect(() => {
    dispatch(getListings());
  }, []);

  return (
    <DashboardLayout>
      <div className="flex gap-5 flex-wrap mb-6">
        {items.map((item, i) => (
          <div
            key={i}
            className={`${
              activeItem === i ? " bg-accent text-primary" : " bg-[#DDDDDD] text-[#959595]"
            } btn border-0 hover:bg-accent hover:text-primary mt-2 text-[.5rem] lg:text-[.8rem]`}
            onClick={() => setActive(i)}>
            {item}
            <span
              className={`${
                activeItem === i ? " text-white bg-primary" : " bg-[#c1bfbf] text-white"
              } rounded-full py-1 px-2 text-[.5rem] lg:text-[.7rem] ml-4 `}>
              {i == 0
                ? listings?.filter((listing) => listing?.status == "approved").length
                : i == 1
                ? listings.filter((listing) => listing?.status == "pending" && listing.completed).length
                : listings.filter((listing) => listing?.status == "pending" && !listing.completed).length}
            </span>
          </div>
        ))}
      </div>

      {listingLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <Skeleton height={225} />
            <Skeleton height={25} />
          </div>
          <div>
            <Skeleton height={225} />
            <Skeleton height={25} />
          </div>
          <div>
            <Skeleton height={225} />
            <Skeleton height={25} />
          </div>
        </div>
      ) : filteredArray.length === 0 ? (
        <div className="flex justify-center">
          <div className="bg-white rounded-lg w-full md:w-[60%] flex justify-center mt-8">
            <div className="px-4 py-24 flex flex-col space-y-4 items-center">
              <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
              <p className="text-center text-[#AAAAAA]">
                You do not have any{" "}
                <span>{activeItem === 0 ? "published listing" : activeItem === 1 ? "pending listing" : "draft"}</span>{" "}
                <br /> at this time.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[...filteredArray]?.reverse()?.map((item, i) => (
            <ListingLocationCard data={item} key={item + i} />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Listings;
