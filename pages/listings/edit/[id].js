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

  const serviceOptions = ["delivery", "packing"];
  const services = [];
  serviceOptions.map((item) => formDetails[item] && services.push(item));
  const {
    address,
    formattedAddress,
    coordinates,
    storageType,
    storageFloor,
    storageFeatures,
    packing,
    delivery,
    storageSize,
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
    storageSize &&
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
  console.log(singleListing);
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
      packing,
      delivery,
      services,
      streetView,
      storageSize,
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

  return (
    <DashboardLayout>
      {singleListingLoading ? (
        <div className="h-[500px] flex justify-center items-center">
          <BeatLoader loading={singleListingLoading} color="#EDCC5B" />
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="flex gap-3 items-center mb-4">
            <button className="gap-2 btn btn-link hover:no-underline" onClick={() => router.push("/listings")}>
              <ArrowNarrowLeftIcon className="w-4" />
              Back
            </button>
            <h2 className="font-bold text-xl">{singleListing?.storageTitle}</h2>
          </div>
          <div className="w-[80%] mx-auto">
            <>
              <Address incomplete={!address} />
              <Type incomplete={!storageType || !storageFloor || storageFeatures.length == 0} />
              <Services />
            </>
            <>
              <Dimension incomplete={!storageSize} />
              {/* <StreetView /> */}
              <Media edit={true} id={singleListing?._id} incomplete={image?.length == 0} />
              <Description incomplete={!storageTitle || !description} />
            </>
            <>
              <Calendar />
              <Access incomplete={!storageAccessPeriod || !storageAccessType} />
              <BookingDetails incomplete={!bookingDuration || !bookingNotice} />
            </>
            <Pricing incomplete={(!monthlyRate || monthlyRate == 0) && (!hourlyRate || hourlyRate == 0)} />

            <div className="flex justify-end">
              <div className="flex gap-4">
                <button className={`btn btn-outline btn-primary hover:btn-accent w-[175px]`} onClick={discardChanges}>
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
