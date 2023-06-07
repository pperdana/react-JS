const MenuItem = ({ item }) => {
  const { id, category, desc, img, price, title } = item;

  return (
    <div className="item-container">
      <div className="img-box">
        <img src={img} alt={title} className="img" />
      </div>
      <div className="text-box">
        <h2 className="heading-secondary">{title}</h2>
        <span className="price">${price}</span>
        <p className="description">{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
