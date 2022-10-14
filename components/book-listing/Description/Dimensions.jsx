import React from "react";
import { motion } from "framer-motion";

const Dimensions = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      Dimensions
    </motion.div>
  );
};

export default Dimensions;
