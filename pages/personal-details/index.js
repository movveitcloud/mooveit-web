import React, { useEffect, useState } from "react";
import { authenticatedUser, updateUser } from "../../redux/features/auth.slice";
import { Communication, DashboardLayout, PersonalDetails, Security } from "../../components";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  profilePicture: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  enable2fa: false,
  supportEmail: false,
  supportText: false,
  reminderEmail: false,
  reminderText: false,
  marketingEmail: false,
  marketingText: false,
};

const PersonalDetailsPage = () => {
  const [formDetails, setFormDetails] = useState(initialState);
  const {
    firstName,
    lastName,
    email,
    phone,
    enable2fa,
    supportEmail,
    supportText,
    reminderEmail,
    reminderText,
    marketingEmail,
    marketingText,
  } = formDetails;
  const { updateLoading, user } = useSelector((state) => state.auth);
  const userDetail = authenticatedUser();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormDetails({
      ...formDetails,
      [name]: val,
    });
  };

  const getData = () => {
    setFormDetails({
      ...formDetails,
      profilePicture: userDetail.profilePicture || "",
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      email: userDetail.email,
      phone: userDetail.phone || "",
      enable2fa: userDetail.enable2fa || false,
      supportEmail: userDetail.supportEmail || false,
      supportText: userDetail.supportText || false,
      reminderEmail: userDetail.reminderEmail || false,
      reminderText: userDetail.reminderText || false,
      marketingEmail: userDetail.marketingEmail || false,
      marketingText: userDetail.marketingText || false,
    });
  };

  const handleUpdate = () => {
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      enable2fa,
      supportEmail,
      supportText,
      reminderEmail,
      reminderText,
      marketingEmail,
      marketingText,
    };
    dispatch(updateUser({ payload, id: userDetail?._id }));
  };

  useEffect(() => {
    getData();
  }, [user]);

  return (
    <DashboardLayout name="Personal Details">
      <div className="w-[95%] sm:w-[90%] md:w-[80%] xl:w-[75%] max-w-[960px] mx-auto text-sm">
        <PersonalDetails formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
        <Security formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
        <Communication formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />

        <div className="flex justify-end my-8">
          <div className="flex gap-4">
            <button
              className="btn btn-outline btn-primary hover:btn-accent md:w-[175px] font-normal normal-case"
              onClick={getData}>
              Discard Changes
            </button>
            <button
              className={`${updateLoading ? "loading" : ""} btn btn-primary md:w-[175px] font-normal normal-case`}
              onClick={handleUpdate}>
              {updateLoading ? "" : "Update Profile"}
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PersonalDetailsPage;
