import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { disapproveBooking, getSingleBooking } from "../../redux/features/bookings.slice";
import Link from "next/link";

const MakePaymentModal = ({ paymentLink }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const closeModal = useRef(null);
  const { bookings, disapproveBookingLoading, singleBooking } = useSelector((state) => state.bookings);
  const handlePayment = () => {
    const payload = { approvalStatus: "disapproved" };
    //console.log(payload);
    dispatch(disapproveBooking({ payload, id, router, closeModal }));
  };

  //   useEffect(() => {
  //     if (id) {
  //       dispatch(getSingleBooking({ id }));
  //     }
  //   }, [id]);

  return (
    <>
      <input type="checkbox" id="pay" className=" modal-toggle " />
      <label htmlFor="pay" className=" modal ">
        <label className=" modal-box relative z-20 w-[80%] max-w-[500px] rounded-xl py-10 md:w-[50%]">
          <div className="mx-auto w-[80%] text-left">
            <div className="mb-4 flex w-full justify-center">
              <label className="inline-block text-center">Link created successfully</label>
            </div>

            <div className="flex justify-center text-sm">
              <div className="flex gap-4">
                <label className="modal-button btn btn-primary w-[100px]" htmlFor="pay">
                  Back
                </label>
                <Link href={paymentLink ? paymentLink : "#"}>
                  <p className="btn w-[100px] border-[#ef4444da] text-black hover:border-[#ef4444da] hover:bg-[#ef4444da]">
                    Pay
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </label>
      </label>
      <label htmlFor="pay" className="hidden" ref={closeModal} />
    </>
  );
};

export default MakePaymentModal;
