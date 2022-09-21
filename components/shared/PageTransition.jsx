import React from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
