const Switch = ({ name, handleChange, formDetails }) => {
  return (
    <input
      type="checkbox"
      name={name}
      onChange={handleChange}
      checked={formDetails[name]}
      className="toggle toggle-primary toggle-sm bg-[#cccccc] h-4 w-7"
    />
  );
};

export default Switch;
