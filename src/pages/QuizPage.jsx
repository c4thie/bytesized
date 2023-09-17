import React from "react";
import QuizForm from "../components/FancyQuiz";
import { preferenceQuiz } from "../components/QuizQuestions";
import { motion } from "framer-motion";

const Quiz = () => {
  const container = {
    hidden: {
      opacity: 0,
      transition: { duration: 1 },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delayChildren: 0,
        staggerDirection: -1,
      },
    },
  };
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <QuizForm questions={preferenceQuiz.questions} />
    </motion.div>
  );
};

export default Quiz;
