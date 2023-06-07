import SingleItem from "./SingleItem";
const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="list-container">
      <ul className="item-box">
        {items.map((item) => {
          return (
            <SingleItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              editItem={editItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Items;
