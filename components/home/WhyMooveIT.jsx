import Image from "next/image";
import React from "react";

const WhyMooveIT = () => {
  return (
    <section className="max-full bg-[#f9f9f9]">
      <div className="flex ">
        <div className="w-full md:w-[50%] pb-[6rem] bg-primary text-white pt-[3rem]">
          <div className="text-left text-sm 2xl:text-base leading-7 mx-auto w-[90%] md:w-[74%] lg:max-w-[85%]">
            <h2 className="my-[2rem] font-semibold text-2xl text-white">Why MooveIT?</h2>
            <p className="mt-8 mb-4 font-light ">
              MooveIT provides an advanced online marketplace for self-storage and moving services that will effectively
              connect customers and service providers, bringing greater convenience for both.
            </p>
            <p className="font-light ">
              Our vision is to revolutionise the self-storage and moving industry by leveraging state-of-the-art
              technologies like AI, ML and Augmented Reality.Our vision is to revolutionise the self-storage and moving
              industry by leveraging state-of-the-art technologies like AI, ML and Augmented Reality.
              <br />
            </p>
            <button className="btn btn-accent w-[175px] text-xs mt-8 font-light text-[#222222]">Search Listings</button>
          </div>
        </div>
        <div className="relative hidden md:block md:w-[50%] bg-primary">
          <Image
            src="/side.png"
            alt="movveit"
            // placeholder="blur"
            // blurDataURL="/fallback.png"
            className=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyMooveIT;
