import Link from "next/link";
import React from "react";

const FindStorageCard = () => {
  return (
    <Link href="#">
      <a className="w-full md:w-[32%] flex mb-[2rem]  rounded-sm">
        <div className="w-[100px] object-contain bg-[url(/side.png)] h-[100px] rounded-sm"></div>
        <div className="w-[60%] bg-white flex rounded-sm">
          <div className="my-auto ml-5">
            <h5 className="text-[#222222] font-light">London</h5>
            <p className=" text-primary font-extralight text-[.7rem]">32 listings</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default FindStorageCard;
