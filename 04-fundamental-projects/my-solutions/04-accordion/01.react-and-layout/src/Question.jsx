import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const Question = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { id, info, title } = question;

  return (
    <div className="text-box">
      <div className="question">
        <span className="text">{title}</span>
        <FaPlusCircle
          className="btn"
          onClick={() => setShowAnswer(!showAnswer)}
        />
      </div>
      {showAnswer && <p className="answer">{info}</p>}
    </div>
  );
};

export default Question;
