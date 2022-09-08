import React from "react";
import { HowCards } from "./index";

const HowItWorks = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto pt-[6rem]">
        <h2 className="text-center mb-[6rem] font-semibold text-2xl text-[#222222]">How Its Works</h2>
        <div className="w-full md:flex ">
          <HowCards />
          <HowCards />
          <HowCards />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
