import React, { useRef, useState } from "react";
import { PencilIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDriver, getDrivers, updateDriver } from "../../redux/features/drivers.slice";

const InputField = ({ formDetails, name, type, handleChange, placeholder, label, disabled }) => {
  return (
    <div className="w-full">
      <h3 className="mb-2 text-sm">{label}</h3>
      <div
        className={`items-center border border-[#c9c9c9] rounded-lg px-3 sm:px-4 py-3 w-full ${
          disabled ? "bg-[#e8e8e8] cursor-not-allowed" : ""
        }`}>
        <input
          type={type ? type : "text"}
          name={name}
          value={formDetails[name]}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full bg-transparent h-full text-sm md:text-base outline-none placeholder:text-[#959595] disabled:cursor-not-allowed"
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

const DriverProfileModal = ({ setFilteredDrivers, data }) => {
  const [formDetails, setFormDetails] = useState(initialState);
  const { firstName, lastName, email, phone, vehicleNo, licenseNo } = formDetails;
  const { updateLoading, deleteLoading } = useSelector((state) => state.drivers);
  const dispatch = useDispatch();
  const driverProfileRef = useRef(null);

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
    driverProfileRef.current.click();
    dispatch(getDrivers({ setFilteredDrivers }));
    setFormDetails(initialState);
  };

  const payload = { firstName, lastName, phone, vehicleNo, licenseNo };

  const handleSubmit = () => {
    dispatch(updateDriver({ payload, id: data?._id, refreshDrivers }));
  };
  const handleDelete = () => {
    dispatch(deleteDriver({ payload, id: data?._id, refreshDrivers }));
  };

  useEffect(() => {
    setFormDetails(data);
  }, [data]);

  return (
    <>
      <input type="checkbox" id={data?._id} className="modal-toggle" />
      <label htmlFor={data?._id} className="modal" ref={driverProfileRef}>
        <label htmlFor="" className="modal-box p-8  w-[80%] md:w-[65%] max-w-[700px] rounded-xl z-50">
          <h2 className="font-semibold text-lg text-primary mb-6">Driver Profile</h2>{" "}
          <label
            htmlFor={data?._id}
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

            <div className="flex flex-col sm:flex-row  gap-3 sm:gap-6">
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

            <div className="flex flex-col sm:flex-row  gap-3 sm:gap-6">
              <InputField
                name="email"
                type="email"
                // disabled={true}
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

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
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
          <div className="flex justify-between items-center gap-3 mt-6">
            <button
              disabled={btnDisabled}
              className={`${
                updateLoading ? "loading" : ""
              } btn btn-primary sm:btn-wide disabled:btn-accent normal-case`}
              onClick={handleSubmit}>
              {updateLoading ? "" : "Update"}
            </button>
            <button
              className={`${deleteLoading ? "loading" : ""} btn text-sm btn-link p-0 m-0 text-red-500 normal-case`}
              onClick={handleDelete}>
              {deleteLoading ? "" : "Delete"}
            </button>
          </div>
        </label>
      </label>
    </>
  );
};

export default DriverProfileModal;
