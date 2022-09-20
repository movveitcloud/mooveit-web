const Steppers = ({ activeStepper, setActiveStepper }) => {
  const items = ["Basic Information", "Space Details", "Availability", "Pricing"];

  return (
    <ul className="steps steps-horizontal w-full my-6  text-[#6666] font-semibold">
      {items.map((item, i) => {
        return (
          <li
            key={i}
            data-content={i < activeStepper ? "✓" : i + 1}
            className={`${i <= activeStepper ? "step-accent text-primary" : "text-[#959595]"} step cursor-pointer`}
            onClick={() => setActiveStepper(i)}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
export default Steppers;
