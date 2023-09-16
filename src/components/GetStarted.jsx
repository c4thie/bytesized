import React, { useState } from "react";
import { Link } from "react-router-dom";
import { boba1 } from "../assets";
import "./GetStarted.css";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    transition: { duration: 2 },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delayChildren: 4,
      staggerDirection: -1,
    },
  },
};

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const GetStarted = () => {
  // const [showBoba, setShowBoba] = useState(false);
  // const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   const timeout1 = setTimeout(() => {
  //     setShowImage1(true);
  //   }, 400);
  //   const timeout2 = setTimeout(() => {
  //     setShowImage2(true);
  //   }, 800);
  //   const timeout3 = setTimeout(() => {
  //     setShowImage3(true);
  //   }, 1200);

  //   return () => {
  //     clearTimeout(timeout1);
  //     clearTimeout(timeout2);
  //     clearTimeout(timeout3);
  //   };
  // }, []);
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container"
    >
      <motion.img
        initial={{ y: 0 }}
        // animate={{ ...bounceTransition }}
        end={{ y: -50 }}
        src={boba1}
        alt="Boba"
      />
      <motion.div
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/quiz" className="container-button">
          Get Started
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default GetStarted;
