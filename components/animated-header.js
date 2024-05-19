'use client'
import React from "react";
import { motion } from "framer-motion";

const AnimatedHeader = ({ children }) => {
  return (
    <motion.h2 className="section-header"
      initial={{ opacity: [0, 0, 0, 0, 0], y: 150 }}
      whileInView={{ opacity: [0, 0.1, 0.3, 0.5, 1], y: 0 }}
      transition={{ duration: .6 }}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedHeader;
