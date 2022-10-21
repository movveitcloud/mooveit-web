import { authenticatedUser } from "../redux/features/auth.slice";

export const formatMoney = (value, currency = "GBP", locale = "en-GB") => {
  value = Number(value);
  const formatter = new Intl.NumberFormat(locale, { style: "currency", currency });
  return formatter.format(value);
};

export const getValue = ({ options, key }) => {
  const item = options.find((p) => p.value == key);
  return item ? item.name : "N/A";
};

export const isPartner = authenticatedUser() && authenticatedUser().role == "partner" ? true : false;
export const isCustomer = authenticatedUser() && authenticatedUser().role == "customer" ? true : false;
