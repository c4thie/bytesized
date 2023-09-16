import React from "react";
import QuizForm from "../components/FancyQuiz";
import { preferenceQuiz } from "../components/QuizQuestions";

const Quiz = () => {
  return (
    <div>
      <QuizForm questions={preferenceQuiz.questions} />
    </div>
  );
};

export default Quiz;
