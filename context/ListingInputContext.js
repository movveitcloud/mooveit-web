import { createContext, useState } from "react";

const ListingInputContext = createContext();

const initialState = {
  //Basic Information Stepper
  address: "",
  storageType: "",
  storageFloor: "",
  storageFeatures: [],
  delivery: false,
  packing: false,

  //Space Details Stepper
  streetView: false,
  storageSize: "",
  storageNumber: 1,
  media: [],
  storageTitle: "",
  description: "",
  calendar: "",

  //Availability Stepper
  unavailabilityReason: "",
  unavailabilityDate: "",
  whenAccessListing: "",
  howAccessListing: "",
  packingPermit: true,
  packingInstructions: "",
  rentDuration: "",
  arrivalNotice: "",

  //Pricing Stepper
  priceType: "custom",
  monthlyRate: "100",
  hourlyRate: "2.40",
  consent: false,
};

export const ListingInputContextProvider = ({ children }) => {
  const [formDetails, setFormDetails] = useState(initialState);
  const [activeStepper, setActiveStepper] = useState(0);

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormDetails({
      ...formDetails,
      [name]: val,
    });
  };

  return (
    <ListingInputContext.Provider
      value={{
        initialState,
        formDetails,
        activeStepper,
        setActiveStepper,
        setFormDetails,
        handleChange,
      }}>
      {children}
    </ListingInputContext.Provider>
  );
};

export default ListingInputContext;