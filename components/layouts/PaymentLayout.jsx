import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { handlePayment } from "../../redux/features/bookings.slice";
import { ChevronDownIcon, XIcon, XCircleIcon, CheckCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";

const PaymentLayout = ({ state }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const paymentId = router.query.paymentId;
  const response = router.query.response;
  const bookingId = router.query.bookingId;

  const { payment, paymentLoading } = useSelector((state) => state.bookings);

  useEffect(() => {
    const payload = {
      paymentId,
      response,
      bookingId,
    };
    if (paymentId && bookingId && response) {
      dispatch(handlePayment({ payload, router, bookingId }));
    }
  }, [paymentId, bookingId, response]);

  // setTimeout(()=>{router.push(`/your-storage/${bookingId}`)},5000)
  return (
    <>
      {/* {paymentLoading ? (
        <div className="relative">
          <div className="flex h-[500px] items-center justify-center">
            <PulseLoader loading={paymentLoading} color="#EDCC5B" />
          </div>
        </div>
      ) : ( */}
      <div className=" h-screen">
        <div className="mx-5 flex items-center justify-between gap-2 p-3 lg:mx-8">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="Mooveit" className="max-h-7" />
            </a>
          </Link>
        </div>
        <div className="  flex h-max flex-col items-center justify-center text-black">
          <div className=" flex w-full flex-col items-center justify-center p-4 py-14 align-middle  text-black md:p-16 md:px-0 ">
            <div
              className={`${
                state === "Successful" ? "bg-[#BBF7D0] text-[#11A131] " : "bg-[#FECACA] text-[#D12C2C]"
              } mb-14  flex h-32 w-32 items-center justify-center rounded-full align-middle`}>
              {state === "Successful" ? <CheckCircleIcon className=" w-20  " /> : <XCircleIcon className=" w-20  " />}
            </div>
            <p className="mb-6  text-xl font-bold md:text-2xl">{`Payment ${state}`}.</p>
            <p className=" mb-6  text-base ">We are redirecting you in few seconds...</p>
            {/* <p className="text-xl  md:text-2xl mb-6">{state} Listing</p> */}
            {/* <p className="text-[#959595] text-base md:text-xl  mb-6">Kindly confirm that you are {stating} this listing</p>
        <button className="w-full rounded-md p-4 text-[14px] md:text-base text-white bg-[#4543A5]">APPROVE</button> */}
            {/* <button onClick={handleClick} className="btn">Back</button> */}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default PaymentLayout;
