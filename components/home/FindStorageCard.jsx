import Link from "next/link";
import React from "react";

const FindStorageCard = () => {
  return (
    <Link href="#">
      <a className=" w-[85%] md:w-[32%] flex md:flex-row flex-col mb-[2rem]  rounded-sm">
        <div className="md:w-[100px] w-full object-contain bg-[url(/side.png)] h-[200px] md:h-[100px] rounded-sm"></div>
        <div className="md:w-[60%] bg-white flex rounded-sm">
          <div className="my-auto ml-5 py-6">
            <h5 className="text-[#222222] font-light mb-2">London</h5>
            <p className=" text-primary font-extralight text-[.7rem]">32 listings</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default FindStorageCard;
