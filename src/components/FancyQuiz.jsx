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
  const [answerArray, setAnswerArray] = useState(
    Array(questions.length).fill(null)
  );
  const { question, choices } = questions[currentQuestion];
  const onAnswerClick = (answer) => {
    const updatedAnswers = [...answerArray];
    updatedAnswers[currentQuestion] = answer;
    setAnswerArray(updatedAnswers);
    console.log(updatedAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="quiz-container">
      <>
        <span className="active-question-num">{currentQuestion + 1}</span>
        <span className="total-questions">/{questions.length}</span>
        <h2>{question}</h2>
        <u1>
          {choices.map((answer) => (
            <li onClick={() => onAnswerClick(answer)} key={answer}>
              {answer}
            </li>
          ))}
        </u1>
      </>
    </div>
  );
};

export default Quiz;
