import { useState } from "react";
import data from "./data";

import QuestionList from "./QuestionList";
import "./App.scss";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="questions-box">
        <h1 className="heading-primary">questions</h1>
        <QuestionList questions={questions} />
      </section>
    </main>
  );
};
export default App;
