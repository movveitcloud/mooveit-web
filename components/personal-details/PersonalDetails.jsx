import React, { useRef, useState } from "react";
import { PencilIcon } from "@heroicons/react/solid";
import { errorPopUp } from "../../helpers/toastify";
import Accordion from "../shared/Accordion";

const PersonalDetails = ({ formDetails, setFormDetails, handleChange }) => {
  const profilePic = useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    const maxAllowedSize = 0.2 * 1024 * 1024; //200KB calculation

    if (file) {
      if (file.size > maxAllowedSize) return errorPopUp({ msg: "image should not be more than 200KB" });
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormDetails({ ...formDetails, profilePicture: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Accordion title="personal details" open>
      <div className="space-y-6">
        <div className="w-[100px] h-[100px] relative cursor-pointer" onClick={() => profilePic.current.click()}>
          <img
            src={formDetails.profilePicture || "/dummyAvatar.svg"}
            alt="avatar"
            className="object-cover w-full h-full rounded-full"
          />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            multiple={false}
            ref={profilePic}
            onChange={handleImageUpload}
          />
          <div className="flex items-center justify-center absolute bottom-3 -right-1 w-8 h-8 bg-accent rounded-full">
            <PencilIcon className="w-4 text-primary" />
          </div>
        </div>

        <div className="flex gap-3 sm:gap-6">
          <div className="w-full">
            <h3 className="mb-3">First Name</h3>
            <div className="items-center border border-[#959595] rounded-lg px-3 sm:px-4 py-3 w-full">
              <input
                type="text"
                name="firstName"
                value={formDetails.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full bg-transparent h-full outline-none placeholder:text-[#959595]"
              />
            </div>
          </div>
          <div className="w-full">
            <h3 className="mb-3">Last Name</h3>
            <div className="items-center border border-[#959595] rounded-lg px-3 sm:px-4 py-3">
              <input
                type="text"
                name="lastName"
                value={formDetails.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full bg-transparent h-full outline-none placeholder:text-[#959595]"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <h3 className="mb-3">Email</h3>
          <div className="items-center border border-[#959595] rounded-lg px-3 sm:px-4 py-3 hover:cursor-not-allowed">
            <input
              type="email"
              name="email"
              value={formDetails.email}
              onChange={handleChange}
              disabled
              placeholder="Enter email address"
              className="w-full bg-transparent h-full outline-none placeholder:text-[#959595] cursor-not-allowed disabled:text-[#959595]"
            />
          </div>
        </div>

        <div className="w-full">
          <h3 className="mb-3">Phone Number</h3>
          <div className="items-center border border-[#959595] rounded-lg px-3 sm:px-4 py-3">
            <input
              type="text"
              name="phone"
              value={formDetails.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full bg-transparent h-full outline-none placeholder:text-[#959595]"
            />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default PersonalDetails;
