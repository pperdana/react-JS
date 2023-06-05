import Form from "./Form";
import Items from "./Items";
import { useState } from "react";
import "./App.scss";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState([]);

  const addItems = (name) => {
    const newItems = { name, completed: false, id: nanoid() };
    setItems([...items, newItems]);
  };

  const removeItem = (id) => {
    const newItem = items.filter((item) => item.id !== id);
    setItems(newItem);
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <main>
      <section className="form-container">
        <h2 className="heading-primary">grocery bud</h2>
        <Form addItems={addItems} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </main>
  );
};

export default App;
