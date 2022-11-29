import { useState } from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { formatMoney } from "../../helpers/utils";

const PriceItem = ({ name, price }) => {
  return (
    <div className="flex justify-between text-sm">
      <p className="font-semibold">{name}</p>
      <p className="text-lg text-primary">{formatMoney(price)}</p>
    </div>
  );
};

const ListingCardCheckout = ({ item }) => {
  const initialState = { type: "hourly" };
  const [bookingDetails, setbookingDetails] = useState(initialState);
  const { type } = bookingDetails;

  return (
    <div className="bg-white w-full sm:w-[375px] rounded-lg p-5 hover:shadow transition-shadow duration-500 h-full">
      <div className="w-full h-[200px]">
        <img
          src={item?.media?.[0]}
          alt="Listing"
          className="object-cover w-full h-full rounded-lg hover:shadow-md transition-all duration-200"
        />
      </div>
      <div className="">
        <h3 className="text-[#222222] font-bold py-3">{`${item?.storageTitle?.slice(0, 38)}${
          item?.storageTitle?.length > 38 ? "..." : ""
        }`}</h3>
        <p className="flex flex-row items-center gap-2 text-primary">
          <LocationMarkerIcon className="w-4" />
          <span className="text-sm uppercase tooltip tooltip-primary" data-tip={item?.address}>{`${item?.address?.slice(
            0,
            38
          )}${item?.address?.length > 38 ? "..." : ""}`}</span>
        </p>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <p className="font-semibold">
            Price <span className="text-[#959595] font-normal">{`(per ${type == "hourly" ? "hour" : "month"})`}</span>
          </p>
          <p className="text-lg text-primary">{formatMoney(4.2)}</p>
        </div>
        <PriceItem name="x12 hours" price={340} />
        <PriceItem name="Moving" price={96.2} />

        <hr className="border-dashed" />

        <PriceItem name="Subtotal" price={300} />
        <PriceItem name="Tax" price={24} />
        <PriceItem name="Total" price={200} />
      </div>
    </div>
  );
};

export default ListingCardCheckout;
