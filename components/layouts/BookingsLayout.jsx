import React from "react";
import { useRouter } from "next/router";
import { PencilIcon, LocationMarkerIcon } from "@heroicons/react/outline";

const BookingsLayout = ({ bookingStatus }) => {
  const dummyData = [
    { _id: 1, Address: "45-59 Lots Road, Chelsea, SW10 0RN", status: "enquiries", name: "Tom Hiddlestone" },
    { _id: 1, Address: "55-69 Lots Road, Chelsea, SW10 0RN", status: "enquiries", name: "Tom Hiddlestone" },
    { _id: 1, Address: "65-69 Lots Road, Chelsea, SW10 0RN", status: "active", name: "Tom Hiddlestone" },
    { _id: 1, Address: "75-79 Lots Road, Chelsea, SW10 0RN", status: "active", name: "Tom Hiddlestone" },
    { _id: 1, Address: "85-89 Lots Road, Chelsea, SW10 0RN", status: "active", name: "Tom Hiddlestone" },
    { _id: 1, Address: "95-99 Lots Road, Chelsea, SW10 0RN", status: "active", name: "Tom Hiddlestone" },
  ];
  const router = useRouter();
  const viewBooking = (_id) => bookingStatus !== "active" && router.push(`/bookings/${bookingStatus}/${_id}`);

  return (
    <div className="mt-12 flex w-full flex-wrap gap-5">
      {dummyData.map(
        ({ Address, status, _id, name }) =>
          bookingStatus === status && (
            <div className="mb-5  w-full  rounded-md bg-white p-4 transition-transform duration-500 hover:scale-105 hover:shadow md:w-[48%] lg:w-[31%]">
              <div className="rounnded-md h-[120px]">
                <img src="/listing.png" alt="listing view" className="h-full w-full rounded-md object-cover" />
              </div>
              <div className=" mt-3 flex text-[#959595]">
                <LocationMarkerIcon className="mr-2 w-4" />
                <h4 className="text-[.6rem] lg:text-[.7rem]">{Address}</h4>
              </div>

              <div className="mt-2 flex items-center justify-between md:mt-4">
                <div className="flex items-center gap-2 align-middle">
                  <div className="h-[50px] w-[50px]">
                    <img
                      src="/dummyAvatar.png"
                      className="h-[60px] w-[60px] rounded-[50%] object-contain "
                      alt="user"
                    />
                  </div>
                  <h4 className="text-[.7rem] font-semibold  lg:text-[.8rem]">{name}</h4>
                </div>
                <div className="justify-right mr-0 flex">
                  <PencilIcon className="mr-2 w-4 text-[#4543A5] " />
                  <p
                    className="cursor-pointer text-[.7rem] text-[#4543A5] lg:text-[.8rem]"
                    onClick={() => viewBooking(_id)}>
                    MANAGE
                  </p>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default BookingsLayout;
