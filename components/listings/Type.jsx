import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ListingInputContext } from "../../context";
import { getStorageFeatures, getStorageFloors, getStorageTypes } from "../../redux/features/config.slice";
import Accordion from "../shared/Accordion";

const Type = ({ incomplete }) => {
  const { storageTypes, storageFloors, storageFeatures, loading } = useSelector((state) => state.config);
  const { formDetails, setFormDetails, handleChange } = useContext(ListingInputContext);
  const dispatch = useDispatch();

  const handleUpdate = (value) => {
    setFormDetails({ ...formDetails, storageFeatures: [...value]?.map((item) => item.value) });
  };

  useEffect(() => {
    dispatch(getStorageTypes());
    dispatch(getStorageFloors());
    dispatch(getStorageFeatures());
  }, []);

  return (
    <Accordion title="type" incomplete={incomplete}>
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">What kind of storage do you have?</h3>
          <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
            <select
              name="storageType"
              value={formDetails.storageType}
              className="h-full w-full cursor-pointer bg-transparent outline-none"
              onChange={handleChange}>
              <option value="" disabled>
                Select storage type
              </option>
              {storageTypes?.map(({ label, value }, i) => (
                <option value={value} key={i}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className="mb-3">What floor is your storage on?</h3>
          <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
            <select
              name="storageFloor"
              value={formDetails.storageFloor}
              className="h-full w-full cursor-pointer bg-transparent outline-none"
              onChange={handleChange}>
              <option value="" disabled>
                Select storage floor
              </option>
              {storageFloors?.map(({ label, value }, i) => (
                <option value={value} key={i}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative">
          <h3 className="mb-3">What features does your storage have?</h3>
          {/* <div className="items-center border border-[#959595] rounded-lg px-4 py-3"> */}
          <Select
            value={storageFeatures?.filter((item) => formDetails.storageFeatures.includes(item.value))}
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
