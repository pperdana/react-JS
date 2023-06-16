const Item = ({ name, id, completed, handleShipping, deleteItem }) => {
  return (
    <li className="item">
      <span className="item-name">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleShipping(id)}
        />
        <span>{name}</span>
      </span>
      <button className="delete-btn" onClick={() => deleteItem(id)}>
        delete
      </button>
    </li>
  );
};

export default Item;
