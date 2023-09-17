import React from "react";
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
        <h2 className="getstarted-title">Byte Sized Boba</h2>
        <p className="getstarted-description">
          Do you have a friend who always takes forever to decide what to order?
          Or maybe you’re that friend? The average student in Waterloo has easy
          access to over 10 different bubble tea shops (source: trust me).
          Whether you’re happy or sad or just want to lose money, Byte Sized
          Boba can help you decide what to get. We created Byte Sized Boba
          because we really wanted bubble tea on the first day of the hackathon
          but didn’t end up going. We always have bubble tea in our mind and
          hope our users do too. Start off with our quiz to find out your
          recommend beverage.
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
