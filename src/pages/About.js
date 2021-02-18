import React from "react";
import AboutSection from "../components/AboutSection";
import AttributeSection from "../components/AttributeSection";
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

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
      <ContactSection />
      <ScrollTop />
    </motion.div>
  );
};

export default About;
