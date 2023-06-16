import { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ items, setItems }) => {
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    console.log(name);
    const newItem = { name: name, completed: false, id: nanoid() };

    setItems([...items, newItem]);
    setName("");
  };

  return (
    <div className="form-container">
      <h2 className="heading">grocery bud</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-text"
        />
        <button type="submit" className="btn">
          add item
        </button>
      </form>
    </div>
  );
};

export default Form;
