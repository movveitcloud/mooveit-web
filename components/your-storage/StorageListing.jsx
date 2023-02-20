import React from "react";
import {
  AdditionalServices,
  BookingPeriod,
  DashboardLayout,
  PartnersInformation,
  Price,
  StorageTabs,
} from "../../components";

const StorageListing = () => {
  return (
    <div>
      <PartnersInformation />
      <BookingPeriod />
      <AdditionalServices />
      <Price />
    </div>
  );
};

export default StorageListing;
