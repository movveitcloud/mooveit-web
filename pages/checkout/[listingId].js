import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUserListing } from "../../redux/features/listings.slice";
import { motion } from "framer-motion";
import { BookingDescription, BookListingMainCard, ListingCardCheckout, Meta, PageLayout } from "../../components";
import { BeatLoader } from "react-spinners";
import { EmojiSadIcon } from "@heroicons/react/outline";

const Checkout = () => {
  const { userListing, userListingLoading, listingError } = useSelector((state) => state.listing);
  const router = useRouter();
  const dispatch = useDispatch();
  const query = router.query.listingId;

  useEffect(() => {
    if (query) {
      dispatch(getUserListing({ id: query }));
    }
  }, [query]);

  console.log(userListing);

  return (
    <PageLayout>
      {userListingLoading ? (
        <div className="h-[500px] flex justify-center items-center">
          <BeatLoader loading={userListingLoading} color="#4543A5" />
        </div>
      ) : listingError ? (
        <div className="h-[500px] flex flex-col justify-center items-center space-y-4">
          <div className="bg-accent rounded-full w-fit flex justify-center p-5 items-center h-auto">
            <EmojiSadIcon className="text-primary w-14 md:w-20" />
          </div>
          <h1 className="text-3xl">Oops! this listing doesn't seem to exist anymore</h1>
          <button className="btn btn-primary btn-wide" onClick={() => router.replace("/search")}>
            Browse Listings
          </button>
        </div>
      ) : (
        <>
          <Meta title={`Checkout | ${userListing.storageTitle}`} description={userListing?.description} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-[90%] lg:max-w-[85%] mx-auto py-3 md:py-5 mb-8 space-y-8">
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-x-8 lg:space-y-0">
              <div className="w-full lg:w-[60%] flex flex-col space-y-8">
                <BookListingMainCard />
              </div>

              <div className="w-full lg:w-[40%]">
                <div className="lg:sticky lg:top-8 flex flex-col md:flex-row lg:flex-col space-y-6 space-x-0 lg:space-y-8 md:space-y-0 md:space-x-8 lg:space-x-0">
                  {userListing && <ListingCardCheckout item={userListing} />}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </PageLayout>
  );
};

export default Checkout;
