import { useState } from "react";
import data from "./data";
import "./App.scss";

import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

const categories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [catList, setCatList] = useState(categories);

  const filterCat = (category) => {
    let newMenu = data.filter((item) => item.category === category);
    if (category === "all") {
      newMenu = data;
    }
    setMenu(newMenu);
  };

  return (
    <main>
      <section className="container">
        <Title />
        <Categories catList={catList} filterCat={filterCat} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
