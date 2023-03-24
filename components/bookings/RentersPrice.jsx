import React from "react";
import Accordion from "../shared/Accordion";
import { formatMoney } from "../../helpers/utils";
import { CreditCardIcon } from "@heroicons/react/outline";

const RentersPrice = ({ listingPrice }) => {
  const PriceItem = ({ name, amount, total }) => {
    return (
      <div className={`flex justify-between ${total ? "text-lg font-bold" : "text-sm font-[500]"}`}>
        <p>{name}</p>
        <p className={`text-primary`}>{formatMoney(amount)}</p>
      </div>
    );
  };
  const time = 20;
  const type = "hourly";
  const period = time;
  const pricePerPeriod = 30;

  const price = pricePerPeriod * period;
  const movingPrice = 0;
  const packingPrice = 0;
  const subTotal = price + movingPrice + packingPrice;
  const taxes = (7.5 / 100) * subTotal;
  const total = subTotal + taxes;
  return (
    <>
      <div className="mt-2 flex cursor-pointer justify-between  px-4  text-[#222222] md:px-6">
        <h2 className="text-left text-sm font-semibold capitalize md:text-base">Price</h2>
      </div>
      <div className=" flex cursor-pointer justify-between px-4 py-4 text-[#222222] md:px-6">
        <div className="   ">
          <div className="flex items-center justify-between text-sm">
            <span className="flex h-10 w-10 items-center  justify-center rounded-full ">
              <div className="mr-2 flex h-8 w-8 items-center  justify-center rounded-full bg-white font-bold ">
                <CreditCardIcon className="w-4" />
              </div>
            </span>
            <p className="text-primary">{formatMoney(listingPrice)}</p>
          </div>
          {/* <PriceItem name={`x${period} ${type == "hourly" ? "hour" : "month"}${time > 1 ? "s" : ""}`} amount={price} />
        {movingPrice > 0 && <PriceItem name="Moving" amount={movingPrice} />}
        {packingPrice > 0 && <PriceItem name="Packing" amount={packingPrice} />}
        <hr />
        <PriceItem name="Subtotal" amount={subTotal} />
        <PriceItem name="Tax" amount={taxes} />
        <hr className="border-dashed" />
        <PriceItem name="Total" amount={total} total /> */}
        </div>
      </div>
    </>
  );
};

export default RentersPrice;
