import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const EducationAndSkills = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Education and Skills</h1>
      <ScrollTop />
    </motion.div>
  );
};

export default EducationAndSkills;
