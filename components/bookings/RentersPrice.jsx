import React from "react";
import Accordion from "../shared/Accordion";
import { formatMoney } from "../../helpers/utils";

const RentersPrice = () => {
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
    <Accordion title="price">
      <div className="mt-2 space-y-3  ">
        <div className="flex justify-between text-sm">
          <p>
            Price <span className="font-normal text-[#959595]">{`(per ${type == "hourly" ? "hour" : "month"})`}</span>
          </p>
          <p className="text-primary">{formatMoney(pricePerPeriod)}</p>
        </div>
        <PriceItem name={`x${period} ${type == "hourly" ? "hour" : "month"}${time > 1 ? "s" : ""}`} amount={price} />
        {movingPrice > 0 && <PriceItem name="Moving" amount={movingPrice} />}
        {packingPrice > 0 && <PriceItem name="Packing" amount={packingPrice} />}
        <hr />
        <PriceItem name="Subtotal" amount={subTotal} />
        <PriceItem name="Tax" amount={taxes} />
        <hr className="border-dashed" />
        <PriceItem name="Total" amount={total} total />
      </div>
    </Accordion>
  );
};

export default RentersPrice;
