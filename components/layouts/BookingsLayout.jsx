import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { PencilIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { getBooking } from "../../redux/features/bookings.slice";

const BookingsLayout = ({ bookingStatus, bookings }) => {
  const dummyData = [
    { _id: 1, Address: "45-59 Lots Road, Chelsea, SW10 0RN", status: "enquiries", name: "Tom Hiddlestone" },
    { _id: 1, Address: "55-69 Lots Road, Chelsea, SW10 0RN", status: "enquiries", name: "Tom Hiddlestone" },
    { _id: 1, Address: "65-69 Lots Road, Chelsea, SW10 0RN", status: "active", name: "Tom Hiddlestone" },
    { _id: 1, Address: "75-79 Lots Road, Chelsea, SW10 0RN", status: "active", name: "Tom Hiddlestone" },
    { _id: 1, Address: "85-89 Lots Road, Chelsea, SW10 0RN", status: "active", name: "Tom Hiddlestone" },
    { _id: 1, Address: "95-99 Lots Road, Chelsea, SW10 0RN", status: "active", name: "Tom Hiddlestone" },
  ];

  const dispatch = useDispatch();
  const router = useRouter();
  const viewBooking = (_id, status) => router.push(`/bookings/${_id}`);
  //const { bookings, loading } = useSelector((state) => state.booking);

  // useEffect(() => {
  //   dispatch(getBooking());
  // }, []);

  //console.log(bookings);

  return (
    <div className="mt-8 flex w-full flex-wrap gap-5">
      {bookings.map(({ storageListing, user, approvalStatus, _id, name, paymentStatus }, i) =>
        bookingStatus === "active" && paymentStatus === "successful" ? (
          <div
            className="mb-5  w-full  rounded-md bg-white p-4 transition-transform duration-500 hover:scale-105 hover:shadow md:w-[48%] lg:w-[31%]"
            key={i}>
            <div className="rounnded-md h-[120px]">
              <img
                src={storageListing?.media[0] || "/listing.png"}
                alt="listing view"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className=" mt-3 flex text-[#959595]">
              <LocationMarkerIcon className="mr-2 w-4" />
              <h4 className="text-[.6rem] lg:text-[.7rem]">{storageListing.address}</h4>
            </div>

            <div className="mt-2 flex items-center justify-between md:mt-4">
              <div className="flex items-center gap-2 align-middle">
                <div className="h-[50px] w-[50px]">
                  {user.profilePicture ? (
                    <img src={user.profilePicture} className=" w-30 h-30 rounded-full object-cover " alt="user" />
                  ) : (
                    <img
                      src="/dummyAvatar.png"
                      className="h-[60px] w-[60px] rounded-[50%] object-contain "
                      alt="user"
                    />
                  )}
                </div>
                <h4 className="text-[.7rem] font-semibold  lg:text-[.8rem]">
                  {user.firstName} {user.lastName}
                </h4>
              </div>
              <div className="justify-right mr-0 flex cursor-pointer " onClick={() => viewBooking(_id, approvalStatus)}>
                <PencilIcon className="mr-2 w-4 text-[#4543A5] " />
                <p className="text-[.7rem] text-[#4543A5] lg:text-[.8rem]">MANAGE</p>
              </div>
            </div>
          </div>
        ) : (
          (paymentStatus === null || paymentStatus === "error") &&
          bookingStatus === approvalStatus && (
            <div
              className="mb-5  w-full  rounded-md bg-white p-4 transition-transform duration-500 hover:scale-105 hover:shadow md:w-[48%] lg:w-[31%]"
              key={i}>
              <div className="rounnded-md h-[120px]">
                <img
                  src={storageListing?.media[0] || "/listing.png"}
                  alt="listing view"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div className=" mt-3 flex text-[#959595]">
                <LocationMarkerIcon className="mr-2 w-4" />
                <h4 className="text-[.6rem] lg:text-[.7rem]">{storageListing.address}</h4>
              </div>

              <div className="mt-2 flex items-center justify-between md:mt-4">
                <div className="flex items-center gap-2 align-middle">
                  <div className="h-[50px] w-[50px]">
                    {user.profilePicture ? (
                      <img src={user.profilePicture} className=" w-30 h-30 rounded-full object-cover " alt="user" />
                    ) : (
                      <img
                        src="/dummyAvatar.png"
                        className="h-[60px] w-[60px] rounded-[50%] object-contain "
                        alt="user"
                      />
                    )}
                    {/* <img
                      src="/dummyAvatar.png"
                      className="h-[60px] w-[60px] rounded-[50%] object-contain "
                      alt="user"
                    /> */}
                  </div>
                  <h4 className="text-[.7rem] font-semibold  lg:text-[.8rem]">
                    {user.firstName} {user.lastName}
                  </h4>
                </div>
                <div
                  className="justify-right mr-0 flex cursor-pointer "
                  onClick={() => viewBooking(_id, approvalStatus)}>
                  <PencilIcon className="mr-2 w-4 text-[#4543A5] " />
                  <p className="text-[.7rem] text-[#4543A5] lg:text-[.8rem]">MANAGE</p>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default BookingsLayout;
