import { AdjustmentsIcon } from "@heroicons/react/outline";
import React, { useEffect, useEffectLayout } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { DashboardLayout, EmptyStorage, Tabs, YourstorageLayout } from "../../components";
import { FilterIcon } from "@heroicons/react/outline";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { getBooking, getSingleBooking, approveBooking } from "../../redux/features/bookings.slice";
import { PulseLoader } from "react-spinners";

const YourStorage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const storageStatus = ["active", "approved", "pending", "disapproved"];

  const user = authenticatedUser();
  const id = user._id;
  const { bookings, bookingLoading, singleBooking, singleBookingLoading, approveBookingLoading } = useSelector(
    (state) => state.bookings
  );

  //console.log(bookings);
  const dispatch = useDispatch();
  //const BookingType = ({ status }) => bookings?.filter((booking) => booking.approvalStatus === status);
  const approvedBookings = bookings
    ? Object.values(bookings).filter(
        (booking) => booking?.approvalStatus == "approved" && booking?.paymentStatus == null
      )
    : "";
  const pendingBookings = bookings
    ? Object.values(bookings).filter((booking) => booking?.approvalStatus == "pending")
    : "";
  const disapprovedBookings = bookings
    ? Object.values(bookings).filter((booking) => booking?.approvalStatus == "disapproved")
    : "";
  const paidBookings = bookings
    ? Object.values(bookings).filter(
        (booking) => booking?.approvalStatus == "approved" && booking?.paymentStatus == "successful"
      )
    : "";

  // const pendingBookings = BookingType({ status: "pending" });

  const storageCounts = [
    paidBookings.length,
    approvedBookings.length,
    pendingBookings.length,
    disapprovedBookings.length,
  ];
  const tabItems = [
    { name: "Active", count: paidBookings.length },
    { name: "Approved", count: approvedBookings.length },
    { name: "Pending", count: pendingBookings.length },
    { name: "Disapproved", count: disapprovedBookings.length },
  ];
  // if (user) {
  //   console.log(id);
  // }

  useEffect(() => {
    dispatch(getBooking());
  }, []);

  return (
    <DashboardLayout>
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
          {storageCounts[activeTab] === 0 ? (
            <div className="text-center text-xl font-bold ">
              <div className="flex justify-center">
                <div className="mt-8 flex w-full justify-center rounded-lg bg-white md:w-[60%]">
                  <div className="flex flex-col items-center space-y-4 px-4 py-24">
                    <img src="emptyStorage.svg" alt="empty storage icon" className="w-16 md:w-20" />
                    <p className="text-center text-xl font-bold text-[#AAAAAA]">{`No ${storageStatus[activeTab]} booking at this time.`}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <YourstorageLayout bookings={bookings} storageStatus={storageStatus[activeTab]} />
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default YourStorage;
