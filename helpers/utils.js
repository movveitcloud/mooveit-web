export const formatMoney = (value, currency = "GBP", locale = "en-GB") => {
  value = Number(value);
  const formatter = new Intl.NumberFormat(locale, { style: "currency", currency });
  return formatter.format(value);
};
