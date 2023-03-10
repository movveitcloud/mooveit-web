import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { disapproveBooking, getSingleBooking } from "../../redux/features/bookings.slice";

const DisapproveBookingModal = ({ id,singleBooking }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const closeModal = useRef(null);
  const { bookings, disapproveBookingLoading } = useSelector((state) => state.bookings);
  const handleDisapprove = () => {
    const payload = { approvalStatus: "disapproved" };
    //console.log(payload);
    dispatch(disapproveBooking({ payload, id, router, closeModal }));
  };

  // useEffect(() => {
  //   if (id) {
  //     dispatch(getSingleBooking({ id }));
  //   }
  // }, [id]);

  return (
    <>
      <input type="checkbox" id="deny" className=" modal-toggle " />
      <label htmlFor="deny" className=" modal ">
        <label className=" modal-box relative z-20 w-[80%] max-w-[500px] rounded-xl py-10 md:w-[50%]">
          <div className="mx-auto w-[80%] text-left">
            <div className="mb-4 flex w-full justify-center">
              <label className="inline-block text-center">{`Are you sure you want to ${
                singleBooking?.approvalStatus === "approved" ? "cancel" : "deny"
              } this booking?`}</label>
            </div>

            <div className="flex justify-center text-sm">
              <div className="flex gap-4">
                <label className="modal-button btn btn-primary w-[100px]" htmlFor="deny">
                  {` ${singleBooking?.approvalStatus === "approved" ? "Back" : "Cancel"} `}
                </label>
                <p
                  className={`${
                    disapproveBookingLoading && "loading"
                  } btn w-[100px] border-[#ef4444da] text-black hover:border-[#ef4444da] hover:bg-[#ef4444da]`}
                  onClick={handleDisapprove}>
                  {disapproveBookingLoading ? "" : singleBooking?.approvalStatus === "approved" ? "Cancel" : "Deny"}
                </p>
              </div>
            </div>
          </div>
        </label>
      </label>
      <label htmlFor="deny" className="hidden" ref={closeModal} />
    </>
  );
};

export default DisapproveBookingModal;
