import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Tabs = ({ activeTab, setActiveTab }) => {
  const menuItems = ["Listing Details", "Dimensions", "Street View", "Review"];

  return (
    <nav className="flex justify-between  w-full mb-0 ">
      <div className="flex gap-5 w-full  ">
        {menuItems.map((item, i) => (
          <div>
            <a
              className={`${
                activeTab === i ? "text-primary text-md border-x-0 border-t-0 rounded-none p-0 " : "text-[#959595]"
              }  text-md  cursor-pointer`} onClick={() => setActiveTab(i)}>
              {item}
            </a>
            <div className={`${activeTab === i ? "w-[4rem] mt-2 mb-8 h-[2px] bg-primary rounded-md" : ""}`} />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Tabs;
