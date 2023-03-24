import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { getBooking, getSingleBooking, approveBooking, createPaymentLink } from "../../redux/features/bookings.slice";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../../helpers/utils";
import Link from "next/link";
import { CalculatorIcon, CalendarIcon, MailIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { getValue, getValueArray } from "../../helpers/utils";
import {
  DashboardLayout,
  RentersInformation,
  RentersBookingPeriod,
  RentersAdditionalServices,
  RentersPrice,
  DisapproveBookingModal,
  MakePaymentModal,
  RentersType,
  RentersAccess,
} from "../../components";
import {
  getStorageAccessPeriods,
  getShortestPeriods,
  getNoticePeriods,
  getStorageServices,
  getStorageSizes,
  getStorageAccessTypes,
  getStorageFeatures,
  getStorageFloors,
  getStorageTypes,
} from "../../redux/features/config.slice";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { PulseLoader } from "react-spinners";

const Manage = () => {
  const router = useRouter();
  const [storageDate, setStorageDate] = useState("");
  const query = router.query.id;
  const id = query;
  const { bookings, singleBooking, singleBookingLoading, approveBookingLoading, paymentLinkLoading, paymentLink } =
    useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  const closeModal = useRef(null);

  const refreshPage = () => {
    dispatch(getSingleBooking({ id }));
  };

  const createLink = () => {
    if (query) {
      const payload = {
        bookingId: query,
      };

      dispatch(createPaymentLink({ payload, router, closeModal, refreshPage: refreshPage }));
    }
  };
  console.log(singleBooking);
  const Back = () => {
    router.push("/your-storage");
  };

  useEffect(() => {
    if (query) {
      dispatch(getSingleBooking({ id }));
    }
  }, [query]);
  useEffect(() => {
    if (paymentLink) {
      //console.log(paymentLink.paymentLink);
    }
  }, [paymentLink]);
  console.log(singleBooking, "single");

  useEffect(() => {
    dispatch(getStorageTypes());
    dispatch(getStorageFloors());
    dispatch(getStorageFeatures());
    dispatch(getStorageAccessPeriods());
    dispatch(getStorageAccessTypes());
  }, []);
  const { storageTypes } = useSelector((state) => state.config);
  const { storageFloors } = useSelector((state) => state.config);
  const { storageFeatures } = useSelector((state) => state.config);
  const { storageAccessPeriods } = useSelector((state) => state.config);
  const { storageAccessTypes } = useSelector((state) => state.config);
  console.log(storageFeatures);
  // useEffect(() => {
  //   if (singleBooking) {
  //     singleBooking?.type == "hourly" ? setStorageDate(singleBooking?.endDate?.split("T")[0]) : "";
  //   }
  // }, [singleBooking]);
  // console.log(storageDate);

  // {
  //   post && format(new Date(post?.publishedAt), "MMMM dd, yyyy");
  // }

  return (
    <DashboardLayout>
      {singleBookingLoading ? (
        <div className="relative">
          <div className="flex h-[500px] items-center justify-center">
            <PulseLoader loading={singleBookingLoading} color="#EDCC5B" />
          </div>
        </div>
      ) : (
        <div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="mx-auto w-[80%]">
              <div className=" text- mb-8 flex cursor-pointer items-center text-sm">
                <p className="  text-[#BBBBBB]" onClick={Back}>
                  BOOKINGS
                </p>
                <ChevronRightIcon className="h-4 w-4" />

                <p className=" uppercase">
                  {singleBooking?.paymentStatus == "successful" ? "active" : singleBooking?.approvalStatus}
                </p>
              </div>
              <div
                className={`mb-8 h-full rounded-md border-[0.5px] bg-white p-2 transition-all duration-300 ${"border-white"}`}>
                <RentersInformation
                  firstName={singleBooking?.user?.firstName}
                  lastName={singleBooking.user?.lastName}
                  profilePicture={singleBooking.user?.profilePicture}
                  partner={singleBooking?.partner}
                />
                <RentersBookingPeriod
                  startPeriod={
                    singleBooking?.type == "monthly"
                      ? format(new Date(singleBooking?.startDate?.split("T")[0]), "MMMM dd, yyyy")
                      : singleBooking?.startDate &&
                        singleBooking?.startDate?.split("T")[1].slice(0, 5) +
                          " " +
                          format(new Date(singleBooking?.startDate?.split("T")[0]), "MMMM dd, yyyy")
                  }
                  endPeriod={
                    singleBooking?.type == "monthly"
                      ? format(new Date(singleBooking?.endDate?.split("T")[0]), "MMMM dd, yyyy")
                      : singleBooking?.endDate &&
                        singleBooking?.endDate?.split("T")[1].slice(0, 5) +
                          " " +
                          format(new Date(singleBooking?.endDate?.split("T")[0]), "MMMM dd, yyyy")
                  }
                />
                <RentersAdditionalServices
                  delivery={singleBooking?.moving == true ? "true" : ""}
                  packing={singleBooking?.packing == true ? "true" : ""}
                  pickupAddress={singleBooking?.pickupAddress}
                />
                <RentersPrice listingPrice={singleBooking?.price} />
                <RentersType
                  storageType={getValue({ options: storageTypes, key: singleBooking?.storageListing?.storageType })}
                  storageFloor={getValue({ options: storageFloors, key: singleBooking?.storageListing?.storageFloor })}
                  storageFeatures={getValueArray({
                    options: storageFeatures,
                    key: singleBooking?.storageListing?.storageFeatures,
                  })}
                />
                <RentersAccess
                  storageAccessPeriod={getValue({
                    options: storageAccessPeriods,
                    key: singleBooking?.storageListing?.storageAccessPeriod,
                  })}
                  storageAccessType={getValue({
                    options: storageAccessTypes,
                    key: singleBooking?.storageListing?.storageAccessType,
                  })}
                />
                {/* <RentersAdditionalServices
                  delivery={getService({
                    options: "delivery",
                    key: singleBooking?.storageListing?.services,
                    list: singleBooking,
                    name: "delivery",
                  })}
                  packing={getService({
                    options: "delivery",
                    key: singleBooking?.storageListing?.services,
                    list: singleBooking,
                    name: "packing",
                  })}
                /> */}
              </div>

              {/* <>
                
               
                
              </> */}
            </div>
          </motion.div>
          {singleBooking?.paymentStatus == "successful" ||
          singleBooking?.approvalStatus === "pending" ||
          singleBooking?.approvalStatus === "disapproved" ? (
            ""
          ) : singleBooking?.paymentStatus != "successful" &&
            singleBooking?.approvalStatus === "approved" &&
            singleBooking?.paymentLink ? (
            <div className="mx-auto flex">
              <a className="btn btn-primary mx-auto" href={singleBooking?.paymentLink}>
                Proceed to payment
              </a>
            </div>
          ) : (
            <div className=" flex justify-center gap-3">
              <div
                className={`${paymentLinkLoading && "loading"}  
              border-1 btn mt-2   border-[#15C53B] px-9  text-[#15C53B] hover:border-[#15C53B] hover:bg-[#15C53B] hover:text-black`}
                onClick={createLink}>
                <p> {paymentLinkLoading ? "" : "Complete Booking"}</p>
              </div>
            </div>
          )}
          <MakePaymentModal paymentLink={paymentLink?.paymentLink} />
        </div>
      )}
    </DashboardLayout>
  );
};

export default Manage;
