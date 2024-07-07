/** @format */

import "./about.scss";
import { animate, motion } from "framer-motion";

const About = () => {
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className='about'
      variants={variants}
      initial='initial'
      whileInView='animate'>
      <motion.div className='textContainer' variants={variants}>
        <p>
          I have always been interested in the
          <br />
          world of technology
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/andrew.png' />
          <h1>
            About <b>Me</b>
          </h1>
        </div>
        <div className='title'>
          <h1>
            As a <b>Informatics Student</b>
          </h1>
        </div>
      </motion.div>
      <motion.div className='descContainer' variants={variants}>
        Hello, my name is Andrew Enrico Andhyka. I am a passionate and creative
        individual who has just graduated from Multimedia Nusantara University
        with a degree in Informatics. During my studies, I built a strong
        foundation in various aspects of technology, combining my love for
        innovation with technical skills. I have learned a wide range of skills,
        including programming languages, web development, graphic design, and
        multimedia production. With a deep curiosity about the world of
        technology, I continuously seek to learn new things and push the
        boundaries of what can be achieved. I am always enthusiastic about
        accepting new challenges and collaborations, utilizing my skills to make
        meaningful contributions to my homeland and nation.
      </motion.div>
    </motion.div>
  );
};

export default About;
