/** @format */

import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div
      ref={ref}
      className='parallax'
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #071952, #141225)"
            : "linear-gradient(180deg, #141225, #071952)",
      }}>
      <motion.h1 style={{ y: yText }}>
        {type === "about" ? "About Me?" : "What I Do?"}
      </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div
        className='planets'
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "about" ? "/sun.png" : "/planets.png"
          })`,
        }}></motion.div>
      <motion.div className='starts' style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
