import React, { useEffect, useState } from "react";
import { FilterIcon } from "@heroicons/react/outline";
import { BookingCards } from "..";
import { Tabs, BookingsLayout } from "../../components";
import { useRouter } from "next/router";
import { getBooking } from "../../redux/features/bookings.slice";

import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";

const AllBookings = () => {
  const [activeItem, setActive] = useState(0);
  const items = ["Active Bookings", "Enquires", "History"];

  const router = useRouter();
  const { bookings, bookingLoading } = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const BookingType = ({ status }) => bookings?.filter((booking) => booking.approvalStatus === status);
  const approvedBookings = BookingType({ status: "approved" });
  const pendingBookings = BookingType({ status: "pending" });
  const disapprovedBookings = BookingType({ status: "disapproved" });

  const tabItems = [
    { name: "Approved", count: approvedBookings.length },
    { name: "Pending", count: pendingBookings.length },
    { name: "Disapproved", count: disapprovedBookings.length },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const bookingCounts = [approvedBookings.length, pendingBookings.length, disapprovedBookings.length];
  const bookingStatus = ["approved", "pending", "disapproved"];

  useEffect(() => {
    dispatch(getBooking());
  }, []);

  return (
    // <div>
    //   <div className="flex justify-between  w-full flex-wrap">
    //     <div className="flex gap-5 flex-wrap">
    //       {items.map((item, i) => (
    //         <div
    //           key={i}
    //           className={`${
    //             activeItem === i ? " bg-[#DCDCFF] text-[#4543A5]" : " bg-[#DDDDDD] text-[#959595]"
    //           } btn border-0 hover:bg-[#DCDCFF] hover:text-[#4543A5] mt-2 text-[.5rem] lg:text-[.8rem]`}
    //           onClick={() => setActive(i)}>
    //           {item}{" "}
    //           <span
    //             className={`${
    //               activeItem === i ? " text-white bg-[#4543A5]" : " bg-[#c1bfbf] text-white"
    //             } rounded-md p-1 text-[.5rem] lg:text-[.7rem] ml-4 `}>
    //             22
    //           </span>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="btn border-1 hidden sm:flex border-[#4543A5] text-[#4543A5] px-9 mt-2">
    //       <FilterIcon className="w-4 mr-3" />
    //       <p>Filters</p>
    //     </div>
    //   </div>
    //   {activeItem === 0 && (
    //     <div className="flex w-full mt-12 flex-wrap gap-5">
    //       <BookingCards />
    //       <BookingCards />
    //       <BookingCards />
    //       <BookingCards />
    //     </div>
    //   )}
    // </div>
    <>
      {bookingLoading ? (
        <div className="relative">
          <div className="flex h-[500px] items-center justify-center">
            <PulseLoader loading={bookingLoading} color="#EDCC5B" />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabItems={tabItems} />
            {/* <div className="border-1 btn  mt-2 border-accent px-9 text-black hover:border-accent hover:bg-accent">
          <FilterIcon className="mr-3 w-4" />
          <p>Filters</p>
        </div> */}
          </div>
          {/* <EmptyStorage /> */}
          {bookingCounts[activeTab] === 0 ? (
            <div className="text-center text-xl font-bold ">
              <div className="flex justify-center">
                <div className="mt-8 flex w-full justify-center rounded-lg bg-white md:w-[60%]">
                  <div className="flex flex-col items-center space-y-4 px-4 py-24">
                    <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
                    <p className="text-center text-xl font-bold text-[#AAAAAA]">{`No ${bookingStatus[activeTab]} booking at this time.`}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <BookingsLayout bookings={bookings} bookingStatus={bookingStatus[activeTab]} />
          )}
        </div>
      )}
    </>
  );
};

export default AllBookings;
