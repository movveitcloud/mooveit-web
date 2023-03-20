import { createContext, useEffect, useState } from "react";

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
  services: [],
  vehicleType: "",
  costPerKm: "",
  packagingSize: "",
  costPerSize: "",

  //Space Details Stepper
  streetView: false,
  storageSize: { name: "" },
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
  packingPermit: false,
  packingInstruction: "",
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
  const [geolocation, setGeolocation] = useState();

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormDetails({
      ...formDetails,
      [name]: val,
    });
    console.log(formDetails);
    console.log(checked);
    console.log(val);
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => setGeolocation(position));
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <ListingInputContext.Provider
      value={{
        initialState,
        formDetails,
        activeStepper,
        geolocation,
        setActiveStepper,
        setFormDetails,
        handleChange,
      }}>
      {children}
    </ListingInputContext.Provider>
  );
};

export default ListingInputContext;
