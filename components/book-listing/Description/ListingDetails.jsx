import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
//import { howAccessListing, spaceDuration, storageFloors, storageKinds, storageSize } from "../../../helpers/data";
import { getValue } from "../../../helpers/utils";
import {
  getStorageAccessPeriods,
  getShortestPeriods,
  getNoticePeriods,
  getStorageServices,
  getStorageSizes,
  getStorageAccessTypes,
  getStorageFeatures,
  getStorageFloors,
  getStorageTypes,
} from "../../../redux/features/config.slice";

const Item = ({ title, value }) => {
  return (
    <div className="text-sm">
      <p className="font-[500]">{title}</p>
      <p className="mt-2 text-[#959595]">{value}</p>
    </div>
  );
};

const ListingDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStorageTypes());
    dispatch(getStorageFloors());

    dispatch(getStorageAccessTypes());
    dispatch(getStorageAccessPeriods());
    dispatch(getShortestPeriods());
    dispatch(getNoticePeriods());
    dispatch(getStorageServices());
    dispatch(getStorageSizes());
  }, []);
  const { storageTypes } = useSelector((state) => state.config);
  const { storageFloors } = useSelector((state) => state.config);

  const { storageAccessTypes } = useSelector((state) => state.config);
  const { storageAccessPeriods } = useSelector((state) => state.config);
  const { shortestPeriods } = useSelector((state) => state.config);
  const { noticePeriods } = useSelector((state) => state.config);
  const { storageSizes } = useSelector((state) => state.config);
  const { storageServices } = useSelector((state) => state.config);

  const { userListing, userListingLoading } = useSelector((state) => state.listing);
  

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="space-y-8">
      <div className="grid grid-cols-2 gap-y-6">
        {/* <Item title="Storage Type" value={getValue({ options: storageKinds, key: userListing?.storageType })} />
        <Item title="Storage Size" value={getValue({ options: storageSize, key: userListing?.storageSize })} />
        <Item title="Minimum Rental" value={getValue({ options: spaceDuration, key: userListing?.bookingDuration })} />
        <Item title="Storage Floor" value={getValue({ options: storageFloors, key: userListing?.storageFloor })} />
        <Item title="Security" value={getValue({ options: howAccessListing, key: userListing?.storageAccessType })} />
        <Item title="Parking Permit" value={userListing?.parkingPermit ? "Available" : "N/A"} /> */}
        <Item title="Storage Type" value={getValue({ options: storageTypes, key: userListing?.storageType })} />
        <Item title="Storage Size" value={getValue({ options: storageSizes, key: userListing?.storageSize?.name })} />
        <Item
          title="Minimum Rental"
          value={getValue({ options: shortestPeriods, key: userListing?.bookingDuration })}
        />
        <Item title="Storage Floor" value={getValue({ options: storageFloors, key: userListing?.storageFloor })} />
        <Item title="Security" value={getValue({ options: storageAccessTypes, key: userListing?.storageAccessType })} />
        <Item
          title="Parking Permit"
          value={userListing?.packingPermit === false ? "No" : userListing?.packingPermit === true ? "Yes" : "N/A"}
        />
      </div>
    </motion.div>
  );
};

export default ListingDetails;
