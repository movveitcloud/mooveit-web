import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListingInputContext } from "../../context";
import { getStorageServices } from "../../redux/features/config.slice";
import Accordion from "../shared/Accordion";
import Switch from "../shared/Switch";

const Services = ({ incomplete }) => {
  const { storageServices } = useSelector((state) => state.config);
  const { formDetails, handleChange, setFormDetails } = useContext(ListingInputContext);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getStorageServices());
  // }, []);

  // const services = storageServices.map(({ label, value }, i) => `${label.toLowerCase()}: ${value}`).join();

  // useEffect(() => {
  //   setFormDetails({ ...formDetails, services });
  // }, []);

  // console.log(formDetails, "h");

  return (
    <Accordion title="services" incomplete={incomplete}>
      <div className="space-y-5">
        <h3 className="">Does your listing cover these services</h3>
        {/* {storageServices.map(({ label }, i) => (
          <div className="flex items-center gap-5">
            <p className="font-semibold capitalize">{label}</p>
            <Switch name={label.toLowerCase()} handleChange={handleChange} formDetails={formDetails} />
          </div>
        ))} */}
        <div className="flex items-center gap-5">
          <p className="font-semibold">Delivery</p>
          <Switch name="delivery" handleChange={handleChange} formDetails={formDetails} />
        </div>
        <div className="flex items-center gap-5">
          <p className="font-semibold">Packing</p>
          <Switch name="packing" handleChange={handleChange} formDetails={formDetails} />
        </div>
      </div>
    </Accordion>
  );
};

export default Services;
