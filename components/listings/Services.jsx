import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStorageServices } from "../../redux/features/config.slice";
import { ListingInputContext } from "../../context";
import Accordion from "../shared/Accordion";
import { storageKinds } from "../../helpers/data";

const Services = ({ incomplete }) => {
  const { storageServices } = useSelector((state) => state.config);
  const { formDetails, setFormDetails } = useContext(ListingInputContext);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name } = e.target;
    const { services } = formDetails;
    const isSelected = services?.includes(name);

    setFormDetails({
      ...formDetails,
      services: isSelected ? services.filter((el) => el !== name) : [...services, name],
    });
  };

  useEffect(() => {
    dispatch(getStorageServices());
  }, []);

  return (
    <Accordion title="services" incomplete={incomplete}>
      <div className="space-y-5">
        <div>
          <h3 className="mb-3">Please select the services your listing covers</h3>
          <div className="grid grid-cols-2 space-y-2 md:grid-cols-4">
            {storageServices?.map(({ label }, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={label}
                  checked={formDetails?.services?.includes(label)}
                  onChange={handleChange}
                  className="checkbox checkbox-primary checkbox-xs rounded-sm border-[#767670] outline-none"
                />
                <p className="text-sm capitalize md:text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {formDetails?.services?.includes("delivery") && (
          <>
            <div>
              <h3 className="mb-3">What's your vehicle type?</h3>
              <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
                <select
                  name="vehicleType"
                  value={formDetails.vehicleType}
                  className="h-full w-full cursor-pointer bg-transparent outline-none"
                  onChange={handleChange}>
                  <option value="" disabled>
                    Select vehicle type
                  </option>
                  {storageKinds?.map(({ name, value }, i) => (
                    <option value={value} key={i}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <h3 className="mb-3">What's your cost of moving per KM (£)</h3>
              <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
                <input
                  name="costPerKm"
                  type="tel"
                  value={formDetails.costPerKm}
                  className="h-full w-full bg-transparent outline-none"
                  onChange={handleChange}
                  placeholder="Enter cost per KM"
                />
              </div>
            </div>{" "}
          </>
        )}

        {!formDetails?.services?.includes("packing") && (
          <>
            <div>
              <h3 className="mb-3">What's your packaging size?</h3>
              <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
                <select
                  name="packagingSize"
                  value={formDetails.packagingSize}
                  className="h-full w-full cursor-pointer bg-transparent outline-none"
                  onChange={handleChange}>
                  <option value="" disabled>
                    Select packaging size
                  </option>
                  {storageKinds?.map(({ name, value }, i) => (
                    <option value={value} key={i}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <h3 className="mb-3">What's your cost of packaging per size (£)</h3>
              <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
                <input
                  name="costPerSize"
                  type="tel"
                  value={formDetails.costPerSize}
                  className="h-full w-full bg-transparent outline-none"
                  onChange={handleChange}
                  placeholder="Enter cost per size"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </Accordion>
  );
};

export default Services;
