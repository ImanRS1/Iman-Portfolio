import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const EducationAndSkills = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Education and Skills</h1>
    </motion.div>
  );
};

export default EducationAndSkills;
