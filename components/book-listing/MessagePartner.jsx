import { CalendarIcon, ChatAltIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { useSelector } from "react-redux";
import BookContainer from "./BookContainer";

const MessagePartner = () => {
  const { userListing, userListingLoading } = useSelector((state) => state.listing);
  return (
    <BookContainer>
      <div className="space-y-5 md:space-y-6">
        <h2 className="font-bold capitalize">Partner</h2>
        <div className="flex space-x-4 items-center">
          <span className="w-16 h-16 rounded-full">
            <img src="/dummyAvatar.png" alt="partner image" className="object-contain w-full h-full" />
          </span>
          <div className="md:space-y-1">
            <div className="flex space-x-2">
              <h3 className="font-semibold">{`${userListing?.user?.firstName} ${userListing?.user?.lastName}`} </h3>
              <BadgeCheckIcon className="w-4 text-primary" />
            </div>
            <div className="flex flex-col md:flex-row space-y-1 md:space-x-4">
              <div className="flex space-x-2">
                <CalendarIcon className="w-3 md:w-4 text-primary" />
                <p className="text-[#959595] text-xs md:text-sm">214 bookings</p>
              </div>
              <div className="flex space-x-2">
                <CalendarIcon className="w-3 md:w-4 text-primary" />
                <p className="text-[#959595] text-xs md:text-sm">Responsive Partner</p>
              </div>
            </div>
          </div>
        </div>

        {/* <button className="btn btn-primary btn-outline w-full flex gap-2 text-sm normal-case">
          <ChatAltIcon className="w-4" /> Message Partner
        </button> */}
      </div>
    </BookContainer>
  );
};

export default MessagePartner;
