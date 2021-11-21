import React from "react";
import AboutSection from "../components/AboutSection";
import AttributeSection from "../components/AttributeSection";
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <AttributeSection />
      <ProjectSection />
      <ContactSection />
      <ScrollTop />
    </AboutContainer>
  );
};

const AboutContainer = styled(motion.div)`
  max-width: 1800px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`



export default About;
