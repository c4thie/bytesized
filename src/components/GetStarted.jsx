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
      delayChildren: 0,
      staggerDirection: -1,
    },
  },
};

const GetStarted = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="getstarted-container"
    >
      <div className="getstarted-text-container">
        <h2 className="getstarted-title">ByteSized Boba</h2>
        <p className="getstarted-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <motion.div
          transition={{ duration: 0.6 }}
          whileHover={{ scale: [1, 1.05], originX: 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/quiz" className="container-button">
            Get Started
          </Link>
        </motion.div>
      </div>
      <motion.img
        animate={{ y: -15 }}
        transition={{
          delay: 0.3,
          duration: 2,
          ease: [0, 0.335, 0.925, 1],
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src={boba1}
        alt="Boba"
      />
    </motion.div>
  );
};

export default GetStarted;
