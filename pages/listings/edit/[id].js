import React, { useContext, useEffect, useRef } from "react";
import {
  Access,
  Address,
  BookingDetails,
  Calendar,
  DashboardLayout,
  Description,
  Dimension,
  Media,
  PendingModal,
  Pricing,
  Services,
  Type,
} from "../../../components";
import { useRouter } from "next/router";
import { ListingInputContext } from "../../../context";
import { useDispatch, useSelector } from "react-redux";
import { getSingleListing, updateListing } from "../../../redux/features/listings.slice";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";

const EditListing = () => {
  const { setFormDetails, formDetails, initialState } = useContext(ListingInputContext);
  const { singleListing, singleListingLoading, loading } = useSelector((state) => state.listing);
  const router = useRouter();
  const dispatch = useDispatch();
  const pendingModal = useRef(null);
  const query = router.query.id;

  const {
    address,
    formattedAddress,
    coordinates,
    storageType,
    storageFloor,
    storageFeatures,
    services,
    storageSize,
    storageNumber,
    streetView,
    storageTitle,
    description,
    image,
    unavailabilityPeriods,
    storageAccessPeriod,
    storageAccessType,
    parkingPermit,
    parkingInstruction,
    bookingDuration,
    bookingNotice,
    monthlyRate,
    hourlyRate,
  } = formDetails;

  const discardChanges = () => {
    setFormDetails({ ...singleListing });
  };

  const fieldsComplete =
    address &&
    storageType &&
    storageFloor &&
    storageFeatures.length > 0 &&
    storageSize?.name?.length > 0 &&
    image?.length > 0 &&
    storageTitle &&
    description &&
    storageAccessPeriod &&
    storageAccessType &&
    bookingDuration &&
    bookingNotice &&
    monthlyRate &&
    hourlyRate
      ? true
      : false;

  const saveChanges = () => {
    const payload = {
      address,
      formattedAddress: {
        street: formattedAddress?.street?.toLowerCase(),
        area: formattedAddress?.area?.toLowerCase(),
      },
      coordinates,
      storageType,
      storageFloor,
      storageFeatures,
      services,
      streetView,
      storageSize,
      storageNumber,
      image,
      storageTitle,
      description,
      unavailabilityPeriods,
      storageAccessPeriod,
      storageAccessType,
      parkingPermit,
      parkingInstruction,
      bookingDuration,
      bookingNotice,
      monthlyRate,
      hourlyRate,
      completed: fieldsComplete,
    };

    dispatch(
      updateListing({
        payload,
        id: query,
        edit: true,
        router,
        fieldsComplete,
        status: singleListing?.completed,
        pendingModal,
      })
    );
  };

  useEffect(() => {
    if (query) {
      dispatch(getSingleListing({ id: query }));
    }
  }, [query]);
  useEffect(() => {
    // singleListing?.services?.map(
    //   (item) => serviceOptions.includes(item) && setFormDetails({ ...formDetails, ...singleListing, [item]: true })
    // );
    setFormDetails({ ...formDetails, ...singleListing, image: singleListing?.media });

    return () => {
      setFormDetails(initialState);
    };
  }, [singleListing]);

  console.log(singleListing);

  return (
    <DashboardLayout>
      {singleListingLoading ? (
        <div className="flex h-[500px] items-center justify-center">
          <BeatLoader loading={singleListingLoading} color="#EDCC5B" />
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="mb-4 flex items-center gap-3">
            <button className="btn btn-link gap-2 hover:no-underline" onClick={() => router.push("/listings")}>
              <ArrowNarrowLeftIcon className="w-4" />
              Back
            </button>
            <h2 className="text-xl font-bold">{singleListing?.storageTitle}</h2>
          </div>
          <div className="mx-auto w-[80%]">
            <div className="mb-3 text-center text-xs">
              <p>* submission will remain in draft until all fields are complete</p>
              <p className="text-red-500">* red border-lines indicate incomplete fields</p>
            </div>
            <>
              <Address incomplete={!address} open />
              <Type incomplete={!storageType || !storageFloor || storageFeatures.length == 0} />
              <Services />
            </>
            <>
              <Dimension incomplete={!storageSize?.name} />
              {/* <StreetView /> */}
              <Media edit={true} id={singleListing?._id} incomplete={image?.length == 0} />
              <Description incomplete={!storageTitle || !description} />
            </>
            <>
              {/* <Calendar /> */}
              <Access incomplete={!storageAccessPeriod || !storageAccessType} />
              <BookingDetails incomplete={!bookingDuration || !bookingNotice} />
            </>
            <Pricing incomplete={!monthlyRate || monthlyRate == 0 || !hourlyRate || hourlyRate == 0} />

            <div className="flex justify-end">
              <div className="flex gap-4">
                <button className={`btn btn-outline btn-primary w-[175px] hover:btn-accent`} onClick={discardChanges}>
                  Discard Changes
                </button>
                <button
                  className={`${
                    loading && "loading"
                  } btn btn-primary w-[175px] disabled:bg-[#ccc] disabled:text-primary`}
                  onClick={saveChanges}>
                  {loading ? "" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <label htmlFor="pending" className="hidden" ref={pendingModal} />
      <PendingModal />
    </DashboardLayout>
  );
};

export default EditListing;
