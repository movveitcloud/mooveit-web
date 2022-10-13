import React from "react";
import { motion } from "framer-motion";

const ListingDetails = () => {
  const contentArray = [
    { headingLeft: "Storage Type", contentLeft: "Warehouse", headingRight: "Storage Size", contentRight: "Warehouse" },
    {
      headingLeft: "Price",
      contentLeft: "$720/month | $4.20/month",
      headingRight: "Price",
      contentRight: "$720/month | $4.20/month",
    },
    {
      headingLeft: "Security Deposit",
      contentLeft: "$120",
      headingRight: "Minimum Rental",
      contentRight: "30 Minutes",
    },
    { headingLeft: "Floor", contentLeft: "Ground level", headingRight: "Security", contentRight: "Fingerprint system" },
  ];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="space-y-8">
      {contentArray.map(({ headingLeft, contentLeft, headingRight, contentRight }, i) => {
        return (
          <div className="flex justify-start gap-10" key={i}>
            <div className="flex flex-col w-1/2 align-top ">
              <p className="text-[14px]">{headingLeft}</p>
              <p className="text-[#959595] text-[12px] mt-4">{contentLeft}</p>
            </div>
            <div className="flex flex-col w-1/2 align-top justify-start ">
              <p className="text-[14px]">{headingRight}</p>
              <p className="text-[#959595] text-[12px] mt-4">{contentRight}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ListingDetails;
