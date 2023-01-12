import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListingInputContext } from "../../context";
import { arrivalNoticeOpts, spaceDuration } from "../../helpers/data";
import { getNoticePeriods, getShortestPeriods } from "../../redux/features/config.slice";
import Accordion from "../shared/Accordion";

const BookingDetails = ({ incomplete }) => {
  const { shortestPeriods, noticePeriods } = useSelector((state) => state.config);
  const { formDetails, handleChange } = useContext(ListingInputContext);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getShortestPeriods());
  //   dispatch(getNoticePeriods());
  // }, []);

  return (
    <Accordion title="booking details" incomplete={incomplete}>
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">What's the shortest period you're willing to rent a space for?</h3>
          <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
            <select
              name="bookingDuration"
              value={formDetails.bookingDuration}
              className="h-full w-full cursor-pointer bg-transparent outline-none"
              onChange={handleChange}>
              <option value="" disabled>
                Select duration
              </option>
              {shortestPeriods.map(({ label, value }, i) => (
                <option value={value} key={i}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className="mb-3">How much notice do you need before a customer arrives?</h3>
          <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
            <select
              name="bookingNotice"
              value={formDetails.bookingNotice}
              className="h-full w-full cursor-pointer bg-transparent outline-none"
              onChange={handleChange}>
              <option value="" disabled>
                Select notice period
              </option>
              {noticePeriods.map(({ label, value }, i) => (
                <option value={value} key={i}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default BookingDetails;
