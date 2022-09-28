import React, { useEffect, useState } from "react";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { Communication, DashboardLayout, PersonalDetails, Security } from "../../components";

const initialState = {
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
  const { firstName, lastName, email, phone } = formDetails;
  const user = authenticatedUser();
  console.log(user);

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
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone || "",
      enable2fa: user.enable2fa || false,
    });
  };
  const handleUpdate = () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <DashboardLayout>
      <div className="w-[70%] mx-auto text-sm">
        <PersonalDetails formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
        <Security formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
        <Communication formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />

        <div className="flex justify-end">
          <div className="flex gap-4">
            <button
              className="btn btn-outline btn-primary hover:btn-accent w-[175px] font-normal text-sm"
              onClick={getData}>
              Discard Changes
            </button>
            <button className="btn btn-primary w-[175px] font-normal text-sm" onClick={handleUpdate}>
              Save
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PersonalDetailsPage;
