import Item from "./Item";

const Items = ({ items, deleteItem, handleShipping }) => {
  return (
    <div className="items-container">
      <ul className="items-box">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              handleShipping={handleShipping}
              {...item}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Items;
