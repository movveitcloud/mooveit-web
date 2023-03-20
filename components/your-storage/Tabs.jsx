import React from "react";

const Tabs = ({ activeTab, setActiveTab, tabItems }) => {
  return (
    <nav className=" mt-2 mb-8 flex w-full flex-wrap gap-5 overflow-x-auto">
      {tabItems?.map(({ name, count }, i) => (
        <p
          key={i}
          className={`${
            activeTab === i ? " bg-accent text-primary" : " bg-[#DDDDDD] text-[#959595]"
            //} btn border-0 text-[.8rem] tracking-tight hover:bg-accent hover:text-primary`}
          } btn mt-2 border-0 text-[.5rem]  hover:bg-accent hover:text-primary lg:text-[.8rem]`}
          onClick={() => setActiveTab(i)}>
          {name}

          <span
            className={`${
              activeTab === i ? " bg-primary text-white" : " bg-[#c1bfbf] text-white"
            } ml-4 rounded-md py-1 px-2 text-[.5rem] lg:text-[.7rem] `}>
            {count}
          </span>
        </p>
      ))}
    </nav>
  );
};

export default Tabs;
