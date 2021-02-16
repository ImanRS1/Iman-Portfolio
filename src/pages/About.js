import React from "react";
import AboutSection from "../components/AboutSection";
import AttributeSection from "../components/AttributeSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <AttributeSection />
    </motion.div>
  );
};

export default About;
