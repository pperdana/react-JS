import { useEffect, useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

import Form from "./Form";
import "./App.scss";
import ColorList from "./ColorList";

const App = () => {
  const [hexColor, setHexColor] = useState("#f15025");
  const [colorValues, setColorValues] = useState([]);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy text: ", error);
    }
  };

  useEffect(() => {
    setColorValues(new Values(hexColor).all(10));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setColorValues(new Values(hexColor).all(10));
    } catch (error) {
      toast.error("Unable to parse color", error);
    }
  };

  return (
    <main>
      <ToastContainer position="top-center" />
      <section className="form-container">
        <Form
          hexColor={hexColor}
          setHexColor={setHexColor}
          handleSubmit={handleSubmit}
        />
      </section>
      <section className="color-container">
        <ColorList
          colorValues={colorValues}
          copyToClipboard={copyToClipboard}
        />
      </section>
    </main>
  );
};

export default App;
