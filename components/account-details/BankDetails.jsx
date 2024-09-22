import React, { useRef, useState } from "react";
import { PencilIcon } from "@heroicons/react/solid";
import { errorPopUp } from "../../helpers/toastify";
import Accordion from "../shared/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { authenticatedUser, updateProfileImage } from "../../redux/features/auth.slice";
import { FadeLoader } from "react-spinners";
import Image from "next/image";

const BankDetails = ({ banks, formDetails, setFormDetails, handleChange }) => {
  const userDetail = authenticatedUser();

  return (
    <Accordion title="Bank Details" open>
      <div className="space-y-6">
        <div className="w-full">
          <h3 className="mb-3">Bank Name</h3>
          <div className="items-center rounded-lg border border-[#959595] px-3 py-3 hover:cursor-not-allowed sm:px-4">
            <select
              type="text"
              name="bankName"
              value={formDetails.bankName}
              onChange={handleChange}
              placeholder="Enter Account Holder Name"
              className="h-full w-full bg-transparent outline-none placeholder:text-[#959595] disabled:text-[#959595]">
              <option value="">Select Bank</option>
              {banks.map((bank) => (
                <option value={bank.name} key={bank._id}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full">
          <h3 className="mb-3">Account Holder Name</h3>
          <div className="items-center rounded-lg border border-[#959595] px-3 py-3 hover:cursor-not-allowed sm:px-4">
            <input
              type="text"
              name="accountName"
              value={formDetails.accountName}
              onChange={handleChange}
              placeholder="Enter Account Holder Name"
              className="h-full w-full bg-transparent outline-none placeholder:text-[#959595] disabled:text-[#959595]"
            />
          </div>
        </div>

        <div className="flex gap-3 sm:gap-6">
          <div className="w-full">
            <h3 className="mb-3">Bank Account Number</h3>
            <div className="items-center rounded-lg border border-[#959595] px-3 py-3 sm:px-4">
              <input
                type="number"
                name="accountNumber"
                value={formDetails.accountNumber}
                onChange={handleChange}
                placeholder="Enter acccount number"
                className="h-full w-full bg-transparent outline-none placeholder:text-[#959595]"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className="mb-3">Sort Code</h3>
            <div className="items-center rounded-lg border border-[#959595] px-3 py-3 sm:px-4">
              <input
                type="number"
                name="sortCode"
                value={formDetails.sortCode}
                onChange={handleChange}
                placeholder="Enter bank sort code"
                className="h-full w-full bg-transparent outline-none placeholder:text-[#959595]"
              />
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default BankDetails;
