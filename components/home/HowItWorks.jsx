import React from "react";
import HowCards from "./HowCards";

const HowItWorks = () => {
  return (
    <section className="bg-[#f9f9f9]">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto pt-[6rem]">
        <h2 className="text-center mb-[6rem] font-semibold text-2xl text-[#222222]">How It Works</h2>
        <div className="w-full md:flex ">
          <HowCards />
          <HowCards />
          <HowCards />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
