import { CalendarIcon, ChatAltIcon, LightningBoltIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { useSelector } from "react-redux";
import BookContainer from "./BookContainer";

const MessagePartner = () => {
  const { userListing, userListingLoading } = useSelector((state) => state.listing);
  console.log(userListing);

  return (
    <BookContainer>
      <div className="space-y-5 md:space-y-6">
        <h2 className="font-bold capitalize">Partner</h2>
        <div className="flex items-center space-x-4">
          <span className="h-16 w-16 rounded-full">
            {userListing?.partner?.profilePicture ? (
              <img src={profilePicture} className=" w-30 h-30 rounded-full object-cover " alt="user" />
            ) : (
              <img src="/dummyAvatar.png" className="h-[60px] w-[60px] rounded-[50%] object-contain " alt="user" />
            )}
            {/* <img src="/dummyAvatar.png" alt="partner image" className="h-full w-full object-contain" /> */}
          </span>
          <div className="md:space-y-1">
            <div className="flex space-x-2">
              <h3 className="font-semibold">
                {/* {`${userListing?.user?.firstName} ${userListing?.user?.lastName}`} */}
                {userListing?.user !== null ? `${userListing?.user?.firstName} ${userListing?.user?.lastName}` : ""}
              </h3>
              <BadgeCheckIcon className="w-4 text-primary" />
            </div>
            <div className="flex flex-col space-y-1 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex space-x-2">
                <CalendarIcon className="w-3 text-primary md:w-4" />
                <p className="text-xs text-[#959595] md:text-sm">214 listings</p>
              </div>
              <div className="flex space-x-2">
                <LightningBoltIcon className="w-3 text-primary md:w-4" />
                <p className="text-xs text-[#959595] md:text-sm">Responsive Partner</p>
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
