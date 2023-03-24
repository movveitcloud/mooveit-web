import { CalendarIcon } from "@heroicons/react/outline";
import React from "react";

import Accordion from "../shared/Accordion";

const RentersBookingPeriod = ({ startPeriod, endPeriod }) => {
  return (
    <>
      <div className="mt-2 flex cursor-pointer justify-between  px-4 pt-6 text-[#222222] md:px-6">
        <h2 className="text-left text-sm font-semibold capitalize md:text-base">Booking Period</h2>
      </div>
      {/* <div className=" flex cursor-pointer justify-between  px-4 py-4 text-[#222222] md:px-6"> */}
      {/* <div className="  flex w-full   items-center  justify-between rounded-lg border-l-4 border-accent bg-[#F9F9F9] px-4  py-4 text-sm md:w-[100%] md:px-6"> */}
      <div className="flex   w-full  items-center justify-start py-4  px-4 md:px-6 ">
        <span className="flex h-10 w-10 items-center  justify-center rounded-full ">
          <div className="mr-2 flex h-8 w-8  items-center justify-center rounded-full bg-white ">
            {<CalendarIcon className="w-4" />}
          </div>
        </span>
        <p className=" mr-2 text-[12px] uppercase md:text-[14px]">
          {startPeriod} - {endPeriod}
        </p>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default RentersBookingPeriod;
