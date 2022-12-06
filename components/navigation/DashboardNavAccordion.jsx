import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const DashboardNavAccordion = ({ path, title, icon, iconActive, subMenus, pathname, userData }) => {
  const [active, setActive] = useState(false);
  const arrowIcon = active ? <ChevronUpIcon className="w-4" /> : <ChevronDownIcon className="w-4" />;

  useEffect(() => {
    if (subMenus?.find((a) => pathname.includes(a.path))) {
      setActive(true);
    }
  }, []);

  return (
    <>
      {/* ACCORDION TITLE */}
      <a
        href={path}
        className={`flex gap-7 items-center pr-5 py-2 mb-2 w-full hover:text-primary cursor-pointer ${
          subMenus?.find((a) => pathname.includes(a.path))
            ? "text-primary font-semibold border-r-2 border-primary"
            : "text-[#959595]"
        }`}
        onClick={() => setActive(!active)}>
        <div className="flex gap-4">
          <p className="w-6">{pathname?.includes(path) ? iconActive : icon}</p>
          <h2 className="text-sm">{title}</h2>
        </div>
        <span className="min-w-fit">{arrowIcon}</span>
      </a>

      {/* ACCORDION CONTENT */}
      <motion.div
        initial={false}
        className="overflow-hidden"
        animate={{ height: active ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}>
        <div className="flex flex-col w-full px-6">
          {subMenus.map(
            ({ path, title, permission }, i) =>
              permission.includes(userData?.role) && (
                <a
                  key={path}
                  href={path}
                  className={`text-sm px-4 py-[6px] ml-3 mb-[6px] w-full hover:text-primary cursor-pointer ${
                    pathname?.includes(path) ? "text-primary" : "text-[#959595]"
                  }`}
                  onClick={() => setActive(!active)}>
                  {title}
                </a>
              )
          )}
        </div>
      </motion.div>
    </>
  );
};

export default DashboardNavAccordion;
