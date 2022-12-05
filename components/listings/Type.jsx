import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ListingInputContext } from "../../context";
import { storageFeatures, storageFloors, storageKinds } from "../../helpers/data";
import { getConfigurations } from "../../redux/features/config.slice";
import Accordion from "../shared/Accordion";

const Type = ({ incomplete }) => {
  const { configurations, loading } = useSelector((state) => state.configurations);
  const { formDetails, setFormDetails, handleChange } = useContext(ListingInputContext);
  const dispatch = useDispatch();

  const handleUpdate = (value) => {
    setFormDetails({ ...formDetails, storageFeatures: [...value]?.map((item) => item.value) });
  };

  // useEffect(() => {
  //   dispatch(getConfigurations());
  // }, []);

  // console.log(configurations?.storageFeatures);

  return (
    <Accordion title="type" incomplete={incomplete}>
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">What kind of storage do you have?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <select
              name="storageType"
              value={formDetails.storageType}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select storage type
              </option>
              {storageKinds.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className="mb-3">What floor is your storage on?</h3>
          <div className="items-center border border-[#959595] rounded-lg px-4 py-3">
            <select
              name="storageFloor"
              value={formDetails.storageFloor}
              className="w-full bg-transparent h-full outline-none cursor-pointer"
              onChange={handleChange}>
              <option value="" disabled>
                Select storage floor
              </option>
              {storageFloors.map(({ name, value }, i) => (
                <option value={value} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative">
          <h3 className="mb-3">What features does your storage have?</h3>
          {/* <div className="items-center border border-[#959595] rounded-lg px-4 py-3"> */}
          <Select
            value={storageFeatures.filter((item) => formDetails.storageFeatures.includes(item.value))}
            onChange={(value) => handleUpdate(value)}
            options={storageFeatures}
            isMulti
            menuPosition="fixed"
            className="text-black"
            placeholder="Select storage features"
          />
          {/* </div> */}
        </div>
      </div>
    </Accordion>
  );
};

export default Type;
