import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="quiz-container">
      <>
        <span className="active-question-num">{currentQuestion + 1}</span>
        <span className="total-questions">/{questions.length}</span>
        <h2>{question}</h2>
        <ul>
          {choices.map((choice, index) => (
            <li
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
            </li>
          ))}
        </ul>
        <div className="footer">
          {currentQuestion !== 0 && (
            <button className="button" onClick={onClickBack}>
              Back
            </button>
          )}
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
  );
};

export default Quiz;
