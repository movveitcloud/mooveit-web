import { AdjustmentsIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";
import { DashboardLayout, EmptyStorage, StorageCard, StorageTabs } from "../../components";
import { FilterIcon } from "@heroicons/react/outline";

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
        <div className="border-1 btn  mt-2 border-accent px-9 text-black hover:border-accent hover:bg-accent">
          <FilterIcon className="mr-3 w-4" />
          <p>Filters</p>
        </div>
      </div>
      {/* <EmptyStorage /> */}
      <div className="mt-12 flex w-full flex-wrap gap-5">
        <StorageCard />
        <StorageCard />
        <StorageCard />
        <StorageCard />
      </div>
    </DashboardLayout>
  );
};

export default YourStorage;
