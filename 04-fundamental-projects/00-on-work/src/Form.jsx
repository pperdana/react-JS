const Form = ({ hexColor, setHexColor, handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="heading-primary">color generator</h1>
      <input
        type="color"
        value={hexColor}
        onChange={(e) => setHexColor(e.target.value)}
        className="color-input"
      />
      <input
        type="text"
        value={hexColor}
        onChange={(e) => setHexColor(e.target.value)}
        className="text-input"
      />
      <button
        style={{
          background: `${hexColor}`,
        }}
        className="btn"
      >
        submit
      </button>
    </form>
  );
};

export default Form;
