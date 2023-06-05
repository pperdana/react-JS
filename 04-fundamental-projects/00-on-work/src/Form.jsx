import { useState } from "react";

const Form = ({ addItems }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addItems(name);
    setName("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className="text-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="btn">
        add item
      </button>
    </form>
  );
};

export default Form;
