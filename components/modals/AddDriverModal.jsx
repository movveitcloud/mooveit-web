import React, { useRef, useState } from "react";
import { PencilIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDriver, getDrivers } from "../../redux/features/drivers.slice";

const InputField = ({ formDetails, name, type, handleChange, placeholder, label }) => {
  return (
    <div className="w-full">
      <h3 className="mb-2 text-sm">{label}</h3>
      <div className="items-center border border-[#959595] rounded-lg px-3 sm:px-4 py-3 w-full">
        <input
          type={type ? type : "text"}
          name={name}
          value={formDetails[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-transparent h-full outline-none placeholder:text-[#959595]"
        />
      </div>
    </div>
  );
};

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  vehicleNo: "",
  licenseNo: "",
  profilePicture: "",
};

const AddDriverModal = ({ setFilteredDrivers }) => {
  const [formDetails, setFormDetails] = useState(initialState);
  const { firstName, lastName, email, phone, vehicleNo, licenseNo } = formDetails;
  const { createLoading } = useSelector((state) => state.drivers);
  const dispatch = useDispatch();
  const profilePic = useRef(null);
  const addDriverRef = useRef(null);

  const btnDisabled = !firstName || !lastName || !email || !phone || !vehicleNo || !licenseNo;

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormDetails({
      ...formDetails,
      [name]: val,
    });
  };

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

  const refreshDrivers = () => {
    addDriverRef.current.click();
    dispatch(getDrivers({ setFilteredDrivers }));
    setFormDetails(initialState);
  };

  const handleSubmit = () => {
    dispatch(createDriver({ payload: formDetails, refreshDrivers }));
  };

  return (
    <>
      <input type="checkbox" id="addDriver" className="modal-toggle" />
      <label htmlFor="addDriver" className="modal" ref={addDriverRef}>
        <label className="modal-box p-8  w-[80%] md:w-[60%] max-w-[600px] rounded-xl z-50">
          <h2 className="font-semibold text-lg text-primary mb-6">Add a Driver</h2>{" "}
          <label
            htmlFor="addDriver"
            className="btn btn-sm btn-circle bg-accent text-primary hover:text-white border-accent hover:bg-primary hover:border-none absolute right-6 top-6"
            // onClick={closeModal}
          >
            <XIcon className="w-4" />
          </label>
          <div className="space-y-4">
            {/* <div className="flex justify-center">
              <div className="w-[100px] h-[100px] relative cursor-pointer" onClick={() => profilePic.current.click()}>
                <img
                  src={formDetails.profilePicture || "/dummyAvatar.svg"}
                  alt="profile picture"
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
            </div> */}

            <div className="flex gap-3 sm:gap-6">
              <InputField
                name="firstName"
                placeholder="Enter first name"
                label="First Name"
                formDetails={formDetails}
                handleChange={handleChange}
              />
              <InputField
                name="lastName"
                placeholder="Enter last name"
                label="Last Name"
                formDetails={formDetails}
                handleChange={handleChange}
              />
            </div>

            <div className="flex gap-3 sm:gap-6">
              <InputField
                name="email"
                type="email"
                placeholder="Enter email address"
                label="Email"
                formDetails={formDetails}
                handleChange={handleChange}
              />
              <InputField
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                label="Phone Number"
                formDetails={formDetails}
                handleChange={handleChange}
              />
            </div>

            <div className="flex gap-3 sm:gap-6">
              <InputField
                name="vehicleNo"
                placeholder="Vehicle plate number"
                label="Vehicle Number"
                formDetails={formDetails}
                handleChange={handleChange}
              />
              <InputField
                name="licenseNo"
                type="tel"
                placeholder="Drivers license number"
                label="License Number"
                formDetails={formDetails}
                handleChange={handleChange}
              />
            </div>
          </div>
          <button
            disabled={btnDisabled}
            className={`${
              createLoading ? "loading" : ""
            } btn btn-primary disabled:btn-accent btn-block normal-case mt-6`}
            onClick={handleSubmit}>
            {createLoading ? "" : "Save"}
          </button>
        </label>
      </label>
    </>
  );
};

export default AddDriverModal;
