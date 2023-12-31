import React from "react";
import { motion } from "framer-motion";

const Review = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      Review
    </motion.div>
  );
};

export default Review;
