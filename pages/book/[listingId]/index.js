import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUserListing } from "../../../redux/features/listings.slice";
import { motion } from "framer-motion";
import {
  BookingDescription,
  BookListingMainCard,
  BookNow,
  Location,
  MessagePartner,
  Meta,
  PageLayout,
  SimilarListings,
} from "../../../components";
import { BeatLoader } from "react-spinners";
import { EmojiSadIcon } from "@heroicons/react/outline";

const BookListing = () => {
  const { userListing, userListingLoading, listingError } = useSelector((state) => state.listing);
  const router = useRouter();
  const dispatch = useDispatch();
  const query = router.query.listingId;

  useEffect(() => {
    if (query) {
      dispatch(getUserListing({ id: query }));
    }
  }, [query]);

  return (
    <PageLayout>
      {userListingLoading ? (
        <div className="flex h-[500px] items-center justify-center">
          <BeatLoader loading={userListingLoading} color="#EDCC5B" />
        </div>
      ) : listingError ? (
        <div className="flex h-[500px] flex-col items-center justify-center space-y-4">
          <div className="flex h-auto w-fit items-center justify-center rounded-full bg-accent p-5">
            <EmojiSadIcon className="w-14 text-primary md:w-20" />
          </div>
          <h1 className="text-3xl">Oops! this listing doesn't seem to exist anymore</h1>
          <button className="btn btn-primary btn-wide" onClick={() => router.replace("/search")}>
            Browse Listings
          </button>
        </div>
      ) : (
        <>
          <Meta title={userListing.storageTitle} description={userListing?.description} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-[90%] space-y-8 py-3 md:py-5 lg:max-w-[85%]">
            <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-8 lg:space-y-0">
              <div className="flex w-full flex-col space-y-8 lg:w-[60%]">
                <BookListingMainCard />
                <BookingDescription />
              </div>

              <div className="w-full lg:w-[40%]">
                <div className="flex flex-col space-y-6 space-x-0 md:flex-row md:space-y-0 md:space-x-8 lg:sticky lg:top-8 lg:flex-col lg:space-y-8 lg:space-x-0">
                  <BookNow />
                  <MessagePartner />
                </div>
              </div>
            </div>
            <Location />
            <SimilarListings />
          </motion.div>
        </>
      )}
    </PageLayout>
  );
};

export default BookListing;
