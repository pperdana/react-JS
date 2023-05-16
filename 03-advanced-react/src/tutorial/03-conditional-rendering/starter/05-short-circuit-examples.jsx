import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text || (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}

      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "1.5rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
    </div>
  );
};
const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Whatever Return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
