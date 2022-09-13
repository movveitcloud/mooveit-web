const Steppers = ({ activeStepper }) => {
  const items = ["Basic Information", "Space Details", "Availability", "Pricing"];

  return (
    <ul className="steps steps-horizontal w-full my-6 text-[14px] text-[#6666] font-semibold">
      {items.map((item, i) => {
        return (
          <li
            key={i}
            data-content={i < activeStepper ? "✓" : i + 1}
            className={`${i <= activeStepper ? "step step-primary text-primary" : "step text-[#959595]"} `}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
export default Steppers;
