import React from "react";
import { DashboardLayout } from "../../components";
import { authenticatedUser } from "../../redux/features/auth.slice";

const Listings = () => {
  return (
    <DashboardLayout>
      <div className=""> Listing Page</div>
    </DashboardLayout>
  );
};

export default Listings;
