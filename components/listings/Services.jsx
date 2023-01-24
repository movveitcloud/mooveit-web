import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStorageServices } from "../../redux/features/config.slice";
import { ListingInputContext } from "../../context";
import Accordion from "../shared/Accordion";

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
        <h3 className="">Please select the services your listing covers</h3>

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
    </Accordion>
  );
};

export default Services;
