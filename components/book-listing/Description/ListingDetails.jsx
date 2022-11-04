import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { howAccessListing, spaceDuration, storageFloors, storageKinds, storageSize } from "../../../helpers/data";
import { getValue } from "../../../helpers/utils";

const Item = ({ title, value }) => {
  return (
    <div className="text-sm">
      <p className="font-[500]">{title}</p>
      <p className="text-[#959595] mt-2">{value}</p>
    </div>
  );
};

const ListingDetails = () => {
  const { userListing, userListingLoading } = useSelector((state) => state.listing);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="space-y-8">
      <div className="grid grid-cols-2 gap-y-6">
        <Item title="Storage Type" value={getValue({ options: storageKinds, key: userListing?.storageType })} />
        <Item title="Storage Size" value={getValue({ options: storageSize, key: userListing?.storageSize })} />
        <Item title="Minimum Rental" value={getValue({ options: spaceDuration, key: userListing?.bookingDuration })} />
        <Item title="Storage Floor" value={getValue({ options: storageFloors, key: userListing?.storageFloor })} />
        <Item title="Security" value={getValue({ options: howAccessListing, key: userListing?.storageAccessType })} />
        <Item title="Parking Permit" value={userListing?.parkingPermit ? "Available" : "N/A"} />
      </div>
    </motion.div>
  );
};

export default ListingDetails;
