import data from "./data";
import "./App.scss";
import { useState } from "react";

import PeopleList from "./PeopleList";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h1 className="title">{people.length} birthdays today</h1>
        <PeopleList people={people} />
        <button className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
