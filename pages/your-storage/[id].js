import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { getBooking, getSingleBooking, approveBooking, createPaymentLink } from "../../redux/features/bookings.slice";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../../helpers/utils";
import Link from "next/link";
import {
  DashboardLayout,
  RentersInformation,
  RentersBookingPeriod,
  RentersAdditionalServices,
  RentersPrice,
  DisapproveBookingModal,
  MakePaymentModal,
} from "../../components";
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
      //console.log(payload);
      dispatch(createPaymentLink({ payload, router, closeModal, refreshPage: refreshPage }));
    }
  };
  //console.log(singleBooking?.paymentLink);
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
  //console.log(singleBooking, "single");
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
              <>
                <RentersInformation
                  firstName={singleBooking?.user?.firstName}
                  lastName={singleBooking.user?.lastName}
                  profilePicture={singleBooking.user?.profilePicture}
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
                />
                <RentersPrice listingPrice={singleBooking?.price} />
              </>
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
                <p> {paymentLinkLoading ? "" : "CREATE PAYMENT LINK"}</p>
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