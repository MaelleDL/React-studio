import React from 'react';
import { motion } from 'framer-motion';

import home1 from '../img/home1.png';

import { About, Description, Image, Hide } from "../style";
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from "./Wave";

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We Work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            true.
                        </motion.h2>
                    </Hide>
                    <motion.p variants={fade}>Contact us for any patin couffin boudin et tout le tintsouin</motion.p>
                    <motion.button variants={fade}>Contact Us</motion.button>
                </motion.div>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
            <Wave/>
        </About>
    )
};

export default AboutSection;