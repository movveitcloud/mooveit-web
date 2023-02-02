import { AdjustmentsIcon } from "@heroicons/react/outline";
import React from "react";
import { useEffect, useState } from "react";
import { DashboardLayout, StorageTabs } from "../../components";

const YourStorage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabItems = [
    { name: "Active", count: 22 },
    { name: "Enquiries", count: 22 },
  ];
  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <StorageTabs activeTab={activeTab} setActiveTab={setActiveTab} tabItems={tabItems} />
        <button className="btn border border-accent bg-white px-8 font-normal text-black">
          <AdjustmentsIcon className="mr-2 h-4 w-4" />
          Filter
        </button>
      </div>
      YourStorage
    </DashboardLayout>
  );
};

export default YourStorage;
