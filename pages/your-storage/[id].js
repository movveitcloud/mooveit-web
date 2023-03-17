import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AdditionalServices,
  BookingPeriod,
  DashboardLayout,
  PartnersInformation,
  Price,
  StorageTabs,
  StorageListing,
  Disputes,
  Legal,
  Payment,
} from "../../components";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Manage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabItems = [
    { name: "Listing Details", count: 22 },
    { name: "Payments", count: 22 },
    { name: "Legal", count: 22 },
    { name: "Disputes", count: 22 },
  ];

  const filterItem = () => {
    const result =
      activeTab == 0 ? (
        <listing />
      ) : activeTab == 1 ? (
        <payment />
      ) : activeTab == 2 ? (
        <legal />
      ) : activeTab == 3 ? (
        <disputes />
      ) : (
        []
      );
    setFilteredArray(result);
  };
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="mx-auto w-[80%]">
          <div className=" mb-8 flex items-center">
            <p className="text-[#BBBBBB]">Your Storage</p>
            <ChevronRightIcon className="h-4 w-4" />
            <p>Manage</p>
          </div>
          <div className="mb-10">
            <StorageTabs activeTab={activeTab} setActiveTab={setActiveTab} tabItems={tabItems} />
          </div>
          {activeTab == 0 ? (
            <StorageListing />
          ) : activeTab == 1 ? (
            <Payment />
          ) : activeTab == 2 ? (
            <Legal />
          ) : activeTab == 3 ? (
            <Disputes />
          ) : null}
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Manage;
