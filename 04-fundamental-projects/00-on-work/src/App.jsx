import { useState } from "react";
import Form from "./Form";
import ListItems from "./ListItems";

import "./App.scss";

const App = () => {
  const [items, setItems] = useState([]);

  const handleShipping = (numId) => {
    const newItems = items.map((item) => {
      if (item.id === numId) {
        return { name: item.name, id: item.id, completed: !item.completed };
      }
      return item;
    });

    setItems(newItems);
  };

  const deleteItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  return (
    <main>
      <section className="container">
        <Form items={items} setItems={setItems} />
        <ListItems
          items={items}
          setItems={setItems}
          handleShipping={handleShipping}
          deleteItem={deleteItem}
        />
      </section>
    </main>
  );
};

export default App;
