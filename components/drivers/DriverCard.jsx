import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DriverCard = ({ data, data: { firstName, lastName, email, role, _id } }) => {
  const [userData, setUserData] = useState(data);

  return (
    <motion.div
      key={_id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex p-5 flex-col text-center align-middle justify-between rounded-lg border hover:shadow relative">
      {/* options button */}

      {/* <div className="dropdown dropdown-left absolute right-3 top-5">
          <label tabIndex="0" className="">
            <DotsVerticalIcon tabIndex="0" className="w-5 cursor-pointer dropdown focus:outline-none" />
          </label>
          <ul tabIndex="0" className="dropdown-content menu p-2 border shadow bg-base-100 rounded-box w-36 text-sm">
            <li className="focus:bg-none">
              <label htmlFor={_id} className="">
                Edit role
              </label>
            </li>
            <li className="focus:bg-none">
              <label htmlFor={email} className="text-red-500">
                Delete driver
              </label>
            </li>
          </ul>
        </div> */}

      {/* <StaffRoleModal
          userData={userData}
          setUserData={setUserData}
          setUsers={setUsers}
          setFilteredStaff={setFilteredStaff}
        /> */}

      {/* <DeleteStaffModal userData={userData} setUsers={setUsers} setFilteredStaff={setFilteredStaff} /> */}

      {/* options button */}

      <div className="flex flex-col justify-center">
        <div className="rounded-full w-16 h-16 bg-slate-300 self-center mb-3 flex items-center justify-center">
          <img src="/dummyAvatar.svg" alt="" className="rounded-full" />
        </div>
        <p className="mb- font-bold">
          {firstName} {lastName}
        </p>
        <p className="text-[#353C44] text-sm mb-1">{email}</p>
      </div>
      {/* update the url below to enable fetching users by slug */}
      <Link href={`#`}>
        <a className="text-white cursor-pointer btn btn-sm btn-primary capitalize mt-3">View Profile</a>
      </Link>
    </motion.div>
  );
};

export default DriverCard;
