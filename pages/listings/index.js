import React from "react";
import { DashboardLayout } from "../../components";
import { authenticatedUser } from "../../redux/features/auth.slice";
import { ListingCards } from "../../components";

const Listings = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full justify-between ">
        <div className="w-[48.5%] bg-white rounded-md pt-5 ">
          <div className="flex px-6  mb-4">
            <h4 className="mr-3 font-semibold"> Published listings</h4>
            <span className="bg-accent rounded-[50%] text-[.7rem] px-2 py-1">3</span>
          </div>
          <ListingCards />
          <ListingCards />
          <ListingCards />
        </div>
        <div className="w-[48.5%]  bg-white rounded-sm pt-5 ">
          <div className="flex px-6  mb-4">
            <h4 className="mr-3 font-semibold"> Drafts </h4>
            <span className="bg-accent rounded-[50%] text-[.7rem] px-2 py-1">2</span>
          </div>
          <ListingCards />
          <ListingCards />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Listings;
