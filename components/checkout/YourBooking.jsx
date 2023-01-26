import { useEffect, useRef, useState } from "react";
import { CalendarIcon, LocationMarkerIcon, TruckIcon } from "@heroicons/react/outline";
import BookContainer from "../book-listing/BookContainer";
import { useRouter } from "next/router";
import { differenceInHours, differenceInMonths, format } from "date-fns";
import Switch from "../shared/Switch";

const YourBooking = ({ bookingInfo, setBookingInfo, handleServiceChange }) => {
  const router = useRouter();
  const today = new Date();
  const min = format(new Date(), "yyyy-MM-dd hh:mm");

  const initialState = {
    type: "hourly",
    startDate: "",
    endDate: "",
    pickupAddress: "",
    moving: false,
    packing: false,
    consent: false,
  };
  const [bookingDetails, setBookingDetails] = useState(initialState);
  const [pageReady, setPageReady] = useState(false);
  const { type, startDate, endDate } = bookingDetails;
  const bookingStartDate = useRef();
  const bookingEndDate = useRef();

  const totalHours = differenceInHours(new Date(endDate), new Date(startDate));
  const totalMonths = differenceInMonths(new Date(endDate), new Date(startDate)) + 1;
  const isHourly = type == "hourly" ? true : false;
  const time = isHourly ? totalHours : totalMonths;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setBookingDetails({ ...bookingDetails, [name]: val });
  };

  useEffect(() => {
    setBookingDetails({ ...bookingDetails, ...JSON.parse(sessionStorage.getItem("booking")) });
    setPageReady(true);
  }, []);

  useEffect(() => {
    setBookingInfo({ ...bookingInfo, time, pickupAddress: bookingDetails.pickupAddress });
  }, [bookingDetails]);

  console.log(bookingInfo);

  return (
    pageReady && (
      <BookContainer>
        <div className="space-y-5 md:space-y-8">
          <h2 className="font-semibold capitalize">Your Booking</h2>

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

          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center gap-2 text-[#107E7E]">
              <span className="rounded-full bg-accent p-2">
                <TruckIcon className="w-6 text-primary" />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-[#12181F]">Moving</h2>
                <p className="text-[12px] text-[#959595]">
                  Moving This listing offers moving services for an additional cost
                </p>
              </div>
            </div>

            <Switch name="moving" handleChange={handleServiceChange} formDetails={bookingInfo} />
          </div>

          {bookingInfo?.moving && (
            <div className="flex flex-row items-center gap-4">
              <div className="flex min-w-fit items-center gap-2">
                <span className="rounded-full bg-accent p-2">
                  <LocationMarkerIcon className="w-6 text-primary" />
                </span>
                <h2 className="text-sm font-semibold text-[#12181F]">Pickup Address</h2>
              </div>
              <input
                type="text"
                name="pickupAddress"
                value={bookingDetails.pickupAddress}
                onChange={handleChange}
                className="w-full rounded border border-[#959595] p-2 focus:border-primary"
                placeholder="Enter pickup address"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center gap-2 text-[#107E7E]">
              <span className="rounded-full bg-accent p-2">
                <TruckIcon className="w-6 text-primary" />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-[#12181F]">Packing</h2>
                <p className="text-[12px] text-[#959595]">
                  Packing This listing offers packing services for an additional cost
                </p>
              </div>
            </div>

            <Switch name="packing" handleChange={handleServiceChange} formDetails={bookingInfo} />
          </div>

          <div className="flex items-center gap-5">
            <p className="text-[#959595]">
              I agree with MooveIT's{" "}
              <a href="#" target="_blank" rel="noreferrer" className="font-semibold text-primary">
                terms & conditions
              </a>
            </p>
            <Switch name="consent" handleChange={handleServiceChange} formDetails={bookingInfo} />
          </div>

          <button
            className={`btn btn-primary flex w-full gap-2 text-sm normal-case disabled:btn-accent ${
              true ? "btn-disabled bg-primary bg-opacity-50 text-[#ccc]" : ""
            }`}
            // onClick={handleBooking}
          >
            <TruckIcon className="w-4" /> Book Now
          </button>
        </div>
      </BookContainer>
    )
  );
};

export default YourBooking;
