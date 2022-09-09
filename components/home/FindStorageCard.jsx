import React from "react";

const FindStorageCard = () => {
  return (
    <div className="w-[90%] md:w-[32%] flex mb-[2rem]  rounded-sm">
      <div className="w-[40%] object-contain bg-[url(/side.png)] h-[100px] rounded-sm"></div>
      <div className="w-[60%] bg-white flex rounded-sm">
        <div className="my-auto ml-5">
          <h5 className="font-light">London</h5>
          <p className=" text-[#107E7E] font-extralight text-[.7rem]">32 listings</p>
        </div>
      </div>
    </div>
  );
};

export default FindStorageCard;
