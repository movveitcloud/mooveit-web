import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const Accordion = ({ title, children }) => {
  const [active, setActive] = useState(false);
  const arrowIcon = active ? <ChevronUpIcon className="w-4" /> : <ChevronDownIcon className="w-4" />;

  return (
    <div className="mb-8 bg-white rounded-xl">
      <div
        className="flex justify-between px-6 py-4 mt-2 text-[#222222] cursor-pointer"
        onClick={() => setActive(!active)}>
        <h2 className="font-semibold capitalize">{title}</h2>
        {arrowIcon}
      </div>
      <motion.div
        initial={false}
        className="overflow-hidden"
        animate={{ height: active ? "auto" : "0px" }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}>
        <div className="w-full text-[#222222] px-6 pb-6">{children}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;
