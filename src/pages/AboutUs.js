import React from 'react';
import { motion } from "framer-motion";

import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

import { pageAnimation } from "../animation";
import ScroolTop from '../components/ScrollTop';

const AboutUs=()=> {
    return (
      <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ScroolTop/>
      </motion.div>
  );
}

export default AboutUs;
