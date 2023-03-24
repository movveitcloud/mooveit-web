import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import { getBooking, getSingleBooking, approveBooking } from "../../redux/features/bookings.slice";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { getService } from "../../helpers/utils";
import {
  DashboardLayout,
  RentersInformation,
  RentersBookingPeriod,
  RentersAdditionalServices,
  RentersPrice,
  DisapproveBookingModal,
} from "../../components";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Manage = () => {
  const router = useRouter();
  const query = router.query.id;
  const id = query;
  const { bookings, singleBooking, singleBookingLoading, approveBookingLoading } = useSelector(
    (state) => state.bookings
  );

  const dispatch = useDispatch();
  const approve = () => {
    const payload = { approvalStatus: "approved" };
    //console.log(payload);
    dispatch(approveBooking({ payload, id: query, router }));
  };

  const Back = () => {
    router.push("/bookings");
  };

  useEffect(() => {
    if (query) {
      dispatch(getSingleBooking({ id }));
    }
  }, [query]);
  //console.log(singleBooking);
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
                  {" "}
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
                      ? singleBooking?.startDate?.split("T")[0]
                      : singleBooking?.startDate?.split("T")[1].slice(0, 5) +
                        " " +
                        singleBooking?.startDate?.split("T")[0]
                  }
                  endPeriod={
                    singleBooking?.type == "monthly"
                      ? singleBooking?.endDate?.split("T")[0]
                      : singleBooking?.endDate?.split("T")[1].slice(0, 5) + " " + singleBooking?.endDate?.split("T")[0]
                  }
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
                 <RentersAdditionalServices
                  delivery={singleBooking?.moving==true?"true":""
                  }
                  packing={singleBooking?.packing==true?"true":""
                }
                />
                <RentersPrice listingPrice={singleBooking?.price} />
              </>

              {singleBooking.approvalStatus === "pending" ? (
                <div className=" flex justify-center gap-3">
                  <div
                    className={`${approveBookingLoading && "loading"}  
              border-1 btn  mt-2 border-[#15C53B] px-9 text-[#15C53B] hover:border-[#15C53B] hover:bg-[#15C53B] hover:text-black`}
                    onClick={approve}>
                    <p>{approveBookingLoading ? "" : "APPROVE REQUEST"}</p>
                  </div>
                  <label
                    htmlFor="deny"
                    className="border-1 btn  mt-2 border-[#F12C2C] px-9 text-[#F12C2C] hover:border-[#F12C2C] hover:bg-[#F12C2C] hover:text-black">
                    <p>DENY REQUEST</p>
                  </label>
                </div>
              ) : singleBooking?.paymentStatus == "successful" ? (
                ""
              ) : singleBooking?.approvalStatus === "approved" ? (
                <div className=" flex justify-center gap-3">
                  <label
                    htmlFor="deny"
                    className="border-1 btn  mt-2 border-[#15C53B] px-9 text-[#15C53B] hover:border-[#15C53B] hover:bg-[#15C53B] hover:text-black">
                    <p>CANCEL BOOKING</p>
                  </label>
                </div>
              ) : (
                <div className=" flex justify-center gap-3">
                  <div
                    className={`${approveBookingLoading && "loading"}  
          border-1 btn  mt-2 border-[#15C53B] px-9 text-[#15C53B] hover:border-[#15C53B] hover:bg-[#15C53B] hover:text-black`}
                    onClick={approve}>
                    <p>{approveBookingLoading ? "" : "APPROVE REQUEST"}</p>
                  </div>
                </div>
              )}
            </div>
            <DisapproveBookingModal id={singleBooking?._id} singleBooking={singleBooking} />
          </motion.div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Manage;
