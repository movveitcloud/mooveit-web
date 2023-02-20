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
  const pendingListings = listings?.filter((listing) => listing?.status == "pending" && listing.completed);
  const draftListings = listings?.filter((listing) => listing?.status == "pending" && !listing.completed);
  const disapprovedListings = listings?.filter((listing) => listing?.status == "disapproved");

  const displayTabs = disapprovedListings?.length > 0 ? 4 : 3;

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
      <div className="mb-6 flex flex-wrap gap-5">
        {items.slice(0, displayTabs).map((item, i) => (
          <div
            key={i}
            className={`${
              activeItem === i ? " bg-accent text-primary" : " bg-[#DDDDDD] text-[#959595]"
            } btn mt-2 border-0 text-[.5rem] hover:bg-accent hover:text-primary lg:text-[.8rem]`}
            onClick={() => setActive(i)}>
            {item}
            <span
              className={`${
                activeItem === i ? " bg-primary text-white" : " bg-[#c1bfbf] text-white"
              } ml-4 rounded-full py-1 px-2 text-[.5rem] lg:text-[.7rem] `}>
              {i == 0
                ? approvedListings?.length
                : i == 1
                ? pendingListings?.length
                : i == 2
                ? draftListings?.length
                : disapprovedListings?.length}
            </span>
          </div>
        ))}
      </div>

      {listingLoading ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-8 flex w-full justify-center rounded-lg bg-white md:w-[60%]">
            <div className="flex flex-col items-center space-y-4 px-4 py-24">
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
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[...filteredArray]?.reverse()?.map((item, i) => (
            <ListingLocationCard data={item} key={item + i} />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Listings;
