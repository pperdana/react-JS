import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

import "./App.scss";

const App = () => {
  const [num, setNum] = useState(1);
  const [content, setContent] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleGenerate = () => {
    if (num < text.length && num > 0) {
      const newContent = text.slice(0, num);
      setContent(newContent);
      return;
    }
    setContent([]);
  };

  return (
    <main>
      <section className="main-container">
        <h1 className="heading-primary">tired of boring lorem ipsum?</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="number" className="form-label">
            paragraphs:
          </label>
          <input
            type="number"
            id="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            min={1}
            max={8}
            className="form-number"
          />
          <button className="btn" onClick={handleGenerate}>
            generate
          </button>
        </form>
      </section>

      <article className="text-container">
        {content.map((item) => {
          return (
            <p key={nanoid()} className="paragraph">
              {item}
            </p>
          );
        })}
      </article>
    </main>
  );
};
export default App;
