import React from "react";
import {
  BookingDescription,
  BookListingMainCard,
  BookNow,
  Location,
  MessagePartner,
  PageLayout,
  SimilarListings,
} from "../../../components";

const BookListing = () => {
  return (
    <PageLayout>
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto py-3 md:py-5 space-y-8">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-x-8 lg:space-y-0">
          <div className="w-full lg:w-[60%] flex flex-col space-y-8">
            <BookListingMainCard />
            <BookingDescription />
          </div>

          <div className="w-full lg:w-[40%]">
            <div className="lg:sticky lg:top-8 flex flex-col md:flex-row lg:flex-col space-y-6 space-x-0 lg:space-y-8 md:space-y-0 md:space-x-8 lg:space-x-0">
              <BookNow />
              <MessagePartner />
            </div>
          </div>
        </div>
        <Location />
        <SimilarListings />
      </div>
    </PageLayout>
  );
};

export default BookListing;
