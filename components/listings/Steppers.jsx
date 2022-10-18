import { useContext } from "react";
import { ListingInputContext } from "../../context";

const Steppers = () => {
  const { activeStepper, setActiveStepper } = useContext(ListingInputContext);

  const items = ["Basic Information", "Space Details", "Availability", "Pricing"];

  return (
    <ul className="steps steps-horizontal w-full my-6  text-[#6666] font-semibold">
      {items.map((item, i) => {
        return (
          <li
            key={i}
            data-content={i < activeStepper ? "✓" : i + 1}
            className={`${i <= activeStepper ? "step-accent text-primary" : "step-info text-[#959595]"} step`}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
export default Steppers;
