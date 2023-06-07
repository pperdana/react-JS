import Question from "./Question";

const QuestionList = ({ questions }) => {
  return (
    <div className="question-container">
      {questions.map((question, index) => {
        return <Question key={index} question={question} />;
      })}
    </div>
  );
};

export default QuestionList;
