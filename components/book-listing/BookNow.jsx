import React, { useRef, useState } from "react";
import { TruckIcon } from "@heroicons/react/outline";
import BookContainer from "./BookContainer";

const BookNow = () => {
  const initialState = { type: "hourly", startDate: "", endDate: "" };
  const [bookingDetails, setbookingDetails] = useState(initialState);
  const { type, startDate, endDate } = bookingDetails;
  const bookingStartDate = useRef();
  const bookingEndDate = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPeriod({ ...period, [name]: value });
  };

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
          <h3 className="mb-3">Date & Time</h3>
          <div className="flex space-x-4 items-center">
            {/* USE MUI DATE COMPONENT */}
            {/* <div
              className="border border-[#222222] rounded-lg px-4 py-3 w-ful relative cursor-pointer"
              onClick={() => bookingStartDate.current.showPicker()}>
              <input
                ref={bookingStartDate}
                type="datetime-local"
                name="startDate"
                value={bookingDetails.startDate}
                onChange={handleChange}
                placeholder="24/08/22 (4:15pm)"
                className="w-ful bg-transparent h-full outline-none placeholder:text-[#959595] cursor-pointer bg-red-500"
              />
            </div>
            <span>-</span>
            <div
              className="border border-[#222222] rounded-lg px-4 py-3 w-ful relative cursor-pointer"
              onClick={() => bookingEndDate.current.showPicker()}>
              <input
                ref={bookingEndDate}
                type="datetime-local"
                name="endDate"
                value={bookingDetails.endDate}
                onChange={handleChange}
                placeholder="24/08/22 (4:15pm)"
                className="w-ful bg-transparent h-full outline-none placeholder:text-[#959595] cursor-pointer"
              />
            </div> */}
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
