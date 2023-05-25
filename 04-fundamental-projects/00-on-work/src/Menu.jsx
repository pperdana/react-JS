import MenuItem from "./MenuItem";

function Menu({ menu }) {
  return (
    <div className="menu-list">
      {menu.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Menu;
