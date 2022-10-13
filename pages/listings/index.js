import React, { useState, useEffect } from "react";
import { DashboardLayout } from "../../components";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { ListingLocationCard } from "../../components";
import { listings } from "../../helpers/data";

const Listings = () => {
  const [activeItem, setActive] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const items = ["Approved", "Pending", "Draft"];

  const filterItem = () => {
    const result =
      activeItem == 0
        ? listings.filter((listing) => listing?.type == "approved")
        : activeItem == 1
        ? listings.filter((listing) => listing?.type == "pending")
        : activeItem == 2
        ? listings.filter((listing) => listing?.type == "draft")
        : listings;
    setSelectedItem(result);
  };

  useEffect(() => {
    filterItem();
  }, [activeItem]);
  return (
    <DashboardLayout>
      <div className="flex gap-5 flex-wrap mb-6">
        {items.map((item, i) => (
          <div
            key={i}
            className={`${
              activeItem === i ? " bg-[#DCDCFF] text-[#4543A5]" : " bg-[#DDDDDD] text-[#959595]"
            } btn border-0 hover:bg-[#DCDCFF] hover:text-[#4543A5] mt-2 text-[.5rem] lg:text-[.8rem]`}
            onClick={() => setActive(i)}>
            {item}
            <span
              className={`${
                activeItem === i ? " text-white bg-[#4543A5]" : " bg-[#c1bfbf] text-white"
              } rounded-md p-1 text-[.5rem] lg:text-[.7rem] ml-4 `}>
              {selectedItem?.length}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-full gap-5 flex-wrap">
        {selectedItem && selectedItem?.map((item) => <ListingLocationCard data={item} key={item + i} />)}
      </div>
    </DashboardLayout>
  );
};

export default Listings;
