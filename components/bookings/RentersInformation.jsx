import { CalculatorIcon, CalendarIcon, MailIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";

import Accordion from "../shared/Accordion";

const RentersInformation = () => {
  return (
    <Accordion title="Renter's Information">
      <div className="flex flex-grow flex-col items-center justify-center  gap-2  ">
        <div className="h-[50px] w-[50px]">
          <img src="/dummyAvatar.png" className="h-[60px] w-[60px] rounded-[50%] object-contain " alt="user" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p>Daniel Green</p>
          <BadgeCheckIcon className="ml-3 w-5 text-primary" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <CalendarIcon className="h-4 w-4" />
          <p className="text-[#959595]">214 Bookings</p>
        </div>
        <div className="border-1 btn  mt-2 border-accent px-9 text-[#12181F] hover:border-accent hover:bg-accent">
          <MailIcon className="mr-3 w-4" />

          <p>MESSAGE RENTER</p>
        </div>
      </div>
    </Accordion>
  );
};

export default RentersInformation;
