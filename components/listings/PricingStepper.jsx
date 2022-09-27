import React, { useState } from "react";
import Link from "next/link";
import Pricing from "./Pricing";

const initialState = {
  priceType: "elastic",
  monthlyRate: "100",
  hourlyRate: "2.40",
  consent: false,
};

const PricingStepper = () => {
  const [formDetails, setFormDetails] = useState(initialState);

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormDetails({
      ...formDetails,
      [name]: val,
    });
  };

  return (
    <div className="space-y-6">
      <Pricing formDetails={formDetails} setFormDetails={setFormDetails} handleChange={handleChange} />
      <div className="flex gap-5 items-center">
        <p className="">
          I agree with MovveIT's{" "}
          <Link href="#" className="font-semibold">
            <a className="font-semibold">terms & conditions</a>
          </Link>
        </p>
        <input
          type="checkbox"
          name="consent"
          onChange={handleChange}
          checked={formDetails.consent}
          className="toggle toggle-primary toggle-sm bg-[#cccccc] h-4 w-7"
        />
      </div>
    </div>
  );
};

export default PricingStepper;
