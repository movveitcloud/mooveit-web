import React, { useState } from "react";
import { useRouter } from "next/router";
import Tabs from "./Tabs";
import Dimensions from "./Dimensions";
import Review from "./Review";
import StreetView from "./StreetView";
import ListingDetails from "./ListingDetails";
import BookContainer from "../BookContainer";

const BookingDescription = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <BookContainer>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 0 && <ListingDetails />}
      {activeTab === 1 && <Dimensions />}
      {activeTab === 2 && <Review />}
      {/* {activeTab === 3 && <StreetView />} */}
    </BookContainer>
  );
};

export default BookingDescription;
