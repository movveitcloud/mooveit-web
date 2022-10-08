import React, { useState } from "react";
import { FilterIcon } from "@heroicons/react/outline";
import { BookingCards } from "..";

const AllBookings = () => {
  const [activeItem, setActive] = useState(0);
  const items = ["Active Bookings", "Enquires", "History"];

  return (
    <div>
      <div className="flex justify-between  w-full flex-wrap">
        <div className="flex gap-5 flex-wrap">
          {items.map((item, i) => (
            <div
              className={`${
                activeItem === i ? " bg-[#DCDCFF] text-[#4543A5]" : " bg-[#DDDDDD] text-[#959595]"
              } btn border-0 hover:bg-[#DCDCFF] hover:text-[#4543A5] mt-2 text-[.5rem] lg:text-[.8rem]`}
              onClick={() => setActive(i)}>
              {item}{" "}
              <span
                className={`${
                  activeItem === i ? " text-white bg-[#4543A5]" : " bg-[#c1bfbf] text-white"
                } rounded-md p-1 text-[.5rem] lg:text-[.7rem] ml-4 `}>
                22
              </span>
            </div>
          ))}
        </div>
        <div className="btn border-1 hidden sm:flex border-[#4543A5] text-[#4543A5] px-9 mt-2">
          <FilterIcon className="w-4 mr-3" />
          <p>Filters</p>
        </div>
      </div>
      {activeItem === 0 && (
        <div className="flex w-full mt-12 flex-wrap gap-5">
          <BookingCards />
          <BookingCards />
          <BookingCards />
          <BookingCards />
        </div>
      )}
    </div>
  );
};

export default AllBookings;
