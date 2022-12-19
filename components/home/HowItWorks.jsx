import React from "react";
import { howItWorks } from "../../helpers/data";
import HowCards from "./HowCards";

const HowItWorks = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 md:py-24">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto px-4">
        <h2 className="text-center font-semibold text-2xl text-[#222222] mt-16 mb-10 md:my-12">How It Works</h2>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">
          {howItWorks.map((data, i) => (
            <HowCards key={i} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
