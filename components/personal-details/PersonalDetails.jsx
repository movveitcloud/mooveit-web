import React from "react";
import { PencilIcon } from "@heroicons/react/solid";
import Accordion from "../shared/Accordion";

const PersonalDetails = ({ formDetails, handleChange }) => {
  const uploadImage = () => {};

  return (
    <Accordion title="personal details">
      <div className="space-y-6">
        <div className="w-[100px] h-[100px] relative cursor-pointer" onClick={uploadImage}>
          <img src="/dummyAvatar.png" alt="avatar" className="object-cover w-full h-full rounded-lg" />
          <div className="flex items-center justify-center absolute bottom-3 right-0 w-8 h-8 bg-accent rounded-full">
            <PencilIcon className="w-4 text-primary" />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-full">
            <h3 className="mb-3">First Name</h3>
            <div className="items-center border border-[#959595] rounded-lg px-4 py-3 w-full">
              <input
                type="text"
                name="firstName"
                value={formDetails.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full bg-transparent h-full pr-6 outline-none placeholder:text-[#959595]"
              />
            </div>
          </div>
          <div className="w-full">
            <h3 className="mb-3">Last Name</h3>
            <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
              <input
                type="text"
                name="lastName"
                value={formDetails.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full bg-transparent h-full pr-6 outline-none placeholder:text-[#959595]"
              />
            </div>
          </div>
        </div>

        <div className="w-full hover:cursor-not-allowed">
          <h3 className="mb-3">Email</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <input
              type="email"
              name="email"
              value={formDetails.email}
              onChange={handleChange}
              disabled
              placeholder="Enter email address"
              className="w-full bg-transparent h-full pr-6 outline-none placeholder:text-[#959595] cursor-not-allowed"
            />
          </div>
        </div>

        <div className="w-full">
          <h3 className="mb-3">Phone Number</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <input
              type="text"
              name="phone"
              value={formDetails.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full bg-transparent h-full pr-6 outline-none placeholder:text-[#959595]"
            />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default PersonalDetails;
