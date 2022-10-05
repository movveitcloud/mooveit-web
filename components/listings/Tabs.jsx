import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const items = ["Act", "App Development", "Web Development", "Digital Strategy"];

  return (
    <nav className="flex gap-5 w-full  items-center justify-center overflow-x scroll">
      {items.map((item, i) => (
        <p
          className={`${
            i === activeTab
              ? "border-primary bg-primary border text-white font-bold rounded-md text-[10px] sm:text-[12px] px-2 py-2 sm:px-5 sm:py-4 "
              : "hover:border-primary hover:border text-primary border border-primary rounded-md"
          } text-[10px] sm:text-[12px] px-2 py-2 sm:px-5 sm:py-4  text-primary uppercase cursor-pointer`}
          onClick={() => setActiveTab(i)}
          key={i}>
          {item}
        </p>
      ))}
    </nav>
  );
};

export default Tabs;
