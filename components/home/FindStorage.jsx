import React from "react";
import { FindStorageCard } from "./index";

const FindStorage = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto pt-[5rem] pb-[3rem]">
        <h2 className="text-center mb-[3rem]  font-semibold text-2xl text-[#222222]">Find Storage Near You</h2>

        <div className="flex flex-wrap justify-between">
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
