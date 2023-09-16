import React, { useState, useEffect } from "react";
import { singleloader } from "../assets";
import { motion } from "framer-motion";
import "./Loading.css";

const Loading = () => {
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowImage1(true);
    }, 400);
    const timeout2 = setTimeout(() => {
      setShowImage2(true);
    }, 800);
    const timeout3 = setTimeout(() => {
      setShowImage3(true);
    }, 1200);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const image = {
    hidden: {
      opacity: 0,
      transition: { duration: 1, type: "spring" },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <div className="loading-container">
      {showImage1 && (
        <motion.img
          variants={image}
          initial="hidden"
          animate="show"
          src={singleloader}
          alt="Loading..."
        />
      )}
      {showImage2 && (
        <motion.img
          variants={image}
          initial="hidden"
          animate="show"
          src={singleloader}
          alt="Loading..."
        />
      )}
      {showImage3 && (
        <motion.img
          variants={image}
          initial="hidden"
          animate="show"
          src={singleloader}
          alt="Loading..."
        />
      )}
    </div>
  );
};

export default Loading;
