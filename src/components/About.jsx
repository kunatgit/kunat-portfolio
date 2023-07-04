import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] sm:w-[250px] md:w-[250px] lg:w-[240px] xl:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        style={{
          backgroundColor:"rgb(51 51 51 / var(--tw-bg-opacity))",
          opacity: 0.6
        }}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
        <h3 
        style={{
          color: "white"
        }}
        className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        HI, Welcome to profile Kunat Kamprommapirak.
        {<br></br>}
        {<br></br>}
        After successfully completing my studies in computer science, 
        I have a strong desire to work in the IT field, 
        particularly in web design and various API services. 
        Whenever there is something I don't know, 
        I always strive to study and learn about it, 
        which has given me hands-on experience in this area. 
        I truly enjoy working with programming.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
