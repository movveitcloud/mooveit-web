import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListingInputContext } from "../../context";
import { getStorageSizes } from "../../redux/features/config.slice";
import Accordion from "../shared/Accordion";

const Dimensions = ({ incomplete }) => {
  const { storageSizes } = useSelector((state) => state.config);
  const { formDetails, setFormDetails } = useContext(ListingInputContext);
  const dispatch = useDispatch();
  const { storageNumber } = formDetails;

  const handleCount = (type) => {
    if (type === "increase") {
      setFormDetails({ ...formDetails, storageNumber: storageNumber + 1 });
    }
    if (type === "reduce" && storageNumber > 1) {
      setFormDetails({ ...formDetails, storageNumber: storageNumber - 1 });
    }
  };

  useEffect(() => {
    dispatch(getStorageSizes());
  }, []);

  return (
    <Accordion title="Dimensions" incomplete={incomplete}>
      <div className="space-y-6">
        <div className="mb-5">
          <h3 className="mb-3">How large is your storage?</h3>
          <div className="mb-5 items-center rounded-lg border border-[#959595] px-4 py-3">
            <select
              name="storageSize"
              value={formDetails.storageSize.name}
              className="h-full w-full cursor-pointer bg-transparent outline-none"
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  storageSize: { name: e.target.value },
                })
              }>
              <option value="" disabled>
                Select storage size
              </option>
              {storageSizes.map(({ label, value }, i) => (
                <option value={value} key={i}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-between">
          <h3 className="my-3">How many storage spaces of this size & type do you have?</h3>
          <div className="flex items-center ">
            <span
              onClick={() => handleCount("reduce")}
              className="flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded-sm bg-[#D5D5D5] text-center text-white">
              -
            </span>
            <span className="ml-3 flex items-center rounded-[5px] border border-[#959595] px-4 py-2 text-[.8rem] text-[#959595]">
              {storageNumber}
            </span>
            <span
              onClick={() => handleCount("increase")}
              className="ml-3 flex h-5 w-5 cursor-pointer select-none items-center justify-center rounded-sm bg-primary p-[3px] text-center text-white">
              +
            </span>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Dimensions;
