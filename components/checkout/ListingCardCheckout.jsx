import { useEffect, useState } from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { formatMoney } from "../../helpers/utils";

const PriceItem = ({ name, amount, total }) => {
  return (
    <div className={`flex justify-between ${total ? "text-lg font-bold" : "text-sm font-[500]"}`}>
      <p>{name}</p>
      <p className={`text-primary`}>{formatMoney(amount)}</p>
    </div>
  );
};

const ListingCardCheckout = ({ item, bookingInfo, setBookingInfo }) => {
  const initialState = { type: "hourly" };
  const [bookingDetails, setbookingDetails] = useState(initialState);
  const { type, time, unitPrice, moving, packing } = bookingInfo;
  console.log(item);
  const period = time;
  const pricePerPeriod = unitPrice;
  const movingCost = item.costPerKm ? item.costPerKm : 0;
  const movingDistance = bookingInfo.pickupDistance ? bookingInfo.pickupDistance : 0;

  const price = pricePerPeriod * period;
  const movingPrice = movingCost * movingDistance;
  const packingPrice = 0;
  const subTotal = price + movingPrice + packingPrice;
  const taxes = (7.5 / 100) * subTotal;
  const total = subTotal + taxes;

  useEffect(() => {
    setBookingInfo({ ...bookingInfo, total });
  }, [total]);

  return (
    <div className="h-full w-full rounded-lg bg-white p-5 transition-shadow duration-500 hover:shadow sm:w-[375px]">
      <div className="h-[200px] w-full">
        <img
          src={item?.media?.[0]}
          alt="Listing"
          className="h-full w-full rounded-lg object-cover transition-all duration-200 hover:shadow-md"
        />
      </div>
      <div className="">
        <h3 className="py-3 font-bold text-[#222222]">{`${item?.storageTitle?.slice(0, 38)}${
          item?.storageTitle?.length > 38 ? "..." : ""
        }`}</h3>
        <p className="flex flex-row items-center gap-2 text-primary">
          <LocationMarkerIcon className="w-4" />
          <span className="tooltip tooltip-primary text-sm uppercase" data-tip={item?.address}>{`${item?.address?.slice(
            0,
            38
          )}${item?.address?.length > 38 ? "..." : ""}`}</span>
        </p>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <p>
            Price <span className="font-normal text-[#959595]">{`(per ${type == "hourly" ? "hour" : "month"})`}</span>
          </p>
          <p className="text-primary">{formatMoney(pricePerPeriod)}</p>
        </div>
        <PriceItem name={`x${period} ${type == "hourly" ? "hour" : "month"}${time > 1 ? "s" : ""}`} amount={price} />
        {moving && <PriceItem name="Moving" amount={movingPrice} />}
        {packing && <PriceItem name="Packing" amount={packingPrice} />}
        <hr />
        <PriceItem name="Subtotal" amount={subTotal} />
        <PriceItem name="Tax" amount={taxes} />
        <hr className="border-dashed" />
        <PriceItem name="Total" amount={bookingInfo.total} total />
      </div>
    </div>
  );
};

export default ListingCardCheckout;
