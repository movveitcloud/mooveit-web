import React from "react";
import { FindStorageCard } from "./index";

const FindStorage = () => {
  return (
    <div className="bg-[#f9f9f9] w-full">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto pt-[6rem] ">
        <h2 className="text-center mb-[6rem]  font-semibold text-2xl text-[#222222]">Find Storage Near You</h2>

        <div className="flex flex-wrap justify-center md:justify-between">
          <FindStorageCard />
          <FindStorageCard />
          <FindStorageCard />
          <FindStorageCard />
          <FindStorageCard />
          <FindStorageCard />
        </div>
      </div>
    </div>
  );
};

export default FindStorage;
