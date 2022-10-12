import React from "react";
import { BookNow, MessagePartner, PageLayout } from "../../../components";
import BookListingMainCard from "../../../components/book-listing/BookListingMainCard";

const BookListing = () => {
  return (
    <PageLayout>
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto py-3 md:py-5 ">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-x-8 lg:space-y-0 pb-12">
          <div className="w-full lg:w-[60%] flex flex-col space-y-8">
            <BookListingMainCard />
            <BookListingMainCard />
          </div>

          <div className="w-full lg:w-[40%]">
            <div className="lg:sticky lg:top-8 flex flex-col md:flex-row lg:flex-col space-y-6 space-x-0 lg:space-y-8 md:space-y-0 md:space-x-8 lg:space-x-0">
              <BookNow />
              <MessagePartner />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BookListing;
