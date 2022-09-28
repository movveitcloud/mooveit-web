import React, { useRef } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { formatMoney } from "../../helpers/utils";
import Accordion from "../shared/Accordion";

const Pricing = ({ formDetails, handleChange }) => {
  const elastic = useRef(null);
  const custom = useRef(null);
  const isElastic = formDetails?.priceType == "elastic";
  const isCustom = formDetails?.priceType == "custom";

  return (
    <Accordion title="Pricing">
      <div className="flex gap-8" data-tip={name}>
        <div
          className={`p-6 rounded rounded-tr-2xl w-full border border-[#e2e2e2] ${
            isElastic ? "bg-primary text-white" : "bg-none"
          }`}
          onClick={() => elastic.current.click()}>
          <div className="flex justify-between items-center gap-3 mb-6">
            <h2 className="font-semibold text-lg">Elastic</h2>
            <input
              type="radio"
              name="priceType"
              ref={elastic}
              onChange={handleChange}
              value="elastic"
              disabled
              className={`radio radio-sm ${isCustom && "radio-primary"}`}
            />
          </div>
          <div className={`${isCustom && "text-[#959595]"}`}>
            <p>Our AI helps you generate an estimate based on your storage's attributes & features.</p>
            <p
              className={`px-10 py-2 text-sm text-center w-full rounded my-6 ${
                isElastic ? "bg-white text-primary " : "bg-[#eeeeee] "
              }`}>
              MooveIT charges 20% on all earnings
            </p>
            <h3 className="uppercase text-sm mb-2">You Earn</h3>
            <div className="flex gap-4 text-sm text-center">
              <span className={`${isElastic ? "bg-[#FFFFFF29]" : "bg-[#eeeeee]"} p-2 w-full rounded`}>
                {formatMoney(100)}/mon
              </span>
              <span className={`${isElastic ? "bg-[#FFFFFF29]" : "bg-[#eeeeee]"} p-2 w-full rounded`}>
                {formatMoney(10)}/day
              </span>
              <span className={`${isElastic ? "bg-[#FFFFFF29]" : "bg-[#eeeeee]"} p-2 w-full rounded`}>
                {formatMoney(2)}/hr
              </span>
            </div>
          </div>
        </div>

        <div
          className={`p-6 rounded rounded-tr-2xl w-full cursor-pointer border border-primary ${
            isCustom ? "bg-primary text-white" : "bg-none"
          }`}
          onClick={() => custom.current.click()}>
          <div className="flex justify-between items-center gap-3">
            <h2 className="font-semibold text-lg">Set Pricing</h2>
            <input
              type="radio"
              name="priceType"
              ref={custom}
              onChange={handleChange}
              value="custom"
              defaultChecked
              className={`radio radio-sm ${isElastic && "radio-primary"}`}
            />
          </div>
          <div className={`${isElastic && "text-[#959595]"}`}>
            <p className="my-6">Manually input your pricing rate.</p>

            <div className="mb-3">
              <h3 className="uppercase text-sm mb-2">Monthly rate</h3>
              <div className="flex gap-2 items-center">
                <span
                  className={`p-1 h-fit rounded ${isCustom ? "bg-white" : "bg-[#eeeeee]"}`}
                  onClick={() => console.log("okkkk")}>
                  <MinusIcon className={` w-2 rounded ${isCustom ? "text-primary" : "text-white"}`} />
                </span>
                <span className={`text-sm p-2 rounded ${isCustom ? "bg-[#FFFFFF29]" : "bg-[#eeeeee]"}`}>
                  £{" "}
                  <input
                    type="text"
                    name="monthlyRate"
                    value={formDetails?.monthlyRate}
                    onChange={handleChange}
                    className="bg-transparent w-[50px] outline-none"
                    disabled={isElastic}
                  />
                </span>
                <span className={`p-1 h-fit rounded ${isCustom ? "bg-white" : "bg-[#eeeeee]"}`}>
                  <PlusIcon className={`w-2 rounded ${isCustom ? "text-primary" : "text-white"}`} />
                </span>
              </div>
            </div>

            <div>
              <h3 className="uppercase text-sm mb-2">Hourly rate</h3>
              <div className="flex gap-2 items-center">
                <span
                  className={`p-1 h-fit rounded ${isCustom ? "bg-white" : "bg-[#eeeeee]"}`}
                  onClick={() => console.log("okkkk")}>
                  <MinusIcon className={` w-2 rounded ${isCustom ? "text-primary" : "text-white"}`} />
                </span>
                <span className={`text-sm p-2 rounded ${isCustom ? "bg-[#FFFFFF29]" : "bg-[#eeeeee]"}`}>
                  £{" "}
                  <input
                    type="text"
                    name="hourlyRate"
                    value={formDetails?.hourlyRate}
                    onChange={handleChange}
                    className="bg-transparent w-[50px] outline-none"
                    disabled={isElastic}
                  />
                </span>
                <span className={`p-1 h-fit rounded ${isCustom ? "bg-white" : "bg-[#eeeeee]"}`}>
                  <PlusIcon className={`w-2 rounded ${isCustom ? "text-primary" : "text-white"}`} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Pricing;
