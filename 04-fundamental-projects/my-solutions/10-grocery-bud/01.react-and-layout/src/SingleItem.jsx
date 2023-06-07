const SingleItem = ({ item, removeItem, editItem }) => {
  const { id, name, completed } = item;

  return (
    <li className="item">
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="scales"
          name="scales"
          checked={completed}
          onChange={() => editItem(id)}
        />
        <label
          style={{ textDecoration: `${completed ? "line-through" : "none"}` }}
          className="label-checkbox"
        >
          {name}
        </label>
      </div>
      <button className="delete-btn" onClick={() => removeItem(id)}>
        delete
      </button>
    </li>
  );
};

export default SingleItem;
