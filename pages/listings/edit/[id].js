import React, { useContext, useEffect, useState } from "react";
import {
  Access,
  Address,
  BookingDetails,
  Calendar,
  DashboardLayout,
  Description,
  Dimension,
  Media,
  Pricing,
  Services,
  StreetView,
  Type,
} from "../../../components";
import { useRouter } from "next/router";
import axios from "axios";
import { ListingInputContext } from "../../../context";
import { useDispatch, useSelector } from "react-redux";
import { getSingleListing, updateListing } from "../../../redux/features/listings.slice";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";

const EditListing = () => {
  const { activeStepper, setFormDetails, formDetails, initialState } = useContext(ListingInputContext);
  const { singleListing, singleListingLoading, loading } = useSelector((state) => state.listing);
  const router = useRouter();
  const dispatch = useDispatch();
  const query = router.query.id;

  const serviceOptions = ["delivery", "packing"];
  const services = [];
  serviceOptions.map((item) => formDetails[item] && services.push(item));
  const {
    address,
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

  const saveChanges = () => {
    const payload = {
      address,
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
    dispatch(updateListing({ payload, id: query, edit: true }));
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
    setFormDetails({ ...formDetails, ...singleListing });

    return () => {
      setFormDetails(initialState);
    };
  }, [singleListing]);

  console.log(singleListing, "list");

  return (
    <DashboardLayout>
      {singleListingLoading ? (
        <div className="h-[500px] flex justify-center items-center">
          <BeatLoader loading={singleListingLoading} color="#4543A5" />
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="flex gap-3 items-center mb-4">
            <button className="gap-2 btn btn-link hover:no-underline" onClick={() => router.push("/listings")}>
              <ArrowNarrowLeftIcon className="w-4" />
              Back
            </button>
            <h2 className="font-bold text-xl">{singleListing?.address}</h2>
          </div>
          <div className="w-[80%] mx-auto">
            <>
              <Address />
              <Type />
              <Services />
            </>
            <>
              <Dimension />
              {/* <StreetView /> */}
              <Media />
              <Description />
            </>
            <>
              <Calendar />
              <Access />
              <BookingDetails />
            </>
            <Pricing />

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
    </DashboardLayout>
  );
};

export default EditListing;

// export const getServerSideProps = async ({ params: { id } }) => {
//   try {
//     const baseURL = process.env.BASE_URL;
//     const { data, errors } = await axios(`${baseURL}/listings/${id}`);

//     if (!data) {
//       return { notFound: true };
//     }

//     return {
//       props: {
//         data: data.data,
//       },
//     };
//   } catch (error) {
//     return { notFound: true };
//   }
// };
