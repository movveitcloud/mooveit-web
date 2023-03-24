import React, { useRef, useState } from "react";
import { CalendarIcon, TruckIcon } from "@heroicons/react/outline";
import { differenceInHours, differenceInMonths, format } from "date-fns";
import BookContainer from "./BookContainer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { formatMoney } from "../../helpers/utils";

const BookNow = () => {
  const router = useRouter();
  const today = new Date();
  const min = format(new Date(), "yyyy-MM-dd hh:mm");
  const initialState = { type: "hourly", startDate: "", endDate: "" };

  const [bookingDetails, setbookingDetails] = useState(initialState);
  const { userListing } = useSelector((state) => state.listing);
  const { type, startDate, endDate } = bookingDetails;
  const { monthlyRate, hourlyRate } = userListing;
  const bookingStartDate = useRef();
  const bookingEndDate = useRef();
  const preview = userListing?.status !== "approved";
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setbookingDetails({ ...bookingDetails, [name]: value });
  };

  const totalHours = differenceInHours(new Date(endDate), new Date(startDate));
  const totalMonths = differenceInMonths(new Date(endDate), new Date(startDate)) + 1;

  // const totalHours = (date1, date2) => {
  //   let diff = date2.getTime() - date1.getTime();
  //   return diff;
  // };

  const isHourly = type == "hourly" ? true : false;

  const price = isHourly ? hourlyRate : monthlyRate;
  const time = isHourly ? totalHours : totalMonths;
  const total = price * time;

  const disabled=!total
  

  const handleBooking = () => {
    const payload = {
      listingId: userListing?._id,
      startDate,
      endDate,
      totalPrice: total,
      type,
      unitPrice: price,
      time,
    };
    sessionStorage.setItem("booking", JSON.stringify({ ...payload }));
    router.push(`/checkout/${userListing?._id}`);
  };

  return (
    <BookContainer>
      <div className="space-y-5 md:space-y-6">
        <h2 className="font-semibold capitalize">Book Now</h2>
        <div className="flex space-x-4">
          <button
            className={`rounded-lg border py-2 px-6 text-xs uppercase transition-all duration-300 md:text-sm ${
              type == "hourly" ? "border-primary bg-primary text-white" : "border-[#AAAAAA} text-[#AAAAAA]"
            }`}
            onClick={() => setbookingDetails({ ...bookingDetails, type: "hourly" })}>
            Hourly
          </button>
          <button
            className={`rounded-lg border py-2 px-6 text-xs uppercase transition-all duration-300 md:text-sm ${
              type == "monthly" ? "border-primary bg-primary text-white" : "border-[#AAAAAA} text-[#AAAAAA]"
            }`}
            onClick={() => setbookingDetails({ ...bookingDetails, type: "monthly" })}>
            Monthly
          </button>
        </div>

        <div>
          <p className="mb-3">Date & Time</p>
          <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-4 md:space-y-0">
            <div
              className="relative flex w-full cursor-pointer space-x-2 rounded-lg border-[0.5px] border-[#222222] p-2"
              onClick={() => bookingStartDate.current.showPicker()}>
              <CalendarIcon className="w-3 text-primary md:w-4" />
              <p className="text-xs text-[#959595] md:text-sm">
                {startDate && format(new Date(startDate), isHourly ? "yyyy-MM-dd (h:mmaaa)" : "MMMM, yyyy")}
              </p>
              <div className="left-500 w-ful invisible absolute cursor-pointer rounded-lg border border-[#222222] px-4 py-3">
                <input
                  ref={bookingStartDate}
                  type={isHourly ? "datetime-local" : "month"}
                  name="startDate"
                  min={min}
                  value={bookingDetails.startDate}
                  onChange={handleChange}
                  className="h-full w-full cursor-pointer bg-transparent outline-none placeholder:text-[#959595]"
                />
              </div>
            </div>
            <p className="text-center">-</p>
            <div
              className="relative flex w-full cursor-pointer space-x-2 rounded-lg border-[0.5px] border-[#222222] p-2"
              onClick={() => bookingEndDate.current.showPicker()}>
              <CalendarIcon className="w-3 text-primary md:w-4" />
              <p className="text-xs text-[#959595] md:text-sm">
                {" "}
                {endDate && format(new Date(endDate), isHourly ? "yyyy-MM-dd (h:mmaaa)" : "MMMM, yyyy")}
              </p>
              <div className="left-500 w-ful invisible absolute cursor-pointer rounded-lg border border-[#222222] px-4 py-3">
                <input
                  ref={bookingEndDate}
                  type={isHourly ? "datetime-local" : "month"}
                  name="endDate"
                  min={min}
                  value={bookingDetails.endDate}
                  onChange={handleChange}
                  className="h-full w-full cursor-pointer bg-transparent outline-none placeholder:text-[#959595]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-sm">
          <p className="font-semibold">
            Price <span className="font-normal text-[#959595]">{`(per ${type == "hourly" ? "hour" : "month"})`}</span>
          </p>
          <p className="text-xl">{formatMoney(price)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="font-semibold">
            Total{" "}
            {time ? (
              <span className="font-normal text-[#959595]">{`(${formatMoney(price)} x ${time}${
                type == "hourly" ? "hour" : "month"
              }${time > 1 ? "s" : ""})`}</span>
            ) : (
              ""
            )}
          </p>
          <p className="text-xl font-bold text-primary">{startDate && endDate ? formatMoney(total) : "- -"}</p>
        </div>
        <button
         disabled={disabled}
          className={`btn btn-primary flex w-full gap-2 text-sm normal-case disabled:btn-accent ${
            preview ? "btn-disabled bg-primary bg-opacity-50 text-[#ccc]" : ""
          }`}
          onClick={handleBooking}>
          <TruckIcon className="w-4" /> Book Now
        </button>
      </div>
    </BookContainer>
  );
};

export default BookNow;
