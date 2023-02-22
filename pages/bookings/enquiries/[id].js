import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  DashboardLayout,
  RentersInformation,
  RentersBookingPeriod,
  RentersAdditionalServices,
  RentersPrice,
} from "../../../components";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Enquiries = () => {
  const approve = () => alert("approve");
  const deny = () => alert("deny");
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="mx-auto w-[80%]">
          <div className=" text- mb-8 flex items-center text-sm">
            <p className="  text-[#BBBBBB]">BOOKINGS</p>
            <ChevronRightIcon className="h-4 w-4" />
            <p>ENQUIRY</p>
          </div>
          <>
            <RentersInformation />
            <RentersBookingPeriod />
            <RentersAdditionalServices delivery={true} packing={true} />
            <RentersPrice />
          </>
          <div className=" flex justify-center gap-3">
            <div
              className="border-1 btn  mt-2 border-[#15C53B] px-9 text-[#15C53B] hover:border-[#15C53B] hover:bg-[#15C53B] hover:text-black"
              onClick={approve}>
              <p>APPROVE REQUEST</p>
            </div>
            <div
              className="border-1 btn  mt-2 border-[#F12C2C] px-9 text-[#F12C2C] hover:border-[#F12C2C] hover:bg-[#F12C2C] hover:text-black"
              onClick={deny}>
              <p>DENY REQUEST</p>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Enquiries;
