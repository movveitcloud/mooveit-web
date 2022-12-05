import React, { useState } from "react";
import { motion } from "framer-motion";
import DriverProfileModal from "../modals/DriverProfileModal";

const DriverCard = ({ data, data: { firstName, lastName, email, phone, _id }, setFilteredDrivers }) => {
  return (
    <>
      <motion.div
        key={_id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flex p-5 flex-col text-center align-middle justify-between rounded-lg border hover:shadow relative">
        <div className="flex flex-col justify-center">
          <div className="rounded-full w-16 h-16 bg-slate-300 self-center mb-3 flex items-center justify-center">
            <img src="/dummyAvatar.svg" alt="" className="rounded-full" />
          </div>
          <p className="mb- font-bold">
            {firstName} {lastName}
          </p>
          <p className="text-[#353C44] text-sm">{email}</p>
          <p className="text-[#353C44] text-sm my-1">{phone}</p>
        </div>

        <label htmlFor={_id} className="text-white cursor-pointer btn btn-sm btn-primary capitalize mt-3">
          View Profile
        </label>
      </motion.div>

      <DriverProfileModal data={data} setFilteredDrivers={setFilteredDrivers} />
    </>
  );
};

export default DriverCard;
