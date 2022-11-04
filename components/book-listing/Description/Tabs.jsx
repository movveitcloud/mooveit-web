import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const menuItems = ["Listing Details", "Dimensions", "Review"];

  return (
    <nav>
      <div className="flex gap-5 w-full">
        {menuItems.map((item, i) => (
          <div key={i}>
            <p
              className={`${
                activeTab === i ? "text-primary" : "text-[#959595]"
              } cursor-pointer font-light transition-all duration-500`}
              onClick={() => setActiveTab(i)}>
              {item}
            </p>
            <div
              className={`${
                activeTab === i ? "w-[40%] bg-primary" : "w-0"
              } mt-1 mb-6 h-0.5 transition-all duration-500`}
            />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Tabs;
