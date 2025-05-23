import React from "react";
import { motion } from "framer-motion";
import "./Styles/Loader.css";

const Loader = () => {
  const circleRotate = {
    animate: {
      rotate: 360,
    },
    transition: {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
    },
  };

  const circleRotateReverse = {
    animate: {
      rotate: -360,
    },
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity,
    },
  };

  const dotBlink = (duration, delay) => ({
    opacity: [0, 1, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      delay: delay,
    },
  });

  const fixedDotPositions = [
    { top: "30%", left: "40%" },
    { top: "50%", left: "70%" },
    { top: "70%", left: "30%" },
    { top: "40%", left: "60%" },
    { top: "65%", left: "50%" },
    { top: "45%", left: "25%" },
    { top: "35%", left: "55%" },
  ];

  return (
    <div className="loader-container">
      <motion.div className="loader-circle outer" {...circleRotate}>
        <motion.div
          className="loader-dot single-dot"
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
        ></motion.div>
        {fixedDotPositions.map((position, index) => (
          <motion.div
            key={`small-dot-${index}`}
            className="loader-dot small-dot"
            style={{ position: "absolute", ...position }}
            animate={dotBlink(1 + Math.random() * 1, Math.random() * 1.5)}
          ></motion.div>
        ))}
      </motion.div>
      <motion.div
        className="loader-circle inner"
        {...circleRotateReverse}
      ></motion.div>
    </div>
  );
};

export default Loader;
