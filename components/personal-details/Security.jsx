import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Accordion from "../shared/Accordion";
import Switch from "../shared/Switch";

const Security = ({ formDetails, handleChange }) => {
  return (
    <Accordion title="security">
      <div className="space-y-6">
        <Link href="#">
          <a className="flex justify-between items-center">
            <h2>Change Password</h2>
            <ChevronRightIcon className="w-3" />
          </a>
        </Link>
        <div className="flex gap-5 items-center">
          <p className="font-semibold">Enable 2FA</p>
          <Switch name="enable2fa" handleChange={handleChange} formDetails={formDetails} />
        </div>
      </div>
    </Accordion>
  );
};

export default Security;
