import { createContext, useState } from "react";

const ListingInputContext = createContext();

const initialState = {
  //Basic Information Stepper
  address: "",
  formattedAddress: {},
  coordinates: {},
  storageType: "",
  storageFloor: "",
  storageFeaturesArray: [],
  storageFeatures: [],
  delivery: false,
  packing: false,

  //Space Details Stepper
  streetView: false,
  storageSize: "",
  storageNumber: 1,
  image: [],
  storageTitle: "",
  description: "",
  calendar: "",

  //Availability Stepper
  unavailabilityPeriods: [],
  unavailabilityReason: "",
  unavailabilityDate: "",
  storageAccessPeriod: "",
  storageAccessType: "",
  parkingPermit: false,
  parkingInstruction: "",
  bookingDuration: "",
  bookingNotice: "",

  //Pricing Stepper
  priceType: "custom",
  monthlyRate: 0,
  hourlyRate: 0,
  consent: false,
};

export const ListingInputContextProvider = ({ children }) => {
  const [formDetails, setFormDetails] = useState(initialState);
  const [activeStepper, setActiveStepper] = useState(0);
  const [preview, setPreview] = useState([]);

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
        preview,
        setPreview,
      }}>
      {children}
    </ListingInputContext.Provider>
  );
};

export default ListingInputContext;
