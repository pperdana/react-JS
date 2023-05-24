import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

import Text from "./Text";
import ArrowBtn from "./ArrowBtn";

import "./App.scss";
import data from "./data";

const App = () => {
  const [idx, setIdx] = useState(0);
  const [people, setPeople] = useState(data);

  const { image, job, name, text } = people[idx];
  console.log(`Current Id state: ${idx}`);

  const incIdx = () => {
    let newIdx = checkIdx(idx + 1);
    setIdx(newIdx);
  };

  const decIdx = () => {
    let newIdx = checkIdx(idx - 1);
    setIdx(newIdx);
  };

  const handleSurprise = () => {
    let newIdx = Math.floor(Math.random() * 4);
    if (newIdx === idx) {
      newIdx += 1;
      newIdx = checkIdx(newIdx);
    }
    setIdx(newIdx);
  };

  const checkIdx = (newIdx) => {
    if (newIdx === data.length) {
      return 0;
    }
    if (newIdx < 0) {
      return 3;
    }
    return newIdx;
  };

  return (
    <main>
      <section className="container">
        <div className="img-box">
          <img src={image} alt={name} className="img" />
          <div className="quote-box">
            <FaQuoteRight className="quote-icon" />
          </div>
        </div>
        <Text name={name} job={job} text={text} />
        <ArrowBtn decIdx={decIdx} incIdx={incIdx} />
        <button className="btn surprise-btn" onClick={handleSurprise}>
          surprise me
        </button>
      </section>
    </main>
  );
};
export default App;
