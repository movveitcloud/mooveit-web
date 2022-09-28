import React from "react";
import { DeviceMobileIcon, MailIcon } from "@heroicons/react/outline";
import Accordion from "../shared/Accordion";
import Switch from "../shared/Switch";

const Communication = ({ formDetails, handleChange }) => {
  return (
    <Accordion title="communication">
      <div className="space-y-6">
        <div className="grid grid-cols-12 items-center">
          <h2 className="font-semibold col-span-8">Category</h2>
          <div className="col-span-2 flex justify-center text-primary">
            <div className="flex items-center gap-3">
              <MailIcon className="w-5 hidden sm:block" />
              <p>Email</p>
            </div>
          </div>
          <div className="col-span-2 flex justify-center text-primary">
            <div className="flex items-center gap-2">
              <DeviceMobileIcon className="w-5 hidden sm:block" />
              <p>Text</p>
            </div>
          </div>
        </div>

        <hr className="border-[#eeeeee]" />

        <div className="grid grid-cols-12 items-center">
          <div className="col-span-8 space-y-2">
            <h2 className="font-semibold">Account Support</h2>
            <p className="text-xs text-[#959595]">Important Information about your account, listings & bookings</p>
          </div>
          <div className="col-span-2 flex justify-center text-primary">
            <Switch name="supportEmail" handleChange={handleChange} formDetails={formDetails} />
          </div>
          <div className="col-span-2 flex justify-center text-primary">
            <Switch name="supportText" handleChange={handleChange} formDetails={formDetails} />
          </div>
        </div>

        <div className="grid grid-cols-12 items-center">
          <div className="col-span-8 space-y-2">
            <h2 className="font-semibold">Reminders</h2>
            <p className="text-xs text-[#959595]">Prompts & reminders about your listings & Bookings </p>
          </div>
          <div className="col-span-2 flex justify-center text-primary">
            <Switch name="reminderEmail" handleChange={handleChange} formDetails={formDetails} />
          </div>
          <div className="col-span-2 flex justify-center text-primary">
            <Switch name="reminderText" handleChange={handleChange} formDetails={formDetails} />
          </div>
        </div>

        <div className="grid grid-cols-12 items-center">
          <div className="col-span-8 space-y-2">
            <h2 className="font-semibold">Marketing</h2>
            <p className="text-xs text-[#959595]">Product updates, special offers & promotions, surveys</p>
          </div>
          <div className="col-span-2 flex justify-center text-primary">
            <Switch name="marketingEmail" handleChange={handleChange} formDetails={formDetails} />
          </div>
          <div className="col-span-2 flex justify-center text-primary">
            <Switch name="marketingText" handleChange={handleChange} formDetails={formDetails} />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Communication;
