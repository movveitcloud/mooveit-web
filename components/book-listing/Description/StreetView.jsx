import React from "react";
import { motion } from "framer-motion";

const StreetView = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      StreetView
    </motion.div>
  );
};

export default StreetView;
