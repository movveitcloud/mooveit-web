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
  const items = ["Published", "Pending", "Draft", "Rejected"];

  const approvedListings = listings?.filter((listing) => listing?.status == "approved");
  const pendingListings = listings.filter((listing) => listing?.status == "pending" && listing.completed);
  const draftListings = listings.filter((listing) => listing?.status == "pending" && !listing.completed);
  const disapprovedListings = listings.filter((listing) => listing?.status == "disapproved");

  const displayTabs = disapprovedListings.length > 0 ? 4 : 3;

  const filterItem = () => {
    const result =
      activeItem == 0
        ? approvedListings
        : activeItem == 1
        ? pendingListings
        : activeItem == 2
        ? draftListings
        : activeItem == 3
        ? disapprovedListings
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
        {items.slice(0, displayTabs).map((item, i) => (
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
                ? approvedListings.length
                : i == 1
                ? pendingListings.length
                : i == 2
                ? draftListings.length
                : disapprovedListings.length}
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
