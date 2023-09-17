import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Quiz = ({ questions }) => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    // do something with the values
    window.alert(JSON.stringify(values, 0, 2));
    navigate("/map");
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerArray, setAnswerArray] = useState(
    Array(questions.length).fill(null)
  );
  const { question, choices } = questions[currentQuestion];

  const onSelection = (choice, index) => {
    setSelectedAnswer(index);
    const updatedAnswers = [...answerArray];
    updatedAnswers[currentQuestion] = choice;
    setAnswerArray(updatedAnswers);
  };

  const onClickNext = () => {
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/results"); // need to change
    }
  };

  const onClickBack = () => {
    setSelectedAnswer(null);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="quiz-module">
      <h2 className="quiz-title">Tell us a bit about yourself</h2>
      <div className="quiz-container">
        <>
          <h2>{question}</h2>
          <ul className="quiz-choice">
            {choices.map(({ choice, image }, index) => (
              <motion.li
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: [1, 1.05],
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onSelection(choice, index)}
                key={choice}
                //   className={selectedAnswer === index ? "selected-answer" : null}
                className={
                  answerArray[currentQuestion] === choice
                    ? "selected-answer"
                    : null
                }
              >
                {choice}
                <img src={image} alt="image" />
              </motion.li>
            ))}
          </ul>
          <div className="footer">
            <button
              className={`button ${
                currentQuestion === 0 ? "hide-back-button" : ""
              }`}
              onClick={onClickBack}
            >
              Back
            </button>
            <div>
              <span className="active-question-num">{currentQuestion + 1}</span>
              <span className="total-questions">/{questions.length}</span>
            </div>
            <button
              className="button"
              onClick={onClickNext}
              disabled={answerArray[currentQuestion] === null}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Quiz;
