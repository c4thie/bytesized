import React from "react";
import QuizForm from "../components/FancyQuiz";
import { preferenceQuiz } from "../components/QuizQuestions";

const Quiz = () => {
  return (
    <div>
      <h2>First Tell Us a Bit About You</h2>
      <QuizForm questions={preferenceQuiz.questions} />
    </div>
  );
};

export default Quiz;
