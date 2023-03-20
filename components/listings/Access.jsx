import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListingInputContext } from "../../context";
import { getStorageAccessPeriods, getStorageAccessTypes } from "../../redux/features/config.slice";
import Accordion from "../shared/Accordion";
import Switch from "../shared/Switch";

const Access = ({ incomplete }) => {
  const { storageAccessTypes, storageAccessPeriods } = useSelector((state) => state.config);
  const { formDetails, handleChange } = useContext(ListingInputContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStorageAccessTypes());
    dispatch(getStorageAccessPeriods());
  }, []);

  return (
    <Accordion title="access" incomplete={incomplete}>
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">When can your customers access your listing??</h3>
          <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
            <select
              name="storageAccessPeriod"
              value={formDetails.storageAccessPeriod}
              className="h-full w-full cursor-pointer bg-transparent outline-none"
              onChange={handleChange}>
              <option value="" disabled>
                Select access
              </option>
              {storageAccessPeriods.map(({ label, value }, i) => (
                <option value={value} key={i}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className="mb-3">How can customers access your listing?</h3>
          <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
            <select
              name="storageAccessType"
              value={formDetails.storageAccessType}
              className="h-full w-full cursor-pointer bg-transparent outline-none"
              onChange={handleChange}>
              <option value="" disabled>
                Select mode
              </option>
              {storageAccessTypes.map(({ label, value }, i) => (
                <option value={value} key={i}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <p className="font-semibold">Parking Permit Required</p>
          <Switch name="packingPermit" handleChange={handleChange} formDetails={formDetails} />
        </div>

        <div>
          <h3 className="mb-3">Parking Instructions</h3>
          <div className="items-center rounded-lg border border-[#959595] px-4 py-3">
            <textarea
              name="packingInstruction"
              value={formDetails.packingInstruction}
              onChange={handleChange}
              placeholder="Include any details your customer has to know about parking here"
              className="w-full rounded outline-none"
              rows={6}
            />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Access;
