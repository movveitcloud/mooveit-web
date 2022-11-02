import React, { useRef, useState } from "react";
import { CalendarIcon, TruckIcon } from "@heroicons/react/outline";
import { format } from "date-fns";
import BookContainer from "./BookContainer";

const BookNow = () => {
  const today = new Date();
  const min = format(new Date(), "yyyy-MM-dd hh:mm");
  const initialState = { type: "hourly", startDate: today, endDate: today };
  const [bookingDetails, setbookingDetails] = useState(initialState);
  const { type, startDate, endDate } = bookingDetails;
  const bookingStartDate = useRef();
  const bookingEndDate = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setbookingDetails({ ...bookingDetails, [name]: value });
  };

  // const totalHours = (date1, date2) => {
  //   let diff = date2.getTime() - date1.getTime();
  //   return diff;
  // };

  return (
    <BookContainer>
      <div className="space-y-5 md:space-y-6">
        <h2 className="font-semibold capitalize">Book Now</h2>
        <div className="flex space-x-4">
          <button
            className={`py-2 px-6 rounded-lg text-xs md:text-sm uppercase transition-all duration-300 border ${
              type == "hourly" ? "bg-primary text-white border-primary" : "text-[#AAAAAA] border-[#AAAAAA}"
            }`}
            onClick={() => setbookingDetails({ ...bookingDetails, type: "hourly" })}>
            Hourly
          </button>
          <button
            className={`py-2 px-6 rounded-lg text-xs md:text-sm uppercase transition-all duration-300 border ${
              type == "monthly" ? "bg-primary text-white border-primary" : "text-[#AAAAAA] border-[#AAAAAA}"
            }`}
            onClick={() => setbookingDetails({ ...bookingDetails, type: "monthly" })}>
            Monthly
          </button>
        </div>

        <div>
          <p className="mb-3">Date & Time</p>
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0 items-center">
            <div
              className="w-full flex space-x-2 border-[0.5px] border-[#222222] rounded-lg p-2 cursor-pointer relative"
              onClick={() => bookingStartDate.current.showPicker()}>
              <CalendarIcon className="w-3 md:w-4 text-primary" />
              <p className="text-[#959595] text-xs md:text-sm">
                {startDate && format(new Date(startDate), "yyyy-MM-dd (h:mmaaa)")}
              </p>
              <div className="invisible absolute left-500 border border-[#222222] rounded-lg px-4 py-3 w-ful cursor-pointer">
                <input
                  ref={bookingStartDate}
                  type="datetime-local"
                  name="startDate"
                  min={min}
                  value={bookingDetails.startDate}
                  onChange={handleChange}
                  className="w-full bg-transparent h-full outline-none placeholder:text-[#959595] cursor-pointer"
                />
              </div>
            </div>
            <p className="text-center">-</p>
            <div
              className="w-full flex space-x-2 border-[0.5px] border-[#222222] rounded-lg p-2 cursor-pointer relative"
              onClick={() => bookingEndDate.current.showPicker()}>
              <CalendarIcon className="w-3 md:w-4 text-primary" />
              <p className="text-[#959595] text-xs md:text-sm">
                {" "}
                {endDate ? format(new Date(endDate), "yyyy-MM-dd (h:mmaaa)") : "yyyy-mm-dd"}
              </p>
              <div className="invisible absolute left-500 border border-[#222222] rounded-lg px-4 py-3 w-ful cursor-pointer">
                <input
                  ref={bookingEndDate}
                  type="datetime-local"
                  name="endDate"
                  min={min}
                  value={bookingDetails.endDate}
                  onChange={handleChange}
                  className="w-full bg-transparent h-full outline-none placeholder:text-[#959595] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-sm">
          <p className="font-semibold">
            Price <span className="text-[#959595] font-normal">(per hour)</span>
          </p>
          <p className="">- -</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="font-semibold">Total</p>
          <p className="text-xl text-primary">- -</p>
        </div>
        <button className="btn btn-primary w-full flex gap-2 text-sm normal-case">
          <TruckIcon className="w-4" /> Book Now
        </button>
      </div>
    </BookContainer>
  );
};

export default BookNow;
