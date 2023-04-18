import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUserListing } from "../../redux/features/listings.slice";
import { motion } from "framer-motion";
import { ListingCardCheckout, Meta, PageLayout, PaymentPolicy, YourBooking } from "../../components";
import { BeatLoader } from "react-spinners";
import { EmojiSadIcon } from "@heroicons/react/outline";
import { authenticatedUser } from "../../redux/features/auth.slice";

const Checkout = () => {
  const initialState = { moving: false, packing: false, consent: false, total: "" };
  const { userListing, userListingLoading, listingError } = useSelector((state) => state.listing);
  const [bookingInfo, setBookingInfo] = useState(initialState);
  const router = useRouter();
  const dispatch = useDispatch();
  const query = router.query.listingId;
  const user = authenticatedUser();

  const handleServiceChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setBookingInfo({ ...bookingInfo, [name]: val });
    
  };
 
  useEffect(() => {
    if (query) {
      dispatch(getUserListing({ id: query }));
    }
  }, [query]);

  useEffect(() => {
    setBookingInfo({ ...bookingInfo, ...JSON.parse(sessionStorage.getItem("booking")) });
  }, []);
  useEffect(() => {
    if (!user && query) {
      router.push({ pathname: "/login", query: { redirect: `/checkout/${query}` } });
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
          <Meta title={`Checkout | ${userListing.storageTitle}`} description={userListing?.description} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto mb-8 max-w-[90%] space-y-8 py-3 md:py-5 lg:max-w-[85%]">
            <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-8 lg:space-y-0">
              <div className="flex w-full flex-col space-y-8 lg:w-[60%]">
                <YourBooking
                  bookingInfo={bookingInfo}
                  setBookingInfo={setBookingInfo}
                  handleServiceChange={handleServiceChange}
                  userListing={userListing}
                />
                <PaymentPolicy />
              </div>

              <div className="w-full lg:w-[40%]">
                <div className="flex flex-col space-y-6 space-x-0 md:flex-row md:space-y-0 md:space-x-8 lg:sticky lg:top-8 lg:flex-col lg:space-y-8 lg:space-x-0">
                  {userListing && (
                    <ListingCardCheckout bookingInfo={bookingInfo} item={userListing} setBookingInfo={setBookingInfo} />
                  )}
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
